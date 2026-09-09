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
import { irregolariStages, irregolariExercises, irregolariFinalBands, irregolariReview } from './irregolariData';
import {
  MultipleChoiceExercise,
  FillBlankExercise,
  MatchingExercise,
  WordOrderExercise,
  StoryExercise,
  MasteryTestExercise,
  TranslationExercise,
  TextInputExercise,
} from '../shared/ExerciseComponents';

const STORAGE_KEY = 'irregolariResults';

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
            {ex.it}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">{ex.en}</span>
        </div>
      ))}
    </div>
  );

  const renderTable = (rows) => (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-italian-dark-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-italian-dark-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Form / Pattern</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Example</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-100 dark:border-italian-dark-border">
              <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-medium">{row.form}</td>
              <td className="px-4 py-2.5 font-semibold text-italian-orange">{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderGroups = (groups) => (
    <div className="space-y-3">
      {groups.map((g, i) => (
        <div key={i} className="rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border p-4">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{g.label}</p>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item, j) => (
              <span
                key={j}
                className="inline-flex px-3 py-1.5 rounded-lg bg-italian-orange/10 text-italian-orange text-sm font-bold border border-italian-orange/20"
              >
                {item}
              </span>
            ))}
          </div>
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
              <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-medium">{row.p}</td>
              <td className="px-4 py-2.5 font-semibold text-italian-orange">{row.f}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderConjugation = (conj) => (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-italian-dark-border">
      <div className="px-4 py-3 bg-gray-50 dark:bg-italian-dark-surface border-b border-gray-100 dark:border-italian-dark-border flex items-center justify-between gap-2">
        <p className="text-base font-bold text-italian-charcoal dark:text-white">{conj.verb}</p>
        <span className="px-2 py-0.5 rounded-md text-xs font-bold border bg-italian-orange/15 text-italian-orange border-italian-orange/30">{conj.meaning}</span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-italian-dark-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Person</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Form</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Example</th>
          </tr>
        </thead>
        <tbody>
          {conj.rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-100 dark:border-italian-dark-border">
              <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-medium">{row.p}</td>
              <td className="px-4 py-2.5 font-bold text-italian-orange">{row.f}</td>
              <td className="px-4 py-2.5 text-sm font-medium text-italian-charcoal dark:text-gray-100">{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {conj.examples && (
        <div className="px-4 py-3 border-t border-gray-100 dark:border-italian-dark-border bg-gray-50/50 dark:bg-italian-dark-surface/50 space-y-1">
          {conj.examples.map((ex, i) => (
            <p key={i} className="text-xs text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-italian-charcoal dark:text-gray-100">{ex.it}</span> — {ex.en}
            </p>
          ))}
        </div>
      )}
      {conj.patterns && (
        <div className="px-4 py-3 border-t border-gray-100 dark:border-italian-dark-border">
          <div className="flex flex-wrap gap-1.5">
            {conj.patterns.map((p, i) => (
              <span
                key={i}
                className="inline-flex px-2 py-1 rounded-lg bg-italian-orange/10 text-italian-orange text-[11px] font-bold border border-italian-orange/20"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderComparison = (comparison) => (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-italian-dark-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-italian-dark-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase">{comparison[0]?.form ? 'Ending / Form' : ''}</th>
            <th className="text-left px-4 py-2.5 font-semibold text-italian-orange text-xs uppercase">Example</th>
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
                    : 'bg-italian-orange/10 text-italian-orange border-italian-orange/20'
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
      {section.table && renderTable(section.table)}
      {section.groups && renderGroups(section.groups)}
      {section.verbs && renderVerbs(section)}
      {section.conjugation && renderConjugation(section.conjugation)}
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
        <div className="flex items-start gap-3 p-4 rounded-xl bg-italian-orange/10 border border-italian-orange/25">
          <MessageSquare size={16} className="text-italian-orange mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{section.note}</p>
        </div>
      )}
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-base font-heading font-bold text-italian-charcoal dark:text-white">Final Review — Irregular Verbs Reference</h3>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-orange uppercase tracking-wider mb-3">The Key Idea</h4>
        <p className="text-lg font-semibold text-italian-charcoal dark:text-white">
          Irregular verbs <span className="text-italian-orange">break the usual patterns</span> — but the most useful verbs in Italian (essere, avere, andare, fare...) are the ones you use every day.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['essere — to be', 'avere — to have', 'andare — to go', 'fare — to do/make', 'stare — to stay/feel', 'dare — to give', 'dire — to say/tell', 'venire — to come', 'uscire — to go out', 'salire — to go up', 'sapere — to know', 'potere — can', 'volere — to want', 'dovere — must', 'bere — to drink'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-italian-orange/10 text-italian-orange text-xs font-bold border border-italian-orange/20">{p}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {irregolariReview.map((v) => (
          <div key={v.verb} className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="text-sm font-bold text-italian-orange uppercase tracking-wider">{v.verb}</h4>
              <span className="text-xs font-medium text-gray-400">{v.meaning}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {v.forms.map((f) => (
                <span key={f} className="inline-flex px-2 py-1 rounded-lg bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border text-xs font-bold text-italian-charcoal dark:text-gray-100">{f}</span>
              ))}
            </div>
            <p className="text-sm font-medium text-italian-charcoal dark:text-gray-100">{v.example}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{v.translation}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-orange uppercase tracking-wider mb-3">Confusions to Remember</h4>
        <div className="space-y-3">
          {[
            { forms: ['è — is (essere)', 'e — and'], ex: 'Marco è italiano e abita a Roma.' },
            { forms: ['dà — gives (dare)', 'da — from'], ex: 'Lui dà un libro a Maria · Vengo da Roma.' },
            { forms: ['ho — I have (avere)', 'o — or'], ex: 'Ho una macchina · Caffè o tè?' },
            { forms: ['ha — he/she has (avere)', 'a — to (preposition)'], ex: 'Lei ha un cane · Vado a Roma.' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2 flex-wrap rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border px-3 py-2">
              <div className="flex flex-wrap gap-1.5">
                {row.forms.map((f) => (
                  <span key={f} className="inline-flex px-2.5 py-1 rounded-lg bg-italian-orange/10 text-italian-orange text-xs font-bold border border-italian-orange/20">{f}</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{row.ex}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card p-5">
        <h4 className="text-sm font-bold text-italian-orange uppercase tracking-wider mb-3">Key Patterns</h4>
        <div className="flex flex-wrap gap-2">
          {['modal + infinitive: posso venire', 'modal + infinitive: devo lavorare', 'modal + infinitive: voglio mangiare', 'negative: non + verb', 'question: verb first — Hai tempo?', 'fare colazione', 'ho fame / sete / sonno / paura'].map((p) => (
            <span key={p} className="inline-flex px-3 py-1.5 rounded-lg bg-italian-orange/10 text-italian-orange text-xs font-bold border border-italian-orange/20">{p}</span>
          ))}
        </div>
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
    case 'text':
      body = exercise.questions.map((q, idx) => (
        <div key={idx} className="space-y-3">
          <TextInputExercise {...q} {...commonProps} />
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
  const total = irregolariExercises.length;
  const accuracy = Math.round((completed / total) * 100);

  const bands = irregolariFinalBands;
  const band = bands.find((b) => accuracy >= b.min) || bands[bands.length - 1];

  const weakLevels = {};
  irregolariExercises.forEach((e) => {
    if (!results[e.id]?.correct) {
      const lvl = e.level.split('—')[0].trim();
      if (e.level && !e.level.includes('Level 9')) weakLevels[lvl] = (weakLevels[lvl] || 0) + 1;
    }
  });

  const reviewMap = {
    'Level 1': 'Review what makes a verb irregular and learn the infinitive meanings of the core verbs (essere, avere, andare, fare, venire, sapere, potere, volere, dovere).',
    'Level 2': 'Review the present forms of essere, avere, andare, fare, stare, dare, venire, dire, and uscire — especially vado, faccio, sto, do, vengo, dico, esco.',
    'Level 3': 'Review the modal verbs potere, volere, and dovere (posso, puoi, può...) and the modal + infinitive structure.',
    'Level 4': 'Review choosing the correct form for the subject, correcting wrong forms, and translating the modals (devo, voglio, posso).',
    'Level 5': 'Review building sentences — word order, making sentences negative with non, and forming questions.',
    'Level 6': 'Review translating full sentences in both directions, watching the modal verbs and irregular forms.',
    'Level 7': 'Re-read the dialogue "Cosa facciamo oggi?" and notice venire, uscire, andare, and the modal verbs in real conversation.',
    'Level 8': 'Re-read the story "La mia giornata" and note how the irregular verbs flow through a full narrative.',
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
                <span className="px-2 py-0.5 rounded-md bg-italian-orange/10 text-italian-orange text-xs font-bold border border-italian-orange/20 shrink-0 mt-0.5">
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
  irregolariExercises.every((e) => results[e.id]?.correct);

const STAGE_ORDER = ['concept', 'basic', 'connect', 'know', 'exercises', 'stories', 'final'];
const LEARNING_STAGES = ['concept', 'basic', 'connect', 'know'];
const STORY_EXERCISE_START = irregolariExercises.findIndex((e) => e.type === 'story');

export default function VerbiIrregolariLessonPage() {
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
    () => irregolariExercises.filter((e) => results[e.id]?.correct).length,
    [results]
  );

  const exerciseStart = useMemo(() => ({
    concept: 0,
    basic: 0,
    connect: 0,
    know: 0,
    exercises: 0,
    stories: STORY_EXERCISE_START,
    final: irregolariExercises.length - 1,
  }), []);

  const currentEx = irregolariExercises[currentExercise];
  const isFinalStage = activeStage === 'final';
  const showSummary = isFinalStage && allExercisesDone(results);

  const goToExercise = (idx) => {
    const clamped = Math.max(0, Math.min(irregolariExercises.length - 1, idx));
    setCurrentExercise(clamped);
    const ex = irregolariExercises[clamped];
    if (ex.type === 'story') setActiveStage('stories');
    else if (ex.id === 30) setActiveStage('final');
    else setActiveStage('exercises');
  };

  const handleStageClick = (stage) => {
    setActiveStage(stage);
    if (stage === 'exercises') setCurrentExercise(0);
    if (stage === 'stories') setCurrentExercise(exerciseStart.stories);
    if (stage === 'final') setCurrentExercise(irregolariExercises.length - 1);
  };

  const globalProgress = Math.round((completedCount / irregolariExercises.length) * 100);

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6">
          <Link to="/grammar" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-italian-green transition-colors mb-4">
            <ArrowLeft size={16} /> Back to Grammar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-italian-orange/10 flex items-center justify-center">
              <BookOpen size={22} className="text-italian-orange" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-italian-charcoal dark:text-white">
                  Present Tense — Irregular Verbs
                </h1>
                <span className="px-2 py-0.5 rounded-md text-xs font-bold border bg-italian-orange/15 text-italian-orange border-italian-orange/30">
                  A1–A2
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Verbi irregolari al presente — essere, avere, andare, fare e i verbi modali
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 dark:bg-italian-dark-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${globalProgress}%` }}
                transition={{ duration: 0.6 }}
                className="h-full bg-italian-orange rounded-full"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 shrink-0">
              {completedCount}/{irregolariExercises.length} exercises
            </span>
          </div>
        </motion.div>

        {/* Stage tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { id: 'concept', icon: BookOpen, label: '1. What are Irregular Verbs?' },
            { id: 'basic', icon: Layers, label: '2. Andare, Fare, Stare & Dare' },
            { id: 'connect', icon: Grid3x3, label: '3. Dire, Venire, Uscire & Salire' },
            { id: 'know', icon: Type, label: '4. Sapere & Modal Verbs' },
            { id: 'exercises', icon: ListOrdered, label: '5. Exercises' },
            { id: 'stories', icon: BookOpenText, label: '6. Stories' },
            { id: 'final', icon: Award, label: '7. Final Test' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleStageClick(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0 ${
                activeStage === id
                  ? 'bg-italian-orange text-white shadow-md shadow-italian-orange/20'
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
                {irregolariStages[STAGE_ORDER.indexOf(activeStage)]?.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {irregolariStages[STAGE_ORDER.indexOf(activeStage)]?.subtitle}
              </p>
              <div className="space-y-6">
                {irregolariStages[STAGE_ORDER.indexOf(activeStage)]?.sections.map((section, idx) => (
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-italian-orange text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-orange/20 transition-all duration-200"
                >
                  Continue to {irregolariStages[STAGE_ORDER.indexOf(activeStage) + 1]?.title} <ArrowRight size={16} />
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
                    {irregolariExercises.map((e, i) => {
                      if (e.id !== 30) return null;
                      return (
                        <button
                          key={e.id}
                          onClick={() => goToExercise(i)}
                          className={`w-9 h-9 shrink-0 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center ${
                            i === currentExercise
                              ? 'bg-italian-orange text-white shadow-md shadow-italian-orange/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-orange/10 text-italian-orange border border-italian-orange/20'
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
                      Exercise {currentEx.id} / {irregolariExercises.length}
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === irregolariExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-orange text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-orange/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
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
                    {irregolariExercises.map((e, i) => {
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
                              ? 'bg-italian-orange text-white shadow-md shadow-italian-orange/20'
                              : results[e.id]?.correct
                                ? 'bg-italian-orange/10 text-italian-orange border border-italian-orange/20'
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
                      Exercise {currentEx.id} / {irregolariExercises.length}
                    </span>
                    <button
                      onClick={() => goToExercise(currentExercise + 1)}
                      disabled={currentExercise === irregolariExercises.length - 1}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-italian-orange text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-orange/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
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
