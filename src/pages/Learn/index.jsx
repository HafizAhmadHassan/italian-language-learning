import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import lessons from '../../data/lessons';
import progress from '../../services/progress';
import LessonCard from '../../components/LessonCard';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

const TABS = ['All', 'A1', 'A2', 'B1', 'B2', 'C1'];

export default function Learn() {
  const [activeTab, setActiveTab] = useState('All');
  const p = progress.getProgress();

  const filteredLessons = useMemo(() => {
    let list = lessons;
    if (activeTab !== 'All') {
      list = list.filter((l) => l.level === activeTab);
    }
    return list;
  }, [activeTab]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const lesson of filteredLessons) {
      const key = `${lesson.unit}-${lesson.unitTitle}`;
      if (!map.has(key)) {
        map.set(key, { unit: lesson.unit, unitTitle: lesson.unitTitle, lessons: [] });
      }
      map.get(key).lessons.push(lesson);
    }
    return Array.from(map.values());
  }, [filteredLessons]);

  const completedIds = p.completedLessons;

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-italian-green/10 flex items-center justify-center">
              <BookOpen size={20} className="text-italian-green" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
              Learn Italian
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {completedIds.length} of {lessons.length} lessons completed
          </p>
        </motion.div>

        {/* Level Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex gap-2 mb-8 overflow-x-auto pb-1"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0 ${
                activeTab === tab
                  ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-italian-dark-surface dark:text-gray-400 dark:hover:bg-italian-dark-border'
              }`}
            >
              {tab === 'All' ? 'All Levels' : tab}
            </button>
          ))}
        </motion.div>

        {/* Units and Lessons */}
        {grouped.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-center py-16"
          >
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              No lessons found for this level.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {grouped.map((group, gi) => (
              <motion.section
                key={group.unit}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={gi + 2}
              >
                <h2 className="font-heading font-semibold text-sm text-italian-sage uppercase tracking-wider mb-3 px-1">
                  Unit {group.unit} &middot; {group.unitTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.lessons.map((lesson) => {
                    const isCompleted = completedIds.includes(lesson.id);

                    return (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        isCompleted={isCompleted}
                        isLocked={false}
                      />
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
