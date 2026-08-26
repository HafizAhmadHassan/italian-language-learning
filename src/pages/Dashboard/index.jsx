import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  Flame,
  BookOpen,
  Trophy,
  Play,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import progress from '../../services/progress';
import auth from '../../services/auth';
import storage from '../../services/storage';
import vocabulary from '../../data/vocabulary';
import lessons from '../../data/lessons';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-italian-dark-card border border-gray-200 dark:border-italian-dark-border rounded-xl px-3 py-2 shadow-lg">
        <p className="text-xs font-semibold text-italian-charcoal dark:text-gray-200">{label}</p>
        <p className="text-xs text-italian-green font-medium">{payload[0].value} min</p>
      </div>
    );
  }
  return null;
}

export default function Dashboard() {
  const [dark, setDark] = useState(() => storage.get('darkMode', false));
  const user = auth.getCurrentUser();
  const name = user?.name || 'Student';
  const p = progress.getProgress();
  const daily = progress.getDailyProgress();
  const weeklyData = progress.getWeeklyActivity();

  useEffect(() => {
    const handler = () => setDark(storage.get('darkMode', false));
    window.addEventListener('darkmode-change', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('darkmode-change', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const currentLesson = useMemo(() => {
    for (const lesson of lessons) {
      if (!p.completedLessons.includes(lesson.id)) return lesson;
    }
    return lessons[0];
  }, [p.completedLessons]);

  const lessonProgress = useMemo(() => {
    if (!currentLesson) return 0;
    const idx = lessons.findIndex((l) => l.id === currentLesson.id);
    return idx === 0 ? 0 : Math.round((p.completedLessons.length / lessons.length) * 100);
  }, [currentLesson, p.completedLessons]);

  const todayWords = useMemo(() => vocabulary.slice(0, 5), []);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buongiorno';
    if (hour < 18) return 'Buonasera';
    return 'Buonanotte';
  }, []);

  const statCards = [
    {
      label: "Today's Goal",
      value: daily.minutes || 0,
      suffix: 'min',
      icon: Clock,
      color: 'bg-italian-green/10 text-italian-green',
    },
    {
      label: 'Current Streak',
      value: p.currentStreak,
      suffix: 'days',
      icon: Flame,
      color: 'bg-italian-red/10 text-italian-red',
    },
    {
      label: 'Lessons Done',
      value: p.totalLessonsCompleted,
      suffix: '',
      icon: BookOpen,
      color: 'bg-italian-gold/10 text-italian-gold',
    },
    {
      label: 'Words Learned',
      value: p.totalVocabularyLearned,
      suffix: '',
      icon: Trophy,
      color: 'bg-italian-sage/10 text-italian-sage',
    },
  ];

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Greeting */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white mb-1">
            {greeting}, {name}! 🇮🇹
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-8">
            Ready to continue learning Italian?
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i + 1}
              className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-4 md:p-5"
            >
              <div className={`w-9 h-9 rounded-xl ${card.color} flex items-center justify-center mb-3`}>
                <card.icon size={18} />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-italian-charcoal dark:text-white">
                {card.value}
                {card.suffix && (
                  <span className="text-sm font-normal text-gray-400 ml-1">{card.suffix}</span>
                )}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Continue Learning */}
        {currentLesson && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="mb-10"
          >
            <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white mb-4">
              Continue Learning
            </h2>
            <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-italian-sage uppercase tracking-wider mb-1">
                  Unit {currentLesson.unit} &middot; {currentLesson.unitTitle}
                </p>
                <h3 className="font-heading font-semibold text-base md:text-lg text-italian-charcoal dark:text-white mb-2">
                  {currentLesson.title}
                </h3>
                <div className="w-full h-2 rounded-full bg-italian-green/10 overflow-hidden mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lessonProgress}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-italian-green"
                  />
                </div>
                <p className="text-xs text-gray-400">{lessonProgress}% complete</p>
              </div>
              <Link
                to={`/lesson/${currentLesson.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-italian-green text-white text-sm font-medium shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors shrink-0"
              >
                <Play size={16} fill="currentColor" />
                Continue Lesson
              </Link>
            </div>
          </motion.section>
        )}

        {/* Today's Vocabulary */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={6}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white">
              Today's Vocabulary
            </h2>
            <Link
              to="/vocabulary"
              className="text-xs font-medium text-italian-green hover:underline flex items-center gap-1"
            >
              See all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {todayWords.map((word) => (
              <div
                key={word.id}
                className="shrink-0 w-44 rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-4"
              >
                <p className="font-heading font-bold text-lg text-italian-charcoal dark:text-white">
                  {word.italian}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {word.translations.en}
                </p>
                <p className="text-[11px] text-italian-sage font-medium mt-2 uppercase tracking-wide">
                  {word.pronunciation}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Daily Challenge */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={7}
          className="mb-10"
        >
          <Link
            to="/practice"
            className="block rounded-2xl border border-italian-gold/30 bg-gradient-to-r from-italian-gold/5 to-italian-gold/10 dark:from-italian-gold/5 dark:to-italian-gold/10 p-5 md:p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-italian-gold/15 flex items-center justify-center shrink-0">
                <Zap size={22} className="text-italian-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-base text-italian-charcoal dark:text-white">
                  Daily Challenge
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Complete 5 vocabulary questions to earn bonus XP
                </p>
              </div>
              <ArrowRight size={20} className="text-italian-gold shrink-0" />
            </div>
          </Link>
        </motion.section>

        {/* Weekly Activity */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={8}
          className="mb-6"
        >
          <h2 className="font-heading font-semibold text-lg text-italian-charcoal dark:text-white mb-4">
            Weekly Activity
          </h2>
          <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-6">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData} barCategoryGap="25%">
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: dark ? '#9CA3AF' : '#9CA3AF' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: dark ? '#6B7280' : '#D1D5DB' }}
                  width={30}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }} />
                <Bar
                  dataKey="minutes"
                  fill="#009246"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
