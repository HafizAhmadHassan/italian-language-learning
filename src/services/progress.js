import storage from './storage.js';

const LEVELS = [
  { name: 'Beginner', minXp: 0 },
  { name: 'Explorer', minXp: 100 },
  { name: 'Traveler', minXp: 300 },
  { name: 'Conversationalist', minXp: 600 },
  { name: 'Fluent Speaker', minXp: 1000 },
];

function getDefaultProgress() {
  return {
    completedLessons: [],
    vocabularyLearned: [],
    quizScores: [],
    xp: 0,
    currentStreak: 0,
    lastActivityDate: null,
    dailyMinutes: 0,
    currentLevel: 'Beginner',
    savedWords: [],
    weakVocabulary: [],
    dailyActivity: {},
    totalLessonsCompleted: 0,
    totalVocabularyLearned: 0,
    longestStreak: 0,
  };
}

function getProgress() {
  return storage.get('progress', getDefaultProgress());
}

function saveProgress(progress) {
  progress.currentLevel = getLevel(progress.xp);
  storage.set('progress', progress);
}

function addXP(amount) {
  const progress = getProgress();
  progress.xp += amount;
  progress.currentLevel = getLevel(progress.xp);
  saveProgress(progress);
  return progress;
}

function completeLesson(lessonId, score) {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.totalLessonsCompleted += 1;
  }
  if (score !== undefined) {
    progress.quizScores.push({
      lessonId,
      score,
      date: new Date().toISOString(),
    });
  }
  const xpEarned = score !== undefined ? Math.round(score * 10) + 25 : 25;
  progress.xp += xpEarned;
  progress.currentLevel = getLevel(progress.xp);
  saveProgress(progress);
  return { progress, xpEarned };
}

function learnVocabulary(wordId) {
  const progress = getProgress();
  if (!progress.vocabularyLearned.includes(wordId)) {
    progress.vocabularyLearned.push(wordId);
    progress.totalVocabularyLearned += 1;
  }
  progress.xp += 5;
  progress.currentLevel = getLevel(progress.xp);
  saveProgress(progress);
  return progress;
}

function saveWord(wordId) {
  const progress = getProgress();
  if (!progress.savedWords.includes(wordId)) {
    progress.savedWords.push(wordId);
    saveProgress(progress);
  }
  return progress;
}

function unsaveWord(wordId) {
  const progress = getProgress();
  progress.savedWords = progress.savedWords.filter((id) => id !== wordId);
  saveProgress(progress);
  return progress;
}

function markVocabularyWeak(wordId) {
  const progress = getProgress();
  if (!progress.weakVocabulary.includes(wordId)) {
    progress.weakVocabulary.push(wordId);
    saveProgress(progress);
  }
  return progress;
}

function markVocabularyStrong(wordId) {
  const progress = getProgress();
  progress.weakVocabulary = progress.weakVocabulary.filter((id) => id !== wordId);
  saveProgress(progress);
  return progress;
}

function getStreak() {
  const progress = getProgress();
  return progress.currentStreak;
}

function updateStreak() {
  const progress = getProgress();
  const today = new Date().toISOString().split('T')[0];

  if (progress.lastActivityDate === today) {
    return progress.currentStreak;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (progress.lastActivityDate === yesterdayStr) {
    progress.currentStreak += 1;
  } else if (progress.lastActivityDate !== today) {
    progress.currentStreak = 1;
  }

  if (progress.currentStreak > progress.longestStreak) {
    progress.longestStreak = progress.currentStreak;
  }

  progress.lastActivityDate = today;
  saveProgress(progress);
  return progress.currentStreak;
}

function recordActivity(minutes) {
  const progress = getProgress();
  const today = new Date().toISOString().split('T')[0];

  if (!progress.dailyActivity[today]) {
    progress.dailyActivity[today] = { minutes: 0, lessonsCompleted: 0, wordsLearned: 0 };
  }

  progress.dailyActivity[today].minutes += minutes;
  progress.dailyMinutes += minutes;

  updateStreak();
  saveProgress(progress);
  return progress;
}

function getDailyProgress() {
  const progress = getProgress();
  const today = new Date().toISOString().split('T')[0];
  return progress.dailyActivity[today] || { minutes: 0, lessonsCompleted: 0, wordsLearned: 0 };
}

function getWeeklyActivity() {
  const progress = getProgress();
  const activity = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const dayActivity = progress.dailyActivity[dateStr] || {
      minutes: 0,
      lessonsCompleted: 0,
      wordsLearned: 0,
    };
    activity.push({
      date: dateStr,
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      ...dayActivity,
    });
  }

  return activity;
}

function getSkillBreakdown() {
  const progress = getProgress();
  return {
    lessonsCompleted: progress.totalLessonsCompleted,
    vocabularyLearned: progress.totalVocabularyLearned,
    savedWords: progress.savedWords.length,
    weakWords: progress.weakVocabulary.length,
    averageScore:
      progress.quizScores.length > 0
        ? Math.round(
            progress.quizScores.reduce((sum, s) => sum + s.score, 0) /
              progress.quizScores.length
          )
        : 0,
    totalQuizzes: progress.quizScores.length,
    xp: progress.xp,
    level: progress.currentLevel,
    streak: progress.currentStreak,
    longestStreak: progress.longestStreak,
    totalMinutes: progress.dailyMinutes,
  };
}

function resetProgress() {
  const defaultProgress = getDefaultProgress();
  saveProgress(defaultProgress);
  return defaultProgress;
}

function getLevel(xp) {
  let levelName = LEVELS[0].name;
  for (const level of LEVELS) {
    if (xp >= level.minXp) {
      levelName = level.name;
    }
  }
  return levelName;
}

function getLevelInfo(xp) {
  const currentLevelIdx = LEVELS.findIndex((l, i) => {
    const next = LEVELS[i + 1];
    return xp >= l.minXp && (!next || xp < next.minXp);
  });

  const current = LEVELS[currentLevelIdx];
  const next = LEVELS[currentLevelIdx + 1];

  return {
    name: current.name,
    xp: xp,
    minXp: current.minXp,
    maxXp: next ? next.minXp : current.minXp,
    progress: next ? ((xp - current.minXp) / (next.minXp - current.minXp)) * 100 : 100,
    isMaxLevel: !next,
  };
}

const progress = {
  getProgress,
  addXP,
  completeLesson,
  learnVocabulary,
  saveWord,
  unsaveWord,
  markVocabularyWeak,
  markVocabularyStrong,
  getStreak,
  updateStreak,
  recordActivity,
  getDailyProgress,
  getWeeklyActivity,
  getSkillBreakdown,
  resetProgress,
  getLevel,
  getLevelInfo,
};

export default progress;
