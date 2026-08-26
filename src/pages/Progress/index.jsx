import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, Zap, BookOpen, Target, Flame, Star, Award, TrendingUp, CheckCircle } from 'lucide-react';
import progress from '../../services/progress';
import storage from '../../services/storage';
import ProgressBar from '../../components/UI/ProgressBar';

const LEVELS = [
  { name: 'Beginner', xp: 0, color: '#9CA3AF' },
  { name: 'Explorer', xp: 100, color: '#009246' },
  { name: 'Traveler', xp: 300, color: '#D4A843' },
  { name: 'Conversationalist', xp: 600, color: '#7CB69D' },
  { name: 'Fluent Speaker', xp: 1000, color: '#CE2B37' },
];

const ACHIEVEMENTS = [
  { id: 'first_lesson', title: 'First Steps', desc: 'Complete your first lesson', icon: '🎯', check: (p) => p.completedLessons?.length >= 1 },
  { id: 'ten_words', title: 'Word Collector', desc: 'Learn 10 vocabulary words', icon: '📚', check: (p) => p.learnedVocabulary?.length >= 10 },
  { id: 'streak_3', title: 'Getting Started', desc: 'Maintain a 3-day streak', icon: '🔥', check: (p) => p.streak >= 3 },
  { id: 'streak_7', title: 'Week Warrior', desc: 'Maintain a 7-day streak', icon: '💪', check: (p) => p.streak >= 7 },
  { id: 'xp_100', title: 'Century Club', desc: 'Earn 100 XP', icon: '⚡', check: (p) => p.xp >= 100 },
  { id: 'xp_500', title: 'XP Master', desc: 'Earn 500 XP', icon: '🏆', check: (p) => p.xp >= 500 },
  { id: 'five_lessons', title: 'Dedicated Learner', desc: 'Complete 5 lessons', icon: '📖', check: (p) => p.completedLessons?.length >= 5 },
  { id: 'twenty_words', title: 'Vocabulary Star', desc: 'Learn 20 words', icon: '⭐', check: (p) => p.learnedVocabulary?.length >= 20 },
];

const SKILLS = [
  { name: 'Vocabulary', key: 'vocabulary', color: '#009246' },
  { name: 'Grammar', key: 'grammar', color: '#D4A843' },
  { name: 'Listening', key: 'listening', color: '#CE2B37' },
  { name: 'Reading', key: 'reading', color: '#7CB69D' },
  { name: 'Speaking', key: 'speaking', color: '#6366F1' },
];

export default function ProgressPage() {
  const [prog, setProg] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const p = progress.getProgress();
    setProg(p);
    const week = progress.getWeeklyActivity();
    setWeeklyData(week);
    const sk = progress.getSkillBreakdown();
    setSkills(sk);
  }, []);

  if (!prog) return null;

  const currentLevelIdx = LEVELS.findIndex((l, i) => {
    const next = LEVELS[i + 1];
    return next ? prog.xp < next.xp : true;
  });
  const currentLevel = LEVELS[currentLevelIdx];
  const nextLevel = LEVELS[currentLevelIdx + 1];
  const xpInLevel = nextLevel ? prog.xp - currentLevel.xp : prog.xp;
  const xpNeeded = nextLevel ? nextLevel.xp - currentLevel.xp : 100;
  const levelProgress = nextLevel ? Math.min((xpInLevel / xpNeeded) * 100, 100) : 100;

  const statCards = [
    { label: 'Level', value: currentLevel.name, icon: Award, color: 'text-italian-gold' },
    { label: 'Total XP', value: prog.xp || 0, icon: Zap, color: 'text-italian-green' },
    { label: 'Lessons Done', value: prog.completedLessons?.length || 0, icon: BookOpen, color: 'text-blue-500' },
    { label: 'Words Learned', value: prog.learnedVocabulary?.length || 0, icon: Target, color: 'text-italian-sage' },
    { label: 'Current Streak', value: `${prog.streak || 0} days`, icon: Flame, color: 'text-italian-red' },
    { label: 'Practice Accuracy', value: `${prog.practiceAccuracy || 0}%`, icon: TrendingUp, color: 'text-purple-500' },
  ];

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-italian-charcoal dark:text-white mb-2 font-heading">Your Progress</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Track your Italian learning journey</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white dark:bg-italian-dark-card rounded-2xl p-4 border border-gray-100 dark:border-italian-dark-border shadow-sm text-center"
          >
            <stat.icon size={24} className={`${stat.color} mx-auto mb-2`} />
            <p className="text-xl font-bold text-italian-charcoal dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {nextLevel && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-italian-gold" />
              <span className="font-semibold text-italian-charcoal dark:text-white">{currentLevel.name}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{xpInLevel}/{xpNeeded} XP to {nextLevel.name}</span>
          </div>
          <ProgressBar value={levelProgress} color="green" size="lg" />
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm">
          <h2 className="text-lg font-bold text-italian-charcoal dark:text-white mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#252540', color: '#e5e5e5' }} />
              <Bar dataKey="minutes" radius={[6, 6, 0, 0]} maxBarSize={40}>
                {weeklyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.minutes > 0 ? '#009246' : '#3D3D5C'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm">
          <h2 className="text-lg font-bold text-italian-charcoal dark:text-white mb-4">Skill Breakdown</h2>
          <div className="space-y-4">
            {SKILLS.map(skill => (
              <div key={skill.key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skills[skill.key] || 0}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skills[skill.key] || 0}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm">
        <h2 className="text-lg font-bold text-italian-charcoal dark:text-white mb-4">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map(achievement => {
            const earned = achievement.check(prog);
            return (
              <div key={achievement.id} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${earned ? 'bg-italian-green/10 dark:bg-italian-green/20 border border-italian-green/30' : 'bg-gray-50 dark:bg-italian-dark-surface border border-transparent opacity-50'}`}>
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-italian-charcoal dark:text-white">{achievement.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.desc}</p>
                </div>
                {earned && <CheckCircle size={16} className="text-italian-green ml-auto" />}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
