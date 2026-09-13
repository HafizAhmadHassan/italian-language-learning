import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Layers,
  Grid3x3,
  Type,
  ListOrdered,
  BookOpenText,
  Award,
  Trophy,
  RotateCcw,
  MessageSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import storage from '../../../services/storage';
import { dimostrativiStages, dimostrativiExercises, dimostrativiFinalBands } from './dimostrativiData';
import {
  MultipleChoiceExercise,
  FillBlankExercise,
  MatchingExercise,
  WordOrderExercise,
  StoryExercise,
  MasteryTestExercise,
  TranslationExercise,
} from '../shared/ExerciseComponents';

const STORAGE_KEY = 'dimostrativiResults';

function SectionLearner({ section }) {
  if (!section) return null;

  const renderBullets = (bullets) => (
    <div className="space-y-3">
      {bullets.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="p-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300">{b.text}</p>
          {b.example && (
            <p className="text-xs mt-1 italic text-gray-500 dark:text-gray-400">{b.example}</p>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderExamples = (examples) => (
    <div className="space-y-2">
      {examples.map((ex, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border"
        >
          <span className="text-sm font-semibold text-italian-lime whitespace-nowrap">
            {ex.italian}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">{ex.translation}</span>
        </div>
      ))}
    </div>
  );

  const renderTimeline = (tl) => (
    <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
      <div className="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 mb-3">
        <span>{tl.left}</span>
        <span className="text-italian-lime">{tl.center}</span>
        <span>{tl.right}</span>
      </div>
      <div className="relative h-1 bg-gray-200 dark:bg-italian-dark-border rounded-full mb-4">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400" />
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-italian-lime ring-2 ring-italian-lime/30" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300" />
      </div>
      {tl.examples && (
        <div className="flex flex-wrap gap-2 justify-center">
          {tl.examples.map((ex, i) => (
            <span
              key={i}
              className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                i === 1
                  ? 'bg-italian-lime/10 text-italian-lime border-italian-lime/20'
                  : 'bg-gray-100 dark:bg-italian-dark-border text-gray-500 dark:text-gray-400 border-gray-200 dark:border-italian-dark-border'
              }`}
            >
              {ex}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {section.heading && (
        <h3 className="text-sm font-bold text-italian-charcoal dark:text-white uppercase tracking-wider">
          {section.heading}
        </h3>
      )}
      {section.explanation && (
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{section.explanation}</p>
      )}

      {section.bullets && renderBullets(section.bullets)}
      {section.timeline && renderTimeline(section.timeline)}
      {section.examples && renderExamples(section.examples)}
      {section.patterns && (
        <div className="flex flex-wrap gap-2">
          {section.patterns.map((p, i) => (
            <span
              key={i}
              className="inline-flex px-3 py-1.5 rounded-lg bg-italian-lime/10 text-italian-lime text-sm font-bold border border-italian-lime/20"
            >
              {p}
            </span>
          ))}
        </div>
      )}

      {section.note && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-italian-lime/10 border border-italian-lime/25">
          <MessageSquare size={16} className="text-italian-lime mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{section.note}</p>
        </div>
      )}
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-base font-heading font-bold text-italian-charcoal dark:text-white">Final Review — Demonstratives Reference</h3>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">The Key Idea</h4>
        <p className="text-lg font-semibold text-italian-charcoal dark:text-white">
          Your demonstratives <span className="text-italian-lime">point near and far</span>: <span className="text-italian-lime">questo</span> is near the speaker, <span className="text-italian-lime">quello</span> is far. They work as <span className="text-italian-lime">adjective + noun</span> (questo libro) or as <span className="text-italian-lime">pronoun</span> standing alone (Questo è bello).
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">The Questo Family (near)</h4>
        <div className="flex flex-wrap gap-2">
          {['questo + m sing → questo libro', 'questa + f sing → questa casa', 'questi + m plur → questi libri', 'queste + f plur → queste case', 'quest\' + vowel → quest\'anno, quest\'uomo'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-italian-lime/10 text-italian-lime text-xs font-bold border border-italian-lime/20">{p}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">The Quello Family (far) — look at the first letter</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-italian-lime/5 border border-italian-lime/20">
            <p className="text-xs font-bold text-italian-lime uppercase tracking-wider mb-2">Before the noun</p>
            <div className="space-y-1">
              {['quel + consonant → quel libro, quel caffè', 'quell\' + vowel → quell\'amico, quell\'uomo', 'quello + s+cons / z / gn / ps / x → quello studente, quello zaino', 'quella (f sing) → quella casa'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Plurals</p>
            <div className="space-y-1">
              {['quei + consonant → quei libri', 'quegli + vowel / s+cons → quegli amici, quegli studenti', 'quelle (f plur) → quelle case', 'quelli — the PRONOUN plural → Preferisco quelli.'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">The feminine forms are easy (quella/quelle). All the work is in the masculine: quel, quell\', quello, quei, quegli.</p>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">Pronouns — standing alone</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-italian-lime/5 border border-italian-lime/20">
            <p className="text-xs font-bold text-italian-lime uppercase tracking-wider mb-2">This one / that one</p>
            <div className="space-y-1">
              {['Questo è il mio.', 'Preferisco questo, non quello.', 'Quali prendo? — Queste!', 'Preferisco quelli con la panna.'].map((f) => (
                <p key={f} className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{f}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">="what"</p>
            <div className="space-y-1">
              {['quello che → Quello che dici è vero.', 'ciò che → Ciò che conta è lo stile.'].map((f) => (
                <p key={f} className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{f}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">No noun after the demonstrative? Then it is a pronoun — translate it with "one".</p>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">ciò, colui, colei, coloro — formal & neutral</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-italian-lime/5 border border-italian-lime/20">
            <p className="text-xs font-bold text-italian-lime uppercase tracking-wider mb-2">ciò (neutral — ideas)</p>
            <div className="space-y-1">
              {['ciò che = what / that which', 'Tutto ciò che vediamo è antico.', 'Dimmi ciò che pensi!'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">colui / colei / coloro (literary)</p>
            <div className="space-y-1">
              {['colui che = he who', 'colei che = she who', 'coloro che = those who', 'costui = this fellow (pejorative)'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">stesso, tale, simile</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-italian-lime/5 border border-italian-lime/20">
            <p className="text-xs font-bold text-italian-lime uppercase tracking-wider mb-2">stesso — same / -self</p>
            <div className="space-y-1">
              {['la stessa cosa → the same thing', 'lo stesso film → the same film', 'le stesse idee → the same ideas', 'io stesso → I myself'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">tale / simile</p>
            <div className="space-y-1">
              {['tale = such / such a → tale cosa!', 'tale e quale = just like', 'simile = similar → una cosa simile'].map((f) => (
                <p key={f} className="text-sm font-medium text-gray-700 dark:text-gray-300">{f}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-lime uppercase tracking-wider mb-3">Golden Rule</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-italian-charcoal dark:text-white">Near</span> → <span className="font-semibold text-italian-charcoal dark:text-white">questo / questa</span>. <span className="font-semibold text-italian-charcoal dark:text-white">Far</span> → <span className="font-semibold text-italian-charcoal dark:text-white">the quello family</span>, checking the first letter of the noun. <span className="font-semibold text-italian-charcoal dark:text-white">No noun after it</span> → pronoun. <span className="font-semibold text-italian-charcoal dark:text-white">"What"</span> → <span className="font-semibold text-italian-charcoal dark:text-white">quello che / ciò che</span>. <span className="font-semibold text-italian-charcoal dark:text-white">Same</span> → <span className="font-semibold text-italian-charcoal dark:text-white">stesso</span>. Never forget: quello changes before the noun (quel, quell\', quello, quei, quegli).
        </p>
      </div>
    </div>
  );
}

function ExerciseView({ exercise, results, onResult }) {
  const isDone = results[exercise.id]?.correct === true;

  const handleComplete = () => {
    onResult(exercise.id, true);
  };

  const handleTestComplete = (percentage, correctCount, total) => {
    onResult(exercise.id, true, { percentage, correctCount, total });
  };

  const commonProps = {
    onComplete: handleComplete,
  };

  let body = null;
  switch (exercise.type) {
    case 'multiple':
    case 'fillblank':
      body = exercise.questions.map((q, idx) => (
        <div key={idx} className="space-y-3">
          {exercise.type === 'fillblank' ? (
            <FillBlankExercise {...q} {...commonProps} />
          ) : (
            <MultipleChoiceExercise {...q} {...commonProps} />
          )}
        </div>
      ));
      break;
    case 'matching':
      body = (
        <MatchingExercise
          pairs={exercise.pairs}
          explanation={exercise.explanation}
          {...commonProps}
        />
      );
      break;
    case 'translation':
      body = exercise.questions.map((q, idx) => (
        <div key={idx} className="space-y-3">
          <TranslationExercise {...q} direction={exercise.direction} {...commonProps} />
        </div>
      ));
      break;
    case 'wordorder':
      body = exercise.questions.map((q, idx) => (
        <div key={idx} className="space-y-3">
          <WordOrderExercise {...q} {...commonProps} />
        </div>
      ));
      break;
    case 'story':
      body = (
        <StoryExercise
          story={exercise.story}
          title={exercise.storyTitle}
          vocab={exercise.vocab}
          translation={exercise.translation}
          questions={exercise.questions}
          onComplete={handleComplete}
        />
      );
      break;
    case 'mastery':
      body = (
        <MasteryTestExercise
          questions={exercise.questions}
          onComplete={handleTestComplete}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-lg bg-italian-lime/10 text-italian-lime text-xs font-bold border border-italian-lime/20">
            Exercise {exercise.id}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 text-xs font-semibold">
            {exercise.level}
          </span>
          {isDone && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-italian-lime/10 text-italian-lime text-xs font-bold">
              <CheckCircle size={12} /> Completed
            </span>
          )}
        </div>
        <div>
          <h3 className="text-base font-semibold text-italian-charcoal dark:text-gray-100">{exercise.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{exercise.instruction}</p>
        </div>
      </div>

      {body}
    </div>
  );
}

function ResultsSummary({ results, onReset }) {
  const completed = Object.entries(results).filter(([, r]) => r.correct).length;
  const total = dimostrativiExercises.length;
  const accuracy = Math.round((completed / total) * 100);

  const bands = dimostrativiFinalBands;
  const band = bands.find((b) => accuracy >= b.min) || bands[bands.length - 1];

  const weakLevels = {};
  dimostrativiExercises.forEach((e) => {
    if (!results[e.id]?.correct) {
      const lvl = e.level.split('—')[0].trim();
      if (e.level && !e.level.includes('Level 10')) weakLevels[lvl] = (weakLevels[lvl] || 0) + 1;
    }
  });

  const reviewMap = {
    'Level 1': 'Review what demonstratives do: this (questo) is near, that (quello) is far — as adjective or pronoun.',
    'Level 2': 'Review the this family: questo, questa, questi, queste — and quest\' before a vowel.',
    'Level 3': 'Review the that transformations: quel + consonant, quell\' + vowel, quello + s+cons/z/gn/ps/x, with plurals quei and quegli.',
    'Level 4': 'Review pronouns standing alone: questo/quello/quelli = this one/that one/those, and quello che = what.',
    'Level 5': 'Review near vs far in space and time: questa sera vs quella sera, questo mese vs quel mese.',
    'Level 6': 'Review the neutral and formal forms: ciò/ciò che and colui/colei/coloro che.',
    'Level 7': 'Review stesso/stessa (same, -self), tale (such) and simile (similar).',
    'Level 8': 'Practice choosing the right demonstrative in complex everyday sentences — including translations.',
    'Level 9': 'Re-read the dialogues — notice every questo/quello and the form it takes (quel, quell\', quello).',
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-italian-lime/30 bg-italian-lime/5 p-6 text-center"
      >
        <Trophy className="w-10 h-10 text-italian-lime mx-auto mb-2" />
        <p className="text-3xl font-heading font-bold text-italian-lime">{accuracy}%</p>
        <p className="text-lg font-semibold text-italian-charcoal dark:text-gray-100 mt-1">
          {accuracy === 100 ? 'Perfect!' : band.grade}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{band.message}</p>
        <p className="text-xs text-gray-400 mt-2">Final proficiency score</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-italian-charcoal dark:text-white">{completed}<span className="text-gray-400 text-base">/{total}</span></p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Exercises completed</p>
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-italian-charcoal dark:text-white">{accuracy}%</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Accuracy</p>
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-italian-charcoal dark:text-white">{Object.keys(weakLevels).length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Weak areas</p>
        </div>
      </div>

      {Object.keys(weakLevels).length > 0 && (
        <div className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-5">
          <h4 className="text-sm font-bold text-italian-charcoal dark:text-gray-100 mb-3">Weak areas & recommended review</h4>
          <div className="space-y-3">
            {Object.entries(weakLevels).map(([lvl, count]) => (
              <div key={lvl} className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded-md bg-italian-lime/10 text-italian-lime text-xs font-bold border border-italian-lime/20 shrink-0 mt-0.5">
                  {lvl}
                </span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reviewMap[lvl] || 'Review this section.'}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{count} exercise{count > 1 ? 's' : ''} not completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-italian-dark-border transition-colors"
      >
        <RotateCcw size={16} /> Restart Lesson
      </button>
    </div>
  );
}

const allExercisesDone = (results) =>
  dimostrativiExercises.every((e) => results[e.id]?.correct);

const STAGE_ORDER = ['concept', 'formation', 'irregulars', 'usage', 'exercises', 'stories', 'final'];
const LEARNING_STAGES = ['concept', 'formation', 'irregulars', 'usage'];
const STORY_EXERCISE_START = dimostrativiExercises.findIndex((e) => e.type === 'story');

export default function DimostrativiLessonPage() {
  const [activeStage, setActiveStage] = useState('concept');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [results, setResults] = useState(() => storage.get(STORAGE_KEY, {}));

  useEffect(() => {
    storage.set(STORAGE_KEY, results);
  }, [results]);

  const handleResult = (id, correct, extra = {}) => {
    setResults((prev) => {
      const existing = prev[id];
      if (existing?.correct && !correct) return prev;
      return { ...prev, [id]: { correct, ...extra } };
    });
  };

  const completedCount = useMemo(
    () => dimostrativiExercises.filter((e) => results[e.id]?.correct).length,
    [results]
  );

  const exerciseStart = useMemo(() => ({
    concept: 0,
    formation: 0,
    irregulars: 0,
    usage: 0,
    exercises: 0,
    stories: STORY_EXERCISE_START,
    final: dimostrativiExercises.length - 1,
  }), []);

  const currentEx = dimostrativiExercises[currentExercise];
  const isFinalStage = activeStage === 'final';
  const showSummary = isFinalStage && allExercisesDone(results);

  const goToExercise = (idx) => {
    const clamped = Math.max(0, Math.min(dimostrativiExercises.length - 1, idx));
    setCurrentExercise(clamped);
    const ex = dimostrativiExercises[clamped];
    if (ex.type === 'story') setActiveStage('stories');
    else if (ex.id === 30) setActiveStage('final');
    else setActiveStage('exercises');
  };

  const handleStageClick = (stage) => {
    setActiveStage(stage);
    if (stage === 'exercises') setCurrentExercise(0);
    if (stage === 'stories') setCurrentExercise(exerciseStart.stories);
    if (stage === 'final') setCurrentExercise(dimostrativiExercises.length - 1);
  };

  const globalProgress = Math.round((completedCount / dimostrativiExercises.length) * 100);

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6">
          <Link to="/grammar" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-italian-lime transition-colors mb-4">
            <ArrowLeft size={16} /> Back to Grammar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-italian-lime/10 flex items-center justify-center">
              <BookOpen size={22} className="text-italian-lime" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
                  Demonstratives — I Dimostrativi
                </h1>
                <span className="px-2 py-0.5 rounded-md text-xs font-bold border bg-italian-lime/15 text-italian-lime border-italian-lime/30">
                  A1–A2
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                questo, quello, ciò, stesso — point near and far
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${globalProgress}%` }}
                transition={{ duration: 0.6 }}
                className="h-full bg-italian-lime rounded-full"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 shrink-0">
              {completedCount}/{dimostrativiExercises.length} exercises
            </span>
          </div>
        </motion.div>

        {/* Stage tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { id: 'concept', icon: BookOpen, label: '1. What are Demonstratives?' },
            { id: 'formation', icon: Layers, label: '2. Questo & Quello' },
            { id: 'irregulars', icon: Grid3x3, label: '3. Pronouns, Ciò & Specials' },
            { id: 'usage', icon: Type, label: '4. Choosing the Right One' },
            { id: 'exercises', icon: ListOrdered, label: '5. Exercises' },
            { id: 'stories', icon: BookOpenText, label: '6. Stories' },
            { id: 'final', icon: Award, label: '7. Final Test' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleStageClick(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0 ${
                activeStage === id
                  ? 'bg-italian-lime text-white shadow-md shadow-italian-lime/20'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-italian-dark-surface dark:text-gray-400 dark:hover:bg-italian-dark-border'
              }`}
            >
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {/* Stage content */}
        <AnimatePresence mode="wait">
          {LEARNING_STAGES.includes(activeStage) && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-heading font-bold text-italian-charcoal dark:text-white mb-1">
                {dimostrativiStages[STAGE_ORDER.indexOf(activeStage)]?.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {dimostrativiStages[STAGE_ORDER.indexOf(activeStage)]?.subtitle}
              </p>
              <div className="space-y-6">
                {dimostrativiStages[STAGE_ORDER.indexOf(activeStage)]?.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-6"
                  >
                    <SectionLearner section={section} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => handleStageClick(STAGE_ORDER[STAGE_ORDER.indexOf(activeStage) + 1])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-italian-lime text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-lime/20 transition-all duration-200"
                >
                  Continue to {dimostrativiStages[STAGE_ORDER.indexOf(activeStage) + 1]?.title} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {(activeStage === 'exercises' || activeStage === 'stories' || activeStage === 'final') && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeStage === 'final' && showSummary ? (
                <ResultsSummary results={results} onReset={() => { storage.remove(STORAGE_KEY); setResults({}); setCurrentExercise(0); setActiveStage('concept'); }} />
              ) : activeStage === 'final' && !showSummary ? (
                <div className="space-y-6">
                  {/* Exercise switcher for final only */}
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {dimostrativiExercises.map((e, i) => {
                      if (e.id !== 30) return null;
                      return (
                        <button
                          key={e.id}
                          onClick={() => goToExercise(i)}
                          className={`w-9 h-9 shrink-0 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center ${
                            i === currentExercise
                              ? 'bg-italian-lime text-white shadow-md shadow-italian-lime/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-lime/10 text-italian-lime border border-italian-lime/20'
                                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'
                          }`}
                        >
                          {results[e.id]?.correct ? <CheckCircle size={14} /> : e.id}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-7">
                    <ExerciseView key={currentEx.id} exercise={currentEx} results={results} onResult={handleResult} />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => goToExercise(currentExercise - 1)}
                      disabled={currentExercise === 0}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-italian-dark-border disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <ArrowLeft size={16} /> Previous
                    </button>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                      Exercise {currentEx.id} / {dimostrativiExercises.length}
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === dimostrativiExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-lime text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-lime/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>

                  <div className="mt-6">
                    <ReviewSection />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Exercise switcher */}
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {dimostrativiExercises.map((e, i) => {
                      const isRelevant =
                        (activeStage === 'stories' && e.type === 'story') ||
                        (activeStage === 'final' && e.id === 30) ||
                        (activeStage === 'exercises' && e.type !== 'story' && e.id !== 30);
                      if (!isRelevant) return null;
                      return (
                        <button
                          key={e.id}
                          onClick={() => goToExercise(i)}
                          className={`w-9 h-9 shrink-0 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center ${
                            i === currentExercise
                              ? 'bg-italian-lime text-white shadow-md shadow-italian-lime/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-lime/10 text-italian-lime border border-italian-lime/20'
                                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'
                          }`}
                        >
                          {results[e.id]?.correct ? <CheckCircle size={14} /> : e.id}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-7">
                    <ExerciseView key={currentEx.id} exercise={currentEx} results={results} onResult={handleResult} />
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => goToExercise(currentExercise - 1)}
                      disabled={currentExercise === 0}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-italian-dark-border disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <ArrowLeft size={16} /> Previous
                    </button>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                      Exercise {currentEx.id} / {dimostrativiExercises.length}
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === dimostrativiExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-lime text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-lime/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}