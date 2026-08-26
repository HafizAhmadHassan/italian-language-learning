import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft, ArrowRight, Volume2, CheckCircle, XCircle, RotateCcw, Home, Zap } from 'lucide-react';
import practiceData from '../../data/practice';
import vocabularyData from '../../data/vocabulary';
import progress from '../../services/progress';
import storage from '../../services/storage';
import { speak } from '../../services/speech';

const SESSION_SIZE = 10;

export default function Practice() {
  const [sessionType, setSessionType] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [sentenceOrder, setSentenceOrder] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const nativeLang = storage.get('onboarding')?.nativeLanguage || 'en';

  const startSession = (type) => {
    let pool;
    if (type === 'mixed') {
      pool = [...practiceData].sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE);
    } else {
      pool = practiceData.filter(q => q.type === type);
      pool = pool.sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE);
    }
    if (pool.length === 0) {
      pool = practiceData.sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE);
    }
    setQuestions(pool);
    setSessionType(type);
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTextInput('');
    setSentenceOrder([]);
    setSessionComplete(false);
    setXpEarned(0);
  };

  const currentQuestion = questions[currentIdx];

  useEffect(() => {
    if (currentQuestion?.type === 'sentence_order' && currentQuestion.answer) {
      const words = currentQuestion.answer.split(' ').sort(() => Math.random() - 0.5);
      setSentenceOrder(words);
    }
  }, [currentIdx, currentQuestion]);

  const handleAnswer = useCallback((answer) => {
    if (answered) return;
    setAnswered(true);
    setSelectedAnswer(answer);

    const q = questions[currentIdx];
    let correct = false;

    if (q.type === 'translation' || q.type === 'fill_blank') {
      correct = answer.toLowerCase().trim() === q.answer.toLowerCase().trim();
    } else if (q.type === 'sentence_order') {
      const userSentence = answer.join(' ');
      correct = userSentence.toLowerCase() === q.answer.toLowerCase();
    } else {
      correct = answer === q.answer;
    }

    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
      setXpEarned(x => x + 5);
      progress.addXP(5);
    } else {
      setStreak(0);
    }
  }, [answered, questions, currentIdx]);

  const nextQuestion = () => {
    if (currentIdx + 1 >= questions.length) {
      setSessionComplete(true);
      progress.recordActivity();
    } else {
      setCurrentIdx(i => i + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTextInput('');
    }
  };

  const handleListen = (text) => {
    speak(text);
  };

  if (!sessionType) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-italian-charcoal dark:text-white mb-2 font-heading">Practice</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Test your Italian skills</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { type: 'mixed', title: 'Mixed Practice', desc: 'All exercise types', icon: Trophy, color: 'bg-italian-green' },
            { type: 'vocabulary', title: 'Vocabulary Quiz', desc: 'What does this word mean?', icon: CheckCircle, color: 'bg-italian-gold' },
            { type: 'translation', title: 'Translation', desc: 'Translate to Italian', icon: ArrowRight, color: 'bg-italian-sage' },
            { type: 'multiple_choice', title: 'Multiple Choice', desc: 'Pick the correct answer', icon: CheckCircle, color: 'bg-blue-500' },
            { type: 'fill_blank', title: 'Fill in the Blank', desc: 'Complete the sentence', icon: ArrowRight, color: 'bg-purple-500' },
            { type: 'sentence_order', title: 'Sentence Ordering', desc: 'Arrange the words', icon: RotateCcw, color: 'bg-italian-red' },
            { type: 'listening', title: 'Listening', desc: 'Identify what you hear', icon: Volume2, color: 'bg-orange-500' },
          ].map((item, idx) => (
            <motion.button
              key={item.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => startSession(item.type)}
              className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm hover:shadow-lg transition-all text-left group cursor-pointer"
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-italian-charcoal dark:text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    const accuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <div className="w-24 h-24 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy size={48} className="text-white" />
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-italian-charcoal dark:text-white mb-4 font-heading">
          Practice Complete!
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-8 border border-gray-100 dark:border-italian-dark-border shadow-sm mb-8">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-3xl font-bold text-italian-green">{score}/{questions.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-italian-gold">{accuracy}%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-italian-red">+{xpEarned}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">XP Earned</p>
            </div>
          </div>
        </motion.div>
        <div className="flex gap-4 justify-center">
          <button onClick={() => startSession(sessionType)} className="px-6 py-3 bg-italian-green text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 cursor-pointer">
            <RotateCcw size={18} /> Try Again
          </button>
          <Link to="/dashboard" className="px-6 py-3 bg-gray-100 dark:bg-italian-dark-surface text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-italian-dark-border transition-colors flex items-center gap-2">
            <Home size={18} /> Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setSessionType(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIdx + 1}/{questions.length}</span>
          <div className="w-32 h-2 bg-gray-200 dark:bg-italian-dark-surface rounded-full overflow-hidden">
            <motion.div className="h-full bg-italian-green rounded-full" animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
          </div>
        </div>
        <div className="flex items-center gap-1 text-italian-gold">
          <Zap size={16} />
          <span className="font-bold text-sm">{streak}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white dark:bg-italian-dark-card rounded-2xl p-8 border border-gray-100 dark:border-italian-dark-border shadow-sm"
        >
          {(currentQuestion.type === 'vocabulary' || currentQuestion.type === 'multiple_choice' || currentQuestion.type === 'listening') && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">{currentQuestion.type.replace('_', ' ')} Question</p>
              <p className="text-xl font-semibold text-italian-charcoal dark:text-white mb-6">{currentQuestion.question}</p>
              {currentQuestion.type === 'listening' && (
                <button onClick={() => handleListen(currentQuestion.question.replace(/.*['"](.+)['"].*/, '$1'))} className="mb-4 px-4 py-2 bg-italian-green text-white rounded-xl flex items-center gap-2 hover:bg-green-700 transition-colors cursor-pointer">
                  <Volume2 size={18} /> Listen
                </button>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options?.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    disabled={answered}
                    className={`p-4 rounded-xl border-2 text-left font-medium transition-all cursor-pointer ${
                      answered
                        ? opt === currentQuestion.answer
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : opt === selectedAnswer
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'border-gray-200 dark:border-italian-dark-border opacity-50'
                        : 'border-gray-200 dark:border-italian-dark-border hover:border-italian-green dark:hover:border-italian-green'
                    }`}
                  >
                    {opt}
                    {answered && opt === currentQuestion.answer && <CheckCircle size={16} className="inline ml-2 text-green-500" />}
                    {answered && opt === selectedAnswer && opt !== currentQuestion.answer && <XCircle size={16} className="inline ml-2 text-red-500" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(currentQuestion.type === 'translation' || currentQuestion.type === 'fill_blank') && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">{currentQuestion.type.replace('_', ' ')}</p>
              <p className="text-xl font-semibold text-italian-charcoal dark:text-white mb-2">{currentQuestion.question}</p>
              {currentQuestion.hint && <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Hint: {currentQuestion.hint}</p>}
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && textInput.trim() && handleAnswer(textInput.trim())}
                disabled={answered}
                placeholder="Type your answer in Italian..."
                className="w-full p-4 border-2 border-gray-200 dark:border-italian-dark-border rounded-xl text-lg focus:border-italian-green dark:focus:border-italian-green outline-none transition-colors bg-transparent dark:text-white"
              />
              {!answered && (
                <button onClick={() => textInput.trim() && handleAnswer(textInput.trim())} disabled={!textInput.trim()} className="mt-4 px-6 py-3 bg-italian-green text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 cursor-pointer">
                  Check Answer
                </button>
              )}
              {answered && (
                <p className={`mt-4 font-medium ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {isCorrect ? 'Correct!' : `Incorrect. The answer is: ${currentQuestion.answer}`}
                </p>
              )}
            </div>
          )}

          {currentQuestion.type === 'sentence_order' && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Sentence Ordering</p>
              <p className="text-xl font-semibold text-italian-charcoal dark:text-white mb-6">{currentQuestion.question}</p>
              <div className="min-h-[60px] p-4 border-2 border-dashed border-gray-300 dark:border-italian-dark-border rounded-xl mb-4 flex flex-wrap gap-2">
                {sentenceOrder.map((word, i) => (
                  <button
                    key={`${word}-${i}`}
                    onClick={() => {
                      if (!answered) {
                        const newOrder = sentenceOrder.filter((_, idx) => idx !== i);
                        setSentenceOrder(newOrder);
                      }
                    }}
                    className="px-4 py-2 bg-italian-green/10 dark:bg-italian-green/20 text-italian-green rounded-lg font-medium cursor-pointer hover:bg-italian-green/20"
                  >
                    {word}
                  </button>
                ))}
              </div>
              <div className="min-h-[60px] p-4 border-2 border-italian-green rounded-xl mb-4 flex flex-wrap gap-2 bg-green-50/50 dark:bg-green-900/10">
                {!answered && sentenceOrder.length === 0 && <span className="text-gray-400 text-sm">Click words above to build the sentence</span>}
              </div>
              {!answered && (
                <button onClick={() => sentenceOrder.length > 0 && handleAnswer(sentenceOrder)} disabled={sentenceOrder.length === 0} className="px-6 py-3 bg-italian-green text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 cursor-pointer">
                  Check Answer
                </button>
              )}
            </div>
          )}

          {answered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-end">
              <button onClick={nextQuestion} className="px-6 py-3 bg-italian-green text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 cursor-pointer">
                {currentIdx + 1 >= questions.length ? 'Finish' : 'Next'} <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
