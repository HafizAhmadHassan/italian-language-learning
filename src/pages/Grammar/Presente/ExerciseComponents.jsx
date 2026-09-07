import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

function normalize(s) {
  return (s || '').trim().toLowerCase().replace(/[!?.,;:’”"']/g, '');
}

function isTextCorrect(input, acceptedAnswers, answer) {
  if (acceptedAnswers && acceptedAnswers.length === 0) return normalize(input).length > 0;
  const accepted = (acceptedAnswers || [answer]).map((a) => normalize(a));
  return accepted.includes(normalize(input));
}

function Feedback({ isCorrect, correctAnswer, explanation }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl p-4 border ${
        isCorrect
          ? 'bg-italian-green/10 border-italian-green/30'
          : 'bg-italian-red/10 border-italian-red/30'
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        {isCorrect ? (
          <CheckCircle className="w-5 h-5 text-italian-green" />
        ) : (
          <XCircle className="w-5 h-5 text-italian-red" />
        )}
        <span className={`font-semibold text-sm ${isCorrect ? 'text-italian-green' : 'text-italian-red'}`}>
          {isCorrect ? '✓ Correct!' : 'Not quite.'}
        </span>
      </div>
      {!isCorrect && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Correct answer: <span className="font-semibold text-italian-green">{correctAnswer}</span>
        </p>
      )}
      {explanation && (
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{explanation}</p>
      )}
    </motion.div>
  );
}

export function MultipleChoiceExercise({ question, options, answer, explanation, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === answer) onComplete(true);
  };

  if (submitted) {
    return (
      <div className="space-y-3">
        <Feedback isCorrect={selected === answer} correctAnswer={answer} explanation={explanation} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{question}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export function FillBlankExercise({ sentence, options, answer, explanation, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === answer) onComplete(true);
  };

  const parts = sentence.split('___');

  if (submitted) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {parts[0]}<span className="font-bold text-italian-green">{answer}</span>{parts[1] || ''}
        </p>
        <Feedback isCorrect={selected === answer} correctAnswer={answer} explanation={explanation} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {parts[0]}<span className="inline-block min-w-[60px] border-b-2 border-dashed border-italian-green/50 text-center font-bold text-italian-green">{selected || '___'}</span>{parts[1] || ''}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export function TextInputExercise({ question, acceptedAnswers, answer, explanation, onComplete }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = isTextCorrect(input, acceptedAnswers, answer);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setSubmitted(true);
    if (isCorrect) onComplete(true);
  };

  if (submitted) {
    return (
      <div className="space-y-3">
        <Feedback isCorrect={isCorrect} correctAnswer={answer} explanation={explanation} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{question}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="Type your answer in Italian..."
        className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40 focus:border-italian-green"
      />
      <button
        onClick={handleSubmit}
        disabled={!input.trim()}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export function MatchingExercise({ pairs, explanation, onComplete }) {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const shuffledRight = pairs.map((p) => p.right);

  const handleRightClick = (rightItem) => {
    if (selectedLeft === null || matches[selectedLeft] !== undefined) return;
    const newMatches = { ...matches, [selectedLeft]: rightItem };
    setMatches(newMatches);
    setSelectedLeft(null);

    if (Object.keys(newMatches).length === pairs.length) {
      setSubmitted(true);
      const allCorrect = pairs.every((p) => newMatches[p.left] === p.right);
      if (allCorrect) onComplete(true);
    }
  };

  const reset = () => {
    setMatches({});
    setSelectedLeft(null);
    setSubmitted(false);
  };

  const correctCount = pairs.filter((p) => matches[p.left] === p.right).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-500">
        <span>Tap a word on the left, then tap its match on the right.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          {pairs.map((p) => (
            <button
              key={p.left}
              onClick={() => !submitted && setSelectedLeft(p.left)}
              className={`w-full px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 border ${
                submitted
                  ? matches[p.left] === p.right
                    ? 'bg-italian-green/10 border-italian-green/30 text-italian-green'
                    : 'bg-italian-red/10 border-italian-red/30 text-italian-red'
                  : selectedLeft === p.left
                    ? 'bg-italian-green text-white shadow-md'
                    : matches[p.left]
                      ? 'bg-gray-100 dark:bg-italian-dark-surface border-gray-200 dark:border-italian-dark-border text-gray-500'
                      : 'bg-gray-50 dark:bg-italian-dark-surface border-gray-200 dark:border-italian-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-italian-dark-border'
              }`}
            >
              {p.left}
              {matches[p.left] && (
                <span className="ml-2 text-xs opacity-70">→ {matches[p.left]}</span>
              )}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((item) => {
            const isMatched = Object.values(matches).includes(item);
            return (
              <button
                key={item}
                onClick={() => handleRightClick(item)}
                disabled={isMatched || submitted}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 border ${
                  isMatched
                    ? 'bg-gray-100 dark:bg-italian-dark-surface border-gray-200 dark:border-italian-dark-border text-gray-400 cursor-not-allowed'
                    : 'bg-gray-50 dark:bg-italian-dark-surface border-gray-200 dark:border-italian-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-italian-dark-border'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      {submitted && (
        <div className="space-y-3">
          <Feedback
            isCorrect={correctCount === pairs.length}
            correctAnswer={`${correctCount}/${pairs.length} correct`}
            explanation={explanation}
          />
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-italian-green transition-colors"
          >
            <RotateCcw size={14} /> Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export function WordOrderExercise({ words, answer, explanation, onComplete }) {
  const [ordered, setOrdered] = useState([]);
  const [remaining, setRemaining] = useState(words);
  const [submitted, setSubmitted] = useState(false);

  const addWord = (word, idx) => {
    if (submitted) return;
    setOrdered([...ordered, word]);
    setRemaining(remaining.filter((_, i) => i !== idx));
  };

  const removeWord = (idx) => {
    if (submitted) return;
    const word = ordered[idx];
    setOrdered(ordered.filter((_, i) => i !== idx));
    setRemaining([...remaining, word]);
  };

  const handleSubmit = () => {
    if (ordered.length === 0) return;
    setSubmitted(true);
    const userSentence = ordered.join(' ');
    if (normalize(userSentence) === normalize(answer)) onComplete(true);
  };

  const reset = () => {
    setOrdered([]);
    setRemaining(words);
    setSubmitted(false);
  };

  const isCorrect = (() => {
    const userSentence = ordered.join(' ');
    return normalize(userSentence) === normalize(answer);
  })();

  return (
    <div className="space-y-4">
      <div className="min-h-[48px] p-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-dashed border-gray-200 dark:border-italian-dark-border flex flex-wrap gap-2">
        {ordered.length === 0 && (
          <span className="text-sm text-gray-400">Tap words to build the sentence...</span>
        )}
        {ordered.map((word, idx) => (
          <motion.button
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => removeWord(idx)}
            className="px-3 py-1.5 rounded-lg bg-italian-green text-white text-sm font-medium hover:bg-italian-green/80 transition-colors"
          >
            {word}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {remaining.map((word, idx) => (
          <motion.button
            key={`${word}-${idx}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => addWord(word, idx)}
            className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-italian-dark-border transition-colors"
          >
            {word}
          </motion.button>
        ))}
      </div>

      {submitted ? (
        <div className="space-y-3">
          <Feedback isCorrect={isCorrect} correctAnswer={answer} explanation={explanation} />
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-italian-green transition-colors"
          >
            <RotateCcw size={14} /> Try Again
          </button>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={ordered.length === 0}
          className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          Check Answer
        </button>
      )}
    </div>
  );
}

export function TranslationExercise({ sentence, direction, options, answer, explanation, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === answer) onComplete(true);
  };

  if (submitted) {
    return (
      <div className="space-y-3">
        <Feedback isCorrect={selected === answer} correctAnswer={answer} explanation={explanation} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
        <p className="text-sm font-semibold text-italian-charcoal dark:text-white">{sentence}</p>
        <p className="text-xs text-gray-400 mt-1">
          {direction === 'it-en' ? 'Italian → English' : 'English → Italian'}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
              selected === opt
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export function ConjugationTableExercise({ verb, prompt, options, answer, explanation, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === answer) onComplete(true);
  };

  if (submitted) {
    return (
      <div className="space-y-3">
        <Feedback isCorrect={selected === answer} correctAnswer={answer} explanation={explanation} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
        <p className="text-xs text-gray-400 mb-1">Conjugate <span className="font-semibold text-italian-green">{verb}</span></p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{prompt}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Check Answer
      </button>
    </div>
  );
}

export function StoryExercise({ story, title, vocab, questions, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleAnswer = (qIdx, answer) => {
    setAnswers({ ...answers, [qIdx]: answer });
  };

  const submitQuestion = (qIdx) => {
    if (!answers[qIdx]) return;
    const q = questions[qIdx];
    const correct = answers[qIdx] === q.answer;
    setSubmitted({ ...submitted, [qIdx]: true });
    if (correct) onComplete(true);
  };

  const allSubmitted = questions.every((_, idx) => submitted[idx]);
  const correctCount = questions.filter((q, idx) =>
    submitted[idx] && (q.type === 'text' ? true : answers[idx] === q.answer)
  ).length;

  return (
    <div className="space-y-5">
      <div className="px-4 py-4 rounded-xl bg-gray-50 dark:bg-italian-dark-surface border border-gray-100 dark:border-italian-dark-border">
        {title && <p className="text-xs font-semibold text-italian-green mb-2 uppercase tracking-wider">{title}</p>}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{story}</p>
      </div>

      {vocab && vocab.length > 0 && (
        <div className="px-4 py-3 rounded-xl bg-italian-gold/5 border border-italian-gold/20">
          <p className="text-xs font-semibold text-italian-gold uppercase tracking-wider mb-2">Helpful words</p>
          <div className="flex flex-wrap gap-2">
            {vocab.map((v, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-italian-dark-card border border-gray-200 dark:border-italian-dark-border text-xs">
                <span className="font-semibold text-italian-charcoal dark:text-gray-100">{v.word}</span>
                <span className="text-gray-400">=</span>
                <span className="text-gray-500 dark:text-gray-400">{v.meaning}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {questions.map((q, idx) => (
        <div key={idx} className="space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="text-italian-green mr-1">{idx + 1}.</span> {q.question}
          </p>
          {q.type === 'text' ? (
            <div className="space-y-3">
              <TextInputExercise
                question=""
                acceptedAnswers={q.acceptedAnswers || [q.answer]}
                answer={q.answer}
                explanation={q.explanation}
                onComplete={() => {
                  setSubmitted((prev) => ({ ...prev, [idx]: true }));
                  onComplete(true);
                }}
              />
              {submitted[idx] && (
                <p className="text-xs text-gray-400">This open question is marked complete. Text production has no single right answer - check your sentence using the feedback above.</p>
              )}
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                {(q.options || []).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => !submitted[idx] && handleAnswer(idx, opt)}
                    disabled={submitted[idx]}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                      submitted[idx]
                        ? answers[idx] === opt
                          ? opt === q.answer
                            ? 'bg-italian-green/10 border border-italian-green/30 text-italian-green'
                            : 'bg-italian-red/10 border border-italian-red/30 text-italian-red'
                          : opt === q.answer
                            ? 'bg-italian-green/10 border border-italian-green/30 text-italian-green'
                            : 'bg-gray-50 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-gray-400'
                        : answers[idx] === opt
                          ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                          : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {!submitted[idx] ? (
                <button
                  onClick={() => submitQuestion(idx)}
                  disabled={!answers[idx]}
                  className="px-5 py-2 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Check
                </button>
              ) : (
                <Feedback
                  isCorrect={answers[idx] === q.answer}
                  correctAnswer={q.answer}
                  explanation={q.explanation}
                />
              )}
            </>
          )}
        </div>
      ))}

      {allSubmitted && (
        <div className="px-4 py-3 rounded-xl bg-italian-green/10 border border-italian-green/30 text-center">
          <p className="text-sm font-semibold text-italian-green">
            Story Score: {correctCount}/{questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export function MasteryTestExercise({ questions, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const gradeQuestion = (q, idx) =>
    q.type === 'text'
      ? isTextCorrect(answers[idx], q.acceptedAnswers, q.answer)
      : answers[idx] === q.answer;

  const countCorrect = () => questions.filter((q, idx) => gradeQuestion(q, idx)).length;

  const handleSelect = (qIdx, answer) => {
    setAnswers({ ...answers, [qIdx]: answer });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
    const correctCount = countCorrect();
    const percentage = Math.round((correctCount / questions.length) * 100);
    onComplete(percentage, correctCount, questions.length);
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  if (submitted) {
    const correctCount = countCorrect();
    const percentage = Math.round((correctCount / questions.length) * 100);

    let grade, gradeColor, message;
    if (percentage >= 90) {
      grade = 'Excellent!';
      gradeColor = 'text-italian-green';
      message = 'You are confident with regular Italian present tense.';
    } else if (percentage >= 75) {
      grade = 'Good!';
      gradeColor = 'text-italian-gold';
      message = 'You understand the main patterns. Review a few areas.';
    } else if (percentage >= 60) {
      grade = 'Almost there!';
      gradeColor = 'text-italian-gold';
      message = 'Practice the verb endings and sentence structure again.';
    } else {
      grade = 'Keep practicing!';
      gradeColor = 'text-italian-red';
      message = 'Review the lessons and repeat the exercises.';
    }

    return (
      <div className="space-y-6">
        <div className="text-center py-6">
          <p className={`text-3xl font-heading font-bold ${gradeColor}`}>{percentage}%</p>
          <p className="text-lg font-semibold text-italian-charcoal dark:text-white mt-2">{grade}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{message}</p>
          <p className="text-sm text-gray-400 mt-2">{correctCount}/{questions.length} correct</p>
        </div>

        {questions.map((q, idx) => {
          const isCorrect = gradeQuestion(q, idx);
          return (
            <div key={idx} className="space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="text-italian-green mr-1">{idx + 1}.</span> {q.question}
              </p>
              {q.type === 'text' ? (
                <p className="text-sm text-gray-500">
                  Your answer: <span className={isCorrect ? 'text-italian-green' : 'text-italian-red'}>{answers[idx]}</span>
                  {!isCorrect && <span className="text-italian-green ml-2">Answer: {q.answer}</span>}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Your answer: <span className={isCorrect ? 'text-italian-green' : 'text-italian-red'}>{answers[idx]}</span>
                  {!isCorrect && <span className="text-italian-green ml-2">Answer: {q.answer}</span>}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((q, idx) => (
        <div key={idx} className="space-y-3 pb-4 border-b border-gray-100 dark:border-italian-dark-border last:border-0">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="text-italian-green mr-1">{idx + 1}.</span> {q.question}
          </p>
          {q.type === 'text' ? (
            <input
              type="text"
              value={answers[idx] || ''}
              onChange={(e) => handleSelect(idx, e.target.value)}
              placeholder="Type your answer in Italian..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-italian-dark-surface border border-gray-200 dark:border-italian-dark-border text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40 focus:border-italian-green"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {(q.options || []).map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(idx, opt)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    answers[idx] === opt
                      ? 'bg-italian-green text-white shadow-md shadow-italian-green/20'
                      : 'bg-gray-50 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-italian-dark-border border border-gray-200 dark:border-italian-dark-border'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={!allAnswered}
        className="w-full px-5 py-3 rounded-lg bg-italian-green text-white text-sm font-semibold hover:shadow-lg hover:shadow-italian-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        Submit Final Test ({Object.keys(answers).length}/{questions.length})
      </button>
    </div>
  );
}
