import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Volume2,
  Sparkles,
} from 'lucide-react';
import lessons from '../../data/lessons';
import progress from '../../services/progress';
import { speak } from '../../services/speech';
import QuizOption from '../../components/Quiz/QuizOption';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

const confettiColors = ['#009246', '#CE2B37', '#D4A843', '#7CB69D', '#FFD700', '#FF6B6B'];

function Confetti() {
  const particles = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 800;
    const h = typeof window !== 'undefined' ? window.innerHeight : 900;
    return Array.from({ length: 40 }, (_, i) => {
      const rand = () => Math.random();
      return {
        key: i,
        initialX: rand() * w,
        rotateEnd: rand() * 720 - 360,
        duration: rand() * 2 + 1.5,
        delay: rand() * 0.8,
        width: rand() * 10 + 6,
        height: rand() * 10 + 6,
        round: rand() > 0.5,
        color: confettiColors[Math.floor(rand() * confettiColors.length)],
        finalY: h + 20,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.key}
          initial={{ x: p.initialX, y: -20, rotate: 0, opacity: 1 }}
          animate={{ y: p.finalY, rotate: p.rotateEnd, opacity: [1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            width: p.width,
            height: p.height,
            borderRadius: p.round ? '50%' : '2px',
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

function AudioButton({ text, size = 'md' }) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (playing) return;
    setPlaying(true);
    speak(text);
    const estimated = Math.max(800, text.length * 120);
    setTimeout(() => setPlaying(false), estimated);
  };

  const sizeClass = size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handlePlay}
      className={`relative flex items-center justify-center rounded-full transition-colors ${
        playing
          ? 'bg-italian-green text-white'
          : 'bg-italian-green/10 text-italian-green hover:bg-italian-green/20'
      } ${sizeClass}`}
    >
      {playing ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex gap-0.5 items-end h-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ height: [4, 14, 4] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              className="w-[3px] rounded-full bg-white"
            />
          ))}
        </motion.div>
      ) : (
        <Volume2 size={size === 'lg' ? 22 : 18} />
      )}
    </motion.button>
  );
}

function LearnStep({ content }) {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="w-16 h-16 rounded-2xl bg-italian-green/10 flex items-center justify-center mx-auto mb-6">
        <Sparkles size={28} className="text-italian-green" />
      </div>
      <h2 className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white mb-2">
        {content.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{content.text}</p>
      <div className="space-y-3">
        {content.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-italian-dark-card border border-gray-100 dark:border-italian-dark-border"
          >
            <AudioButton text={item.italian} size="sm" />
            <div className="flex-1 text-left">
              <p className="font-heading font-semibold text-base text-italian-charcoal dark:text-white">
                {item.italian}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.english}</p>
            </div>
            <p className="text-[10px] text-italian-sage uppercase tracking-wide font-medium hidden sm:block">
              {item.pronunciation}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExampleStep({ content }) {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white mb-2 text-center">
        Example Dialogue
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
        See how these phrases are used in conversation
      </p>
      <div className="space-y-4">
        {content.dialogue.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: line.speaker === 'A' || line.speaker === 'Tourist' || line.speaker === 'Customer' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex gap-3 ${
              line.speaker === 'A' || line.speaker === 'Tourist' || line.speaker === 'Customer'
                ? 'flex-row'
                : 'flex-row-reverse'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-italian-green/10 flex items-center justify-center shrink-0 text-xs font-bold text-italian-green">
              {line.speaker.charAt(0)}
            </div>
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                line.speaker === 'A' || line.speaker === 'Tourist' || line.speaker === 'Customer'
                  ? 'bg-italian-green/5 border border-italian-green/10'
                  : 'bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border'
              }`}
            >
              <p className="font-heading font-semibold text-sm text-italian-charcoal dark:text-white mb-1">
                {line.italian}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{line.english}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MultipleChoiceStep({ content, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct = option === content.answer;
    setTimeout(() => onAnswer(correct), 1200);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white mb-2">
        Choose the correct answer
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-medium">
        {content.question}
      </p>
      <div className="space-y-3">
        {content.options.map((option) => {
          const isCorrect = answered && option === content.answer;
          const isWrong = answered && selected === option && option !== content.answer;
          return (
            <QuizOption
              key={option}
              text={option}
              correct={isCorrect}
              incorrect={isWrong}
              disabled={answered}
              dark={false}
              onClick={() => handleSelect(option)}
            />
          );
        })}
      </div>
      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl ${
            selected === content.answer
              ? 'bg-italian-green/10 text-italian-green'
              : 'bg-italian-red/10 text-italian-red'
          }`}
        >
          <p className="font-medium text-sm">
            {selected === content.answer
              ? 'Correct! Benissimo!'
              : `Incorrect. The answer is: ${content.answer}`}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function TranslationStep({ content, onAnswer }) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);

  const handleCheck = () => {
    if (!input.trim() || answered) return;
    setAnswered(true);
    const userAnswer = input.trim().toLowerCase();
    const correctAnswer = content.answer.toLowerCase().trim();
    const correct = userAnswer === correctAnswer;
    setTimeout(() => onAnswer(correct), 1200);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white mb-2">
        Translate this {content.direction === 'it-to-en' ? 'into English' : 'into Italian'}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2 font-medium">
        "{content.sentence}"
      </p>
      {content.hint && (
        <p className="text-xs text-italian-sage mb-6">Hint: {content.hint}</p>
      )}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={answered}
          placeholder="Type your translation..."
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-italian-dark-border bg-white dark:bg-italian-dark-card text-italian-charcoal dark:text-white text-sm focus:outline-none focus:border-italian-green transition-colors disabled:opacity-60"
        />
        <button
          onClick={handleCheck}
          disabled={!input.trim() || answered}
          className="px-5 py-3 rounded-xl bg-italian-green text-white text-sm font-medium hover:bg-italian-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check
        </button>
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            input.trim().toLowerCase() === content.answer.toLowerCase().trim()
              ? 'bg-italian-green/10 text-italian-green'
              : 'bg-italian-red/10 text-italian-red'
          }`}
        >
          <p className="font-medium text-sm">
            {input.trim().toLowerCase() === content.answer.toLowerCase().trim()
              ? 'Correct! Ottimo lavoro!'
              : `The correct answer is: "${content.answer}"`}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function ListeningStep({ content, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const playAudio = useCallback(() => {
    speak(content.italian);
  }, [content.italian]);

  useEffect(() => {
    const timer = setTimeout(() => playAudio(), 500);
    return () => clearTimeout(timer);
  }, [playAudio]);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct = option === content.answer;
    setTimeout(() => onAnswer(correct), 1200);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-italian-charcoal dark:text-white mb-2">
        Listen and choose
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        What did you hear?
      </p>

      <div className="flex justify-center mb-8">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={playAudio}
          className="w-20 h-20 rounded-full bg-italian-green text-white flex items-center justify-center shadow-lg shadow-italian-green/30 hover:bg-italian-green/90 transition-colors"
        >
          <Volume2 size={32} />
        </motion.button>
      </div>

      <div className="space-y-3">
        {content.options.map((option) => {
          const isCorrect = answered && option === content.answer;
          const isWrong = answered && selected === option && option !== content.answer;
          return (
            <QuizOption
              key={option}
              text={option}
              correct={isCorrect}
              incorrect={isWrong}
              disabled={answered}
              onClick={() => handleSelect(option)}
            />
          );
        })}
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl ${
            selected === content.answer
              ? 'bg-italian-green/10 text-italian-green'
              : 'bg-italian-red/10 text-italian-red'
          }`}
        >
          <p className="font-medium text-sm">
            {selected === content.answer
              ? 'Correct! Benissimo!'
              : `The correct answer is: "${content.answer}"`}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function ReviewStep({ content, correctCount, incorrectCount, totalSteps }) {
  const score = totalSteps > 0 ? Math.round((correctCount / totalSteps) * 100) : 0;
  const xpEarned = Math.round(score * 0.1) + 25;

  return (
    <div className="max-w-lg mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-full bg-italian-green/10 flex items-center justify-center mx-auto mb-4"
      >
        <Sparkles size={36} className="text-italian-green" />
      </motion.div>
      <h2 className="font-heading text-2xl font-bold text-italian-charcoal dark:text-white mb-1">
        Lesson Complete!
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {content.title}
      </p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-4 rounded-xl bg-white dark:bg-italian-dark-card border border-gray-100 dark:border-italian-dark-border">
          <p className="text-2xl font-heading font-bold text-italian-green">{correctCount}</p>
          <p className="text-xs text-gray-400 mt-0.5">Correct</p>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-italian-dark-card border border-gray-100 dark:border-italian-dark-border">
          <p className="text-2xl font-heading font-bold text-italian-red">{incorrectCount}</p>
          <p className="text-xs text-gray-400 mt-0.5">Incorrect</p>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-italian-dark-card border border-gray-100 dark:border-italian-dark-border">
          <p className="text-2xl font-heading font-bold text-italian-gold">{score}%</p>
          <p className="text-xs text-gray-400 mt-0.5">Score</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-italian-gold/10 border border-italian-gold/20 mb-6">
        <p className="text-sm font-medium text-italian-gold">+{xpEarned} XP Earned!</p>
      </div>

      {content.items && content.items.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Words in this lesson
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {content.items.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-italian-green/10 text-italian-green text-xs font-medium"
              >
                {item.italian} — {item.english}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(() => lessons.find((l) => l.id === id), [id]);

  const quizSteps = useMemo(() => {
    if (!lesson) return [];
    return lesson.steps.filter(
      (s) => s.type === 'multiple_choice' || s.type === 'translation' || s.type === 'listening'
    );
  }, [lesson]);

  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIndex]);

  if (!lesson) {
    return (
      <div className="min-h-full flex items-center justify-center pb-24 md:pb-8">
        <div className="text-center">
          <p className="text-gray-400 dark:text-gray-500 mb-4">Lesson not found.</p>
          <Link
            to="/learn"
            className="text-italian-green font-medium text-sm hover:underline"
          >
            Back to Learn
          </Link>
        </div>
      </div>
    );
  }

  const totalSteps = lesson.steps.length;
  const currentStep = lesson.steps[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);
  const isReviewStep = currentStep.type === 'review';

  const handleNext = () => {
    if (stepIndex < totalSteps - 1) {
      setDirection(1);
      setStepIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (stepIndex > 0) {
      setDirection(-1);
      setStepIndex((i) => i - 1);
    }
  };

  const handleQuizAnswer = (correct) => {
    if (correct) {
      setCorrectCount((c) => c + 1);
    } else {
      setIncorrectCount((c) => c + 1);
    }
  };

  const handleComplete = () => {
    const score = quizSteps.length > 0 ? correctCount / quizSteps.length : 1;
    progress.completeLesson(lesson.id, score);
    progress.addXP(Math.round(score * 10) + 25);
    progress.recordActivity(Math.ceil(lesson.duration / totalSteps));
    navigate('/learn');
  };

  const needsInteraction =
    currentStep.type === 'multiple_choice' ||
    currentStep.type === 'translation' ||
    currentStep.type === 'listening';

  return (
    <div className="min-h-full pb-24 md:pb-8">
      {isReviewStep && <Confetti />}

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('/learn')}
            className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-italian-dark-surface flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-gray-100 dark:bg-italian-dark-surface overflow-hidden">
              <motion.div
                initial={false}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full rounded-full bg-italian-green"
              />
            </div>
          </div>
          <span className="text-xs font-medium text-gray-400 tabular-nums shrink-0">
            {stepIndex + 1}/{totalSteps}
          </span>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          {lesson.steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === stepIndex
                  ? 'bg-italian-green w-5'
                  : i < stepIndex
                    ? 'bg-italian-green/40'
                    : 'bg-gray-200 dark:bg-italian-dark-surface'
              }`}
            />
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={stepIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {currentStep.type === 'learn' && <LearnStep content={currentStep.content} />}

              {currentStep.type === 'example' && <ExampleStep content={currentStep.content} />}

              {currentStep.type === 'multiple_choice' && (
                <MultipleChoiceStep
                  content={currentStep.content}
                  onAnswer={handleQuizAnswer}
                />
              )}

              {currentStep.type === 'translation' && (
                <TranslationStep
                  content={currentStep.content}
                  onAnswer={handleQuizAnswer}
                />
              )}

              {currentStep.type === 'listening' && (
                <ListeningStep
                  content={currentStep.content}
                  onAnswer={handleQuizAnswer}
                />
              )}

              {currentStep.type === 'review' && (
                <ReviewStep
                  content={currentStep.content}
                  correctCount={correctCount}
                  incorrectCount={incorrectCount}
                  totalSteps={quizSteps.length}
                />
              )}

              {/* Handle unrecognized step types gracefully */}
              {![
                'learn',
                'example',
                'multiple_choice',
                'translation',
                'listening',
                'review',
              ].includes(currentStep.type) && (
                <div className="text-center py-12">
                  <p className="text-gray-400 dark:text-gray-500 mb-4">
                    This step type ({currentStep.type}) is not yet supported.
                  </p>
                  <p className="text-sm text-gray-300 dark:text-gray-600">Skipping...</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={stepIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-surface transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {isReviewStep ? (
            <button
              onClick={handleComplete}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white text-sm font-medium shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors"
            >
              Complete Lesson
              <Check size={16} />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={needsInteraction && incorrectCount + correctCount < stepIndex}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white text-sm font-medium shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
