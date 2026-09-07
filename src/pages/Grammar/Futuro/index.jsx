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
import { futuroStages, futuroExercises, futuroFinalBands } from './futuroData';
import {
  MultipleChoiceExercise,
  FillBlankExercise,
  MatchingExercise,
  WordOrderExercise,
  StoryExercise,
  MasteryTestExercise,
  TranslationExercise,
} from '../shared/ExerciseComponents';

const STORAGE_KEY = 'futuroResults';

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
          <span className="text-sm font-semibold text-italian-green whitespace-nowrap">
            {ex.italian}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">{ex.translation}</span>
        </div>
      ))}
    </div>
  );

  const renderVerbs = (section) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {section.verbs.map((v, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border"
        >
          <span className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">
            {v.infinitive}
            <span className="ml-2 text-xs font-bold text-italian-green">
              {section.group.startsWith('-') ? section.group : `-${section.group}`}
            </span>
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{v.meaning}</span>
        </div>
      ))}
    </div>
  );

  const renderConjugations = (conv) => (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-italian-dark-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-italian-dark-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Person</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Form</th>
          </tr>
        </thead>
        <tbody>
          {conv.rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-100 dark:border-italian-dark-border">
              <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-medium">{row.pronoun}</td>
              <td className="px-4 py-2.5 font-semibold text-italian-green">{row.ending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderComparison = (comparison) => (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-italian-dark-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-italian-dark-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase">{comparison[0]?.form ? 'Ending / Form' : ''}</th>
            <th className="text-left px-4 py-2.5 font-semibold text-italian-gold text-xs uppercase">Example</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, i) => (
            <tr key={i} className="border-t border-gray-100 dark:border-italian-dark-border">
              <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-medium">{row.form}</td>
              <td className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300">{row.ere || row.are || row.ire}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderTimeline = (tl) => (
    <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
      <div className="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 mb-3">
        <span>{tl.left}</span>
        <span className="text-italian-green">{tl.center}</span>
        <span>{tl.right}</span>
      </div>
      <div className="relative h-1 bg-gray-200 dark:bg-italian-dark-border rounded-full mb-4">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400" />
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-italian-green ring-2 ring-italian-green/30" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300" />
      </div>
      {tl.examples && (
        <div className="flex flex-wrap gap-2 justify-center">
          {tl.examples.map((ex, i) => (
            <span
              key={i}
              className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                i === 0
                  ? 'bg-gray-100 dark:bg-italian-dark-border text-gray-500 dark:text-gray-400 border-gray-200 dark:border-italian-dark-border'
                  : i === 1
                    ? 'bg-italian-green/10 text-italian-green border-italian-green/20'
                    : 'bg-italian-gold/10 text-italian-gold border-italian-gold/20'
              }`}
            >
              {ex}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const renderBreakdown = (focus) => (
    <div className="space-y-3">
      <div className="text-center py-4 px-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
        <p className="text-lg font-semibold text-italian-charcoal dark:text-white">{focus.sentence}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {focus.breakdown.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border text-center"
          >
            <p className="text-base font-bold text-italian-green">{b.part}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-semibold">{b.role}</p>
          </motion.div>
        ))}
      </div>
      {focus.meaning && (
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 italic">{focus.meaning}</p>
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
      {section.verbs && renderVerbs(section)}
      {section.conjugations && renderConjugations(section.conjugations)}
      {section.patterns && (
        <div className="flex flex-wrap gap-2">
          {section.patterns.map((p, i) => (
            <span
              key={i}
              className="inline-flex px-3 py-1.5 rounded-lg bg-italian-green/10 text-italian-green text-sm font-bold border border-italian-green/20"
            >
              {p}
            </span>
          ))}
        </div>
      )}
      {section.comparison && renderComparison(section.comparison)}
      {section.focus && renderBreakdown(section.focus)}

      {section.note && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-italian-gold/10 border border-italian-gold/25">
          <MessageSquare size={16} className="text-italian-gold mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{section.note}</p>
        </div>
      )}
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-base font-heading font-bold text-italian-charcoal dark:text-white">Final Review — Futuro Semplice Reference</h3>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">The Key Idea</h4>
        <p className="text-lg font-semibold text-italian-charcoal dark:text-white">
          Futuro semplice = <span className="text-italian-gold">an action, event, prediction, or plan that will happen</span> in the future.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">Main Uses</h4>
        <div className="space-y-2">
          {[
            { use: 'Future action', example: 'Domani lavorerò.' },
            { use: 'Plan', example: 'La prossima settimana andrò a Roma.' },
            { use: 'Prediction', example: 'Domani pioverà.' },
            { use: 'Intention', example: 'Studierò di più.' },
            { use: 'Promise', example: 'Ti aiuterò.' },
            { use: 'Probability / guess', example: 'Sarà a casa.' },
          ].map(({ use, example }) => (
            <div key={use} className="flex flex-wrap gap-2 items-baseline p-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
              <span className="text-xs font-bold text-italian-gold uppercase tracking-wider">{use}</span>
              <span className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{example}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">Formula</h4>
        <div className="flex flex-wrap gap-2">
          {['Future stem + future ending', '-ARE → -ER-: parlerò', '-ERE → -ER-: vedrò', '-IRE → -IR-: partirò', 'io -ò · tu -ai · lui -à · noi -emo · voi -ete · loro -anno'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-italian-gold/10 text-italian-gold text-xs font-bold border border-italian-gold/20">{p}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">Essential Irregular Stems</h4>
        <div className="flex flex-wrap gap-2">
          {['andare → andr-', 'avere → avr-', 'essere → sar-', 'fare → far-', 'venire → verr-', 'volere → vorr-', 'potere → potr-', 'dovere → dovr-', 'sapere → sapr-', 'vedere → vedr-', 'vivere → vivr-', 'rimanere → rimarr-'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border text-xs font-bold text-italian-charcoal dark:text-gray-100">{p}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
          <h4 className="text-sm font-bold text-italian-green uppercase tracking-wider mb-3">Essere</h4>
          <div className="space-y-1.5">
            {['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'].map((f) => (
              <p key={f} className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{f}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
          <h4 className="text-sm font-bold text-italian-green uppercase tracking-wider mb-3">Avere</h4>
          <div className="space-y-1.5">
            {['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'].map((f) => (
              <p key={f} className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{f}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
          <h4 className="text-sm font-bold text-italian-green uppercase tracking-wider mb-3">Negatives & Questions</h4>
          <div className="space-y-1.5">
            {['Non andrò.', 'Non lavoreremo.', 'Andrai a Roma?', 'Quando partirai?'].map((f) => (
              <p key={f} className="text-sm font-semibold text-italian-charcoal dark:text-gray-100">{f}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">Useful Future Time Expressions</h4>
        <div className="flex flex-wrap gap-2">
          {['domani', 'stasera', 'più tardi', 'tra un\'ora', 'tra due giorni', 'tra una settimana', 'la prossima settimana', 'il prossimo mese', 'l\'anno prossimo', 'quest\'estate', 'in futuro'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-italian-gold/10 text-italian-gold text-xs font-bold border border-italian-gold/20">{p}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">Present vs Futuro Semplice</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-italian-gold/5 border border-italian-gold/20">
            <p className="text-xs font-bold text-italian-gold uppercase tracking-wider mb-2">Present for a definite plan</p>
            <div className="space-y-1">
              {['Domani vado a Roma.', 'Stasera mangio fuori.', 'Sabato lavoro.'].map((u) => (
                <p key={u} className="text-sm font-medium text-gray-700 dark:text-gray-300">{u}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Futuro semplice (explicit)</p>
            <div className="space-y-1">
              {['Domani andrò a Roma.', 'Stasera mangerò fuori.', 'Sabato lavorerò.'].map((u) => (
                <p key={u} className="text-sm font-medium text-gray-700 dark:text-gray-300">{u}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-gold uppercase tracking-wider mb-3">The Tense Contrast</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Past (passato prossimo)</p>
            <div className="space-y-1">
              {['Ieri ho lavorato.'].map((u) => (
                <p key={u} className="text-sm font-medium text-gray-700 dark:text-gray-300">{u}</p>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-italian-gold/5 border border-italian-gold/20">
            <p className="text-xs font-bold text-italian-gold uppercase tracking-wider mb-2">Future (futuro semplice)</p>
            <div className="space-y-1">
              {['Domani lavorerò.'].map((u) => (
                <p key={u} className="text-sm font-medium text-gray-700 dark:text-gray-300">{u}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">Italian also has another future tense, the futuro anteriore, which you will learn in a later lesson.</p>
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
          <span className="px-2.5 py-1 rounded-lg bg-italian-green/10 text-italian-green text-xs font-bold border border-italian-green/20">
            Exercise {exercise.id}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 text-xs font-semibold">
            {exercise.level}
          </span>
          {isDone && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-italian-green/10 text-italian-green text-xs font-bold">
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
  const total = futuroExercises.length;
  const accuracy = Math.round((completed / total) * 100);

  const bands = futuroFinalBands;
  const band = bands.find((b) => accuracy >= b.min) || bands[bands.length - 1];

  const weakLevels = {};
  futuroExercises.forEach((e) => {
    if (!results[e.id]?.correct) {
      const lvl = e.level.split('—')[0].trim();
      if (e.level && !e.level.includes('Level 8')) weakLevels[lvl] = (weakLevels[lvl] || 0) + 1;
    }
  });

  const reviewMap = {
    'Level 1': 'Review what the futuro semplice is and how time expressions like domani and l\'anno prossimo signal it.',
    'Level 2': 'Review the future endings: -ò, -ai, -à, -emo, -ete, -anno, and the -ARE → -ER- change.',
    'Level 3': 'Review essere (sar-), avere (avr-), and the common irregular stems like andr-, far-, verr-, potr-.',
    'Level 4': 'Review negatives, questions, the present-for-future plan, predictions, and the probability use.',
    'Level 5': 'Practice building sentences from words, changing subjects, and making sentences negative.',
    'Level 6': 'Re-read the dialogues — pay attention to plans, questions, and negative future verbs.',
    'Level 7': 'Re-read the stories and try producing your own future sentences about plans and predictions.',
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-italian-green/30 bg-italian-green/5 p-6 text-center"
      >
        <Trophy className="w-10 h-10 text-italian-green mx-auto mb-2" />
        <p className="text-3xl font-heading font-bold text-italian-green">{accuracy}%</p>
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
                <span className="px-2 py-0.5 rounded-md bg-italian-gold/10 text-italian-gold text-xs font-bold border border-italian-gold/20 shrink-0 mt-0.5">
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
  futuroExercises.every((e) => results[e.id]?.correct);

const STAGE_ORDER = ['concept', 'formation', 'irregulars', 'usage', 'exercises', 'stories', 'final'];
const LEARNING_STAGES = ['concept', 'formation', 'irregulars', 'usage'];
const STORY_EXERCISE_START = futuroExercises.findIndex((e) => e.type === 'story');

export default function FuturoLessonPage() {
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
    () => futuroExercises.filter((e) => results[e.id]?.correct).length,
    [results]
  );

  const exerciseStart = useMemo(() => ({
    concept: 0,
    formation: 0,
    irregulars: 0,
    usage: 0,
    exercises: 0,
    stories: STORY_EXERCISE_START,
    final: futuroExercises.length - 1,
  }), []);

  const currentEx = futuroExercises[currentExercise];
  const isFinalStage = activeStage === 'final';
  const showSummary = isFinalStage && allExercisesDone(results);

  const goToExercise = (idx) => {
    const clamped = Math.max(0, Math.min(futuroExercises.length - 1, idx));
    setCurrentExercise(clamped);
    const ex = futuroExercises[clamped];
    if (ex.type === 'story') setActiveStage('stories');
    else if (ex.id === 30) setActiveStage('final');
    else setActiveStage('exercises');
  };

  const handleStageClick = (stage) => {
    setActiveStage(stage);
    if (stage === 'exercises') setCurrentExercise(0);
    if (stage === 'stories') setCurrentExercise(exerciseStart.stories);
    if (stage === 'final') setCurrentExercise(futuroExercises.length - 1);
  };

  const globalProgress = Math.round((completedCount / futuroExercises.length) * 100);

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6">
          <Link to="/grammar" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-italian-green transition-colors mb-4">
            <ArrowLeft size={16} /> Back to Grammar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-italian-gold/10 flex items-center justify-center">
              <BookOpen size={22} className="text-italian-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
                  Future Tense
                </h1>
                <span className="px-2 py-0.5 rounded-md text-xs font-bold border bg-italian-gold/15 text-italian-gold border-italian-gold/30">
                  A1–A2
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Futuro semplice — plans, predictions, and irregular stems
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${globalProgress}%` }}
                transition={{ duration: 0.6 }}
                className="h-full bg-italian-gold rounded-full"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 shrink-0">
              {completedCount}/{futuroExercises.length} exercises
            </span>
          </div>
        </motion.div>

        {/* Stage tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { id: 'concept', icon: BookOpen, label: '1. What is the Futuro?' },
            { id: 'formation', icon: Layers, label: '2. Forming the Futuro' },
            { id: 'irregulars', icon: Grid3x3, label: '3. Essere, Avere & Irregulars' },
            { id: 'usage', icon: Type, label: '4. Time, Plans & Questions' },
            { id: 'exercises', icon: ListOrdered, label: '5. Exercises' },
            { id: 'stories', icon: BookOpenText, label: '6. Stories' },
            { id: 'final', icon: Award, label: '7. Final Test' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleStageClick(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0 ${
                activeStage === id
                  ? 'bg-italian-gold text-white shadow-md shadow-italian-gold/20'
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
                {futuroStages[STAGE_ORDER.indexOf(activeStage)]?.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {futuroStages[STAGE_ORDER.indexOf(activeStage)]?.subtitle}
              </p>
              <div className="space-y-6">
                {futuroStages[STAGE_ORDER.indexOf(activeStage)]?.sections.map((section, idx) => (
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-italian-gold text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-gold/20 transition-all duration-200"
                >
                  Continue to {futuroStages[STAGE_ORDER.indexOf(activeStage) + 1]?.title} <ArrowRight size={16} />
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
                    {futuroExercises.map((e, i) => {
                      if (e.id !== 30) return null;
                      return (
                        <button
                          key={e.id}
                          onClick={() => goToExercise(i)}
                          className={`w-9 h-9 shrink-0 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center ${
                            i === currentExercise
                              ? 'bg-italian-gold text-white shadow-md shadow-italian-gold/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-gold/10 text-italian-gold border border-italian-gold/20'
                                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'
                          }`}
                        >
                          {results[e.id]?.correct ? <CheckCircle size={14} /> : e.id}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-7">
                    <ExerciseView exercise={currentEx} results={results} onResult={handleResult} />
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
                      Exercise {currentEx.id} / 30
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === futuroExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-gold text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-gold/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
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
                    {futuroExercises.map((e, i) => {
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
                              ? 'bg-italian-gold text-white shadow-md shadow-italian-gold/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-gold/10 text-italian-gold border border-italian-gold/20'
                                : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'
                          }`}
                        >
                          {results[e.id]?.correct ? <CheckCircle size={14} /> : e.id}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5 md:p-7">
                    <ExerciseView exercise={currentEx} results={results} onResult={handleResult} />
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
                      Exercise {currentEx.id} / 30
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === futuroExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-gold text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-gold/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
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
