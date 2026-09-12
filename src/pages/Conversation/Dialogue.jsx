import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Volume2,
  Mic,
  Square,
  RefreshCw,
  ArrowRight,
  SkipForward,
  CheckCircle2,
  Star,
  Trophy,
  RotateCcw,
  Keyboard,
} from 'lucide-react';
import conversations from '../../data/conversations';
import { speak, stopSpeaking, recognizeSpeech, matchSpeech } from '../../services/speech';
import progress from '../../services/progress';
import storage from '../../services/storage';

const PASS_THRESHOLD = 0.5;
const EXCELLENT_THRESHOLD = 0.8;
const LISTEN_TIMEOUT = 9000;

const MISSION_OBJECTIVES = {
  'cafe-ordering': ['Order a drink', 'Order something to eat', 'Ask for the price'],
  'asking-directions': ['Ask for directions', 'Understand the route', 'Confirm the location'],
  'market-shopping': ['Ask about products', 'Negotiate the price', 'Buy something'],
  'restaurant-dinner': ['Ask for a table', 'Order food', 'Ask for the bill'],
  'meeting-people': ['Introduce yourself', 'Ask about their job', 'Find common interests'],
  'train-station': ['Ask about schedules', 'Buy a ticket', 'Find the platform'],
  'pharmacy-visit': ['Explain your symptoms', 'Ask about medicine', 'Follow instructions'],
  'hotel-booking': ['Book a room', 'Ask about amenities', 'Check-in'],
  'doctor-visit': ['Describe symptoms', 'Ask about treatment', 'Understand instructions'],
  'airport-checkin': ['Check in for your flight', 'Ask about gate', 'Handle luggage'],
  'talking-hobbies': ['Share your hobbies', 'Ask about theirs', 'Make plans'],
  'department-store': ['Find what you need', 'Ask about sizes', 'Make a purchase'],
  'phone-reservation': ['Make a reservation', 'Confirm details', 'Handle changes'],
  'calling-taxi': ['Call for a taxi', 'Give your address', 'Ask about arrival time'],
  'work-meeting': ['Introduce yourself', 'Get to know your colleague', 'Make plans together'],
  'job-interview': ['Present your experience', 'Answer questions well', 'Ask your own questions'],
  'dinner-invitation': ['Accept the invitation', 'Confirm the details', 'Arrange the plan'],
  'refund-request': ['Explain the problem', 'Ask for a solution', 'Reach an agreement'],
  'transport-delay': ['Find out what happened', 'Get an alternative plan', 'Protect your rights'],
  'lost-wallet': ['Report the loss', 'Describe the wallet', 'Follow the advice'],
  'buying-clothes': ['Ask for help', 'Try on clothes', 'Make a purchase'],
  'hairdresser-salon': ['Explain your haircut', 'Ask the price', 'Book a follow-up'],
  'making-weekend-plans': ['Suggest activities', 'Agree on a plan', 'Pick a time and place'],
  'hotel-checkout': ['Settle the bill', 'Ask about extras', 'Arrange a taxi'],
  'food-recommendations': ['Ask for recommendations', 'Check ingredients', 'Choose a dish'],
  'meeting-neighbor': ['Introduce yourself', 'Ask about the neighborhood', 'Offer help'],
  'bank-visit': ['Ask about accounts', 'Understand fees', 'Ask about documents'],
  'post-office': ['Ask about shipping', 'Check cost and time', 'Send the package'],
  'asking-clarification': ['Ask to repeat', 'Ask to speak slowly', 'Confirm meaning'],
  'payment-problem': ['Find out what happened', 'Check alternatives', 'Solve the payment'],
  'broken-item': ['Explain the problem', 'Ask for a fix', 'Get a replacement'],
  'morning-routine': ['Describe your routine', 'Ask about theirs', 'Respond to the invitation'],
  'buying-shoes': ['Ask about sizes', 'Try on shoes', 'Ask the price'],
  'exchanging-item': ['Explain the issue', 'Ask about the policy', 'Choose a replacement'],
  'lost-phone': ['Explain what happened', 'Describe the phone', 'Recover the phone'],
  'dentist-visit': ['Book an appointment', 'Describe the pain', 'Follow the treatment'],
  'customer-service': ['Explain the problem', 'Verify your details', 'Agree on a solution'],
  'booking-appointment': ['Say why you need it', 'Pick a time', 'Confirm your details'],
  'going-to-party': ['Get the details', 'Offer to bring something', 'Make party plans'],
  'declining-invitation': ['Thank them', 'Explain politely', 'Keep the friendship'],
  'giving-compliments': ['Give a compliment', 'Respond kindly', 'Have a small chat'],
  'introducing-yourself': ['Say hello', 'Introduce yourself', 'Ask about them'],
  'talking-your-day': ['Describe your morning', 'Talk about now', 'Share your plans'],
  'rescheduling-meeting': ['Explain the reason', 'Propose new times', 'Confirm'],
  'paying-bill': ['Ask for the bill', 'Check the charges', 'Settle the payment'],
  'wrong-order': ['Explain the mistake', 'Request the right dish', 'Manage the wait'],
  'asking-ingredients': ['Ask about ingredients', 'Check for allergies', 'Choose safely'],
  'lost-luggage': ['Explain the situation', 'Give your details', 'Agree on follow-up'],
  'hotel-facilities': ['Ask about amenities', 'Check the schedule', 'Plan your stay'],
  'buying-ticket': ['Ask about ticket types', 'Check the price', 'Complete the purchase'],
  'small-talk': ['Make friendly chatter', 'Ask about the weekend', 'Keep it light'],
  'inviting-someone': ['Suggest the visit', 'Propose a date', 'Arrange the details'],
  'asking-favor': ['Explain what you need', 'Respond to questions', 'Say thank you'],
  'giving-update': ['Summarize your progress', 'Mention any problems', 'Answer questions'],
  'asking-help-work': ['Explain the task', 'Request assistance', 'Agree on a time'],
  'giving-opinion': ['Share your view', 'Argue politely', 'Respond to challenges'],
};

const USEFUL_PHRASES = {
  'cafe-ordering': ['Vorrei un caffè, per favore', 'Quanto costa in tutto?', 'Un cornetto, grazie'],
  'asking-directions': ['Dov\'è la stazione?', 'È lontano da qui?', 'Grazie mille!'],
  'market-shopping': ['Quanto costa?', 'Posso provarlo?', 'Faccio un giro', 'Vorrei comprare…'],
  'restaurant-dinner': ['Hai un tavolo libero?', 'Vorrei ordinare…', 'Il conto, per favore'],
  'meeting-people': ['Piacere di conoscerti', 'Cosa fai nella vita?', 'Di dove sei?'],
  'train-station': ['Vorrei un biglietto per…', 'A che ora parte?', 'Da quale binario?'],
  'pharmacy-visit': ['Mi serve qualcosa per…', 'Quanto costa?', 'Sono allergico a…'],
  'hotel-booking': ['Ho una prenotazione', 'Ha una camera libera?', 'Che prezzo ha la camera?'],
  'doctor-visit': ['Mi sento male', 'Da quanto tempo?', 'Grazie, dottore'],
  'airport-checkin': ['Il mio volo è alle…', 'Dov\'è il gate?', 'Ho una valigia'],
  'talking-hobbies': ['Mi piace molto…', 'Ti piace…?', 'Possiamo farlo insieme'],
  'department-store': ['Dov\'è il reparto…?', 'Hai la mia taglia?', 'Posso pagare con carta?'],
  'phone-reservation': ['Vorrei prenotare…', 'A che ora?', 'Confermo la prenotazione'],
  'calling-taxi': ['Mi serve un taxi', 'Quanto ci vuole?', 'Posso pagare con carta?'],
  'work-meeting': ['Piacere!', 'Cosa fai nel tempo libero?', 'Mi piacerebbe tanto!'],
  'job-interview': ['Ho esperienza in…', 'Quali sono i punti di forza di questa azienda?', 'Sono disposto a negoziare'],
  'dinner-invitation': ['Con piacere, grazie!', 'A che ora?', 'Posso portare qualcosa?'],
  'refund-request': ['Vorrei restituire questo articolo', 'Ho scontrino', 'C\'è un problema con la giacca'],
  'transport-delay': ['C\'è un ritardo di 40 minuti', 'Esiste un\'alternativa?', 'Posso prendere un altro treno?'],
  'lost-wallet': ['Ho perso il portafoglio', 'Dentro c\'erano i documenti', 'Cosa devo fare?'],
  'buying-clothes': ['Vorrei una camicia', 'Che taglia porta?', 'Posso provarla?'],
  'hairdresser-salon': ['Vorrei un taglio corto', 'Quanto costa?', 'Un po\' più corto, grazie'],
  'making-weekend-plans': ['Hai voglia di fare qualcosa?', 'Che ne dici di…?', 'Perfetto, ci vediamo lì!'],
  'hotel-checkout': ['Posso pagare il conto?', 'Cos\'è questa voce?', 'Potete chiamare un taxi?'],
  'food-recommendations': ['Cosa mi consiglia?', 'Contiene nocciole?', 'Allora prendo questo'],
  'meeting-neighbor': ['Piacere, sono…', 'Come sono i negozi qui vicino?', 'Posso aiutarti a traslocare?'],
  'bank-visit': ['Vorrei aprire un conto', 'Ci sono commissioni?', 'Che documenti servono?'],
  'post-office': ['Vorrei spedire un pacco', 'Quanto costa?', 'In quanto tempo arriva?'],
  'asking-clarification': ['Puoi ripetere, per favore?', 'Puoi parlare più lentamente?', 'Vuoi dire che…?'],
  'payment-problem': ['La carta non funziona', 'Possiamo riprovare?', 'Posso pagare in contanti?'],
  'broken-item': ['Questo è rotto', 'Posso cambiarlo?', 'Vorrei un rimborso'],
  'morning-routine': ['Mi alzo alle sette', 'E tu, cosa fai al mattino?', 'Sarei tentato a correre con te'],
  'buying-shoes': ['Che numero porta?', 'Posso provarle?', 'Quanto costano?'],
  'exchanging-item': ['Vorrei cambiare questo maglione', 'Posso vedere un\'altra taglia?', 'Quanto devo pagare in più?'],
  'lost-phone': ['Ho perso il telefono', 'È un telefono nero', 'Avete trovato un telefono?'],
  'dentist-visit': ['Ho mal di denti', 'Quando posso venire?', 'Sarà doloroso?'],
  'customer-service': ['Il pacco non è mai arrivato', 'Il mio numero d\'ordine è…', 'Preferirei un rimborso'],
  'booking-appointment': ['Vorrei prenotare una visita', 'Ci sono posti oggi?', 'Va bene, confermo'],
  'going-to-party': ['Quando inizia la festa?', 'Posso portare qualcosa?', 'Perfetto, ci sarò!'],
  'declining-invitation': ['Grazie mille per l\'invito', 'Purtroppo non posso venire', 'Magari la prossima volta!'],
  'giving-compliments': ['Che bella camicia!', 'Grazie, sei molto gentile', 'Mi piace molto come lavori'],
  'introducing-yourself': ['Mi chiamo…', 'Piacere di conoscerti', 'Di dove sei?'],
  'talking-your-day': ['Stamattina ho lavorato', 'Adesso sto…', 'Più tardi voglio…'],
  'rescheduling-meeting': ['Devo spostare la riunione', 'Puoi venerdì?', 'Ok, lo metto in calendario'],
  'paying-bill': ['Il conto, per favore', 'Cos\'è questa voce?', 'Posso pagare con la carta?'],
  'wrong-order': ['Ho ordinato la pasta, non questo', 'Puoi portarmi il piatto giusto?', 'Va bene, aspetto'],
  'asking-ingredients': ['Cosa contiene questo piatto?', 'C\'è del lattosio?', 'Riesco a mangiarlo?'],
  'lost-luggage': ['La mia valigia non è arrivata', 'Ecco il mio biglietto', 'Come faccio ad averla?'],
  'hotel-facilities': ['A che ora è la colazione?', 'C\'è una piscina?', 'Come funziona il Wi-Fi?'],
  'buying-ticket': ['Quanto costa un biglietto?', 'Copre anche il centro?', 'Accetta la carta?'],
  'small-talk': ['Che bella giornata oggi!', 'Cosa hai fatto nel weekend?', 'Ti piace il cibo italiano?'],
  'inviting-someone': ['Dovresti venire a trovarmi!', 'Quando sei libero?', 'Ti preparo tutto io'],
  'asking-favor': ['Posso chiederti un favore?', 'Puoi aiutarmi con…?', 'Grazie mille!'],
  'giving-update': ['Ho finito la parte principale', 'Un problema: ci manca il materiale', 'Non credo di fare in tempo'],
  'asking-help-work': ['Puoi aiutarmi con questo?', 'Come posso risolverlo?', 'Quando puoi, mi diresti?'],
  'giving-opinion': ['Penso che sia una buona idea', 'Non sono del tutto d\'accordo', 'Lo vedo in un altro modo'],
};

function getFeedback(score) {
  if (score >= EXCELLENT_THRESHOLD) {
    return { label: 'Excellent!', color: 'text-italian-green', bg: 'bg-italian-green/10' };
  }
  if (score >= PASS_THRESHOLD) {
    return { label: 'Good!', color: 'text-italian-sage', bg: 'bg-italian-sage/10' };
  }
  return { label: 'Keep practicing', color: 'text-italian-gold', bg: 'bg-italian-gold/10' };
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
  }),
};

export default function Dialogue() {
  const { id } = useParams();
  const scenario = conversations.find((c) => c.id === id);

  const [turnIdx, setTurnIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(null);
  const [passed, setPassed] = useState(false);
  const [turnLog, setTurnLog] = useState([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [useTyping, setUseTyping] = useState(false);
  const [typedInput, setTypedInput] = useState('');
  const [noSpeech, setNoSpeech] = useState(false);
  const [showMission, setShowMission] = useState(true);

  const recognitionRef = useRef(null);
  const listeningRef = useRef(false);
  const scrollRef = useRef(null);
  const bestScoreRef = useRef({});

  const currentTurn = scenario?.turns[turnIdx];
  const turnNumber = turnIdx + 1;
  const totalTurns = scenario?.turns.length || 0;

  useEffect(() => {
    if (!scenario || showMission) return;
    const delay = setTimeout(() => {
      speak(currentTurn.italian);
    }, 500);
    return () => clearTimeout(delay);
  }, [turnIdx, scenario, currentTurn?.italian, showMission]);

  useEffect(() => {
    if (!scenario) return;
    bestScoreRef.current = {};
    setTurnLog([]);
    setTurnIdx(0);
    setResult(null);
    setPassed(false);
    setXpEarned(0);
    setCompleted(false);
    setNoSpeech(false);
    setShowMission(true);
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [turnLog, result, recording]);

  if (!scenario) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Scenario not found.</p>
          <Link to="/conversation" className="text-italian-green font-semibold hover:underline">
            Back to Conversation
          </Link>
        </div>
      </div>
    );
  }

  const evaluateTranscripts = (transcripts) => {
    let best = { score: 0, response: null, transcript: '' };
    for (const t of transcripts) {
      const m = matchSpeech(t.transcript, currentTurn.acceptedResponses);
      if (m.score > best.score) {
        best = {
          score: m.score,
          response: m.response,
          transcript: t.transcript,
        };
      }
    }
    return best;
  };

  const handleRecognitionResult = (transcripts) => {
    listeningRef.current = false;
    recognitionRef.current = null;
    setRecording(false);
    setNoSpeech(false);
    const best = evaluateTranscripts(transcripts);
    applyResult(best);
  };

  const applyResult = (best) => {
    const scorePct = Math.round(best.score * 100);
    setResult({
      transcript: best.transcript,
      score: best.score,
      scorePct,
      expected: best.response?.text || '',
    });

    const isPass = best.score >= PASS_THRESHOLD;
    setPassed(isPass);

    bestScoreRef.current[turnIdx] = Math.max(
      bestScoreRef.current[turnIdx] || 0,
      best.score
    );

    if (isPass) {
      setTurnLog((log) => [
        ...log,
        {
          turnId: currentTurn.id,
          spoken: best.transcript,
          expected: best.response.text,
          score: best.score,
        },
      ]);
      progress.addXP(5);
      setXpEarned((x) => x + 5);
    }
  };

  const startListening = () => {
    if (listeningRef.current) return;
    stopSpeaking();
    setResult(null);
    setPassed(false);
    setNoSpeech(false);

    const handle = recognizeSpeech(handleRecognitionResult, (error) => {
      listeningRef.current = false;
      recognitionRef.current = null;
      setRecording(false);
      setResult({
        transcript: '',
        score: 0,
        scorePct: 0,
        expected: '',
        error: error.message,
      });
    });

    if (!handle) {
      listeningRef.current = false;
      setResult({
        transcript: '',
        score: 0,
        scorePct: 0,
        expected: '',
        error: 'Speech recognition is not available in this browser. Try using the keyboard input instead.',
      });
      return;
    }

    recognitionRef.current = handle;
    listeningRef.current = true;
    setRecording(true);

    setTimeout(() => {
      if (listeningRef.current && recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
        listeningRef.current = false;
        setRecording(false);
        setNoSpeech(true);
      }
    }, LISTEN_TIMEOUT);
  };

  const stopListening = () => {
    listeningRef.current = false;
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setRecording(false);
  };

  const submitTyped = () => {
    if (!typedInput.trim()) return;
    const best = evaluateTranscripts([{ transcript: typedInput, confidence: 1 }]);
    applyResult(best);
    setTypedInput('');
  };

  const retry = () => {
    setResult(null);
    setPassed(false);
    setNoSpeech(false);
  };

  const handleNext = () => {
    if (turnIdx + 1 >= totalTurns) {
      finishScenario();
    } else {
      setTurnIdx((i) => i + 1);
      setResult(null);
      setPassed(false);
      setNoSpeech(false);
    }
  };

  const handleSkip = () => {
    setTurnLog((log) => [
      ...log,
      {
        turnId: currentTurn.id,
        spoken: '—',
        expected: currentTurn.acceptedResponses[0].text,
        score: 0,
        skipped: true,
      },
    ]);
    handleNext();
  };

  const finishScenario = () => {
    const bestScores = Object.values(bestScoreRef.current);
    const averageScore =
      bestScores.length > 0
        ? Math.round((bestScores.reduce((a, b) => a + b, 0) / bestScores.length) * 100)
        : 0;
    const passedCount = Object.values(bestScoreRef.current).filter(
      (s) => s >= PASS_THRESHOLD
    ).length;
    const bonus = passedCount === totalTurns ? 25 : 0;

    if (bonus > 0) {
      progress.addXP(bonus);
    }

    const prev = storage.get('conversationResults', {});
    storage.set('conversationResults', {
      ...prev,
      [scenario.id]: {
        averageScore,
        passedTurns: passedCount,
        totalTurns,
        completed: passedCount === totalTurns,
        xpEarned: xpEarned + bonus,
        completedAt: new Date().toISOString(),
      },
    });

    setXpEarned((x) => x + bonus);
    progress.recordActivity(Math.max(2, Math.round(totalTurns * 0.5)));
    setCompleted(true);
  };

  const stars = xpEarned > 40 ? 3 : xpEarned >= 20 ? 2 : 1;

  return (
    <div className="min-h-full pb-24 md:pb-8">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to="/conversation"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-italian-green transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="w-8 h-8 hidden md:flex items-center justify-center rounded-lg bg-italian-warm dark:bg-[#22252E] text-base">
              {scenario.icon}
            </span>
            <span className="font-heading font-semibold text-italian-charcoal dark:text-white">
              {scenario.title}
            </span>
          </Link>
          {!completed && (
            <span className="shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {turnNumber} / {totalTurns}
            </span>
          )}
        </div>

        {/* Progress bar */}
        {!completed && (
          <div className="h-1.5 rounded-full bg-gray-100 dark:bg-[#22252E] overflow-hidden mb-6">
            <motion.div
              className="h-full rounded-full bg-italian-green"
              initial={false}
              animate={{ width: `${(turnIdx / totalTurns) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}

        {/* Mission screen */}
        {showMission && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-italian-green/30 bg-white dark:bg-[#1A1D24] shadow-lg p-8 max-w-md mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-italian-green/10 flex items-center justify-center text-3xl mx-auto mb-4">
              {scenario.icon}
            </div>
            <h1 className="font-heading text-xl font-bold text-italian-charcoal dark:text-white text-center mb-1">
              {scenario.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              {scenario.description}
            </p>

            <div className="space-y-4 mb-6">
              {scenario.personality && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
                    Conversation partner
                  </p>
                  <p className="text-sm font-semibold text-italian-charcoal dark:text-white">
                    {scenario.personality} ({scenario.turns?.[0]?.label || 'Conversation partner'})
                  </p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
                  Your role
                </p>
                <p className="text-sm font-semibold text-italian-charcoal dark:text-white">
                  You
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">
                  Your mission
                </p>
                <ul className="space-y-1.5">
                  {(MISSION_OBJECTIVES[scenario.id] || ['Have a conversation', 'Respond naturally', 'Complete the dialogue']).map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-italian-charcoal dark:text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-italian-green" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setShowMission(false);
                speak(scenario.turns[0].italian);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-italian-green text-white font-semibold shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors"
            >
              <Mic size={18} />
              Start Role-play
            </button>
          </motion.div>
        )}

        {/* Chat transcript + player */}
        {!completed && !showMission ? (
          <div
            ref={scrollRef}
            className="max-h-[62vh] overflow-y-auto pr-1 space-y-4 scroll-smooth"
          >
            {/* Past log bubbles */}
            {turnLog.map((entry, i) => (
              <div key={i} className="space-y-3">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-italian-green/15 flex items-center justify-center text-italian-green shrink-0">
                    {scenario.turns[i].label.charAt(0)}
                  </div>
                  <div className="flex-1 max-w-[80%]">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1">
                      {scenario.turns[i].label}
                    </p>
                    <div className="rounded-2xl rounded-tl-md bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-[#2E323C] px-4 py-3">
                      <p className="text-italian-charcoal dark:text-white font-medium">
                        {scenario.turns[i].italian}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {scenario.turns[i].translation}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {entry.skipped ? (
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-md px-4 py-3 bg-italian-gold/10 border border-italian-gold/20">
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">
                        Skipped
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Expected: {entry.expected}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      custom={i}
                      className="max-w-[80%] rounded-2xl rounded-tr-md px-4 py-3 bg-italian-green/10 border border-italian-green/20"
                    >
                      <p className="text-italian-charcoal dark:text-white font-medium">
                        {entry.spoken}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <CheckCircle2 size={12} className="text-italian-green" />
                        <span className="text-xs text-italian-green font-semibold">
                          {Math.round(entry.score * 100)}%
                        </span>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            ))}

            {/* Current turn card */}
            <motion.div
              key={turnIdx}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={turnLog.length}
              className="rounded-2xl border border-italian-green/30 bg-italian-green/5 dark:border-italian-green/30 dark:bg-italian-green/10 p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-italian-green flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {currentTurn.label.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-italian-green">
                  {currentTurn.label}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => speak(currentTurn.italian)}
                  className="ml-auto shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] flex items-center justify-center text-italian-green hover:bg-italian-green/10 transition-colors"
                  title="Listen again"
                >
                  <Volume2 size={18} />
                </motion.button>
              </div>

              <p className="text-lg text-italian-charcoal dark:text-white font-heading font-semibold">
                {currentTurn.italian}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {currentTurn.translation}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="text-italian-gold">💡</span>
                <span>{currentTurn.hint}</span>
              </div>

              {/* Recording indicator */}
              {recording && (
                <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-white dark:bg-[#22252E] border border-italian-red/30 px-4 py-5">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-italian-red opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-italian-red" />
                  </span>
                  <span className="text-sm font-semibold text-italian-red">
                    Listening... speak now, then stop
                  </span>
                </div>
              )}

              {noSpeech && !result && (
                <div className="mt-4 text-sm text-italian-gold font-medium">
                  No speech detected. Try speaking closer to the mic or type your answer below.
                </div>
              )}

              {/* Result feedback */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4"
                  >
                    {result.error ? (
                      <div className="rounded-2xl px-4 py-3 bg-italian-red/10 border border-italian-red/20 text-italian-red text-sm">
                        {result.error}
                      </div>
                    ) : (
                      <div className={`rounded-2xl px-4 py-3 border ${getFeedback(result.score).bg} border-italian-green/20`}>
                        <p className="text-italian-charcoal dark:text-white font-medium">
                          “{result.transcript}”
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-sm font-bold ${getFeedback(result.score).color}`}>
                            {getFeedback(result.score).label}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {result.scorePct}% match
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          A natural reply: <span className="font-semibold text-italian-charcoal dark:text-gray-200">{result.expected}</span>
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-5">
                {!recording && !result && (
                  <div className="flex flex-wrap items-center gap-2">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={startListening}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white font-semibold shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors"
                    >
                      <Mic size={18} />
                      Speak your reply
                    </motion.button>
                    <button
                      onClick={() => setUseTyping((t) => !t)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2E38] transition-colors"
                      title="Type your answer instead"
                    >
                      <Keyboard size={16} />
                      Type instead
                    </button>
                    <button
                      onClick={handleSkip}
                      className="ml-auto flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <SkipForward size={15} />
                      Skip
                    </button>
                  </div>
                )}

                {recording && (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={stopListening}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-red text-white font-semibold shadow-md shadow-italian-red/20 hover:bg-italian-red/90 transition-colors"
                  >
                    <Square size={16} className="fill-white" />
                    Stop
                  </motion.button>
                )}

                {useTyping && !result && (
                  <div className="flex items-center gap-2 mt-3">
                    <input
                      value={typedInput}
                      onChange={(e) => setTypedInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') submitTyped();
                      }}
                      placeholder="Type your reply in Italian…"
                      className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-200 dark:border-[#2E323C] text-sm text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40"
                    />
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={submitTyped}
                      className="px-5 py-3 rounded-xl bg-italian-green text-white text-sm font-semibold"
                    >
                      Check
                    </motion.button>
                  </div>
                )}

                {result && !result.error && (
                  <div className="flex flex-wrap items-center gap-2">
                    {!passed ? (
                      <button
                        onClick={retry}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-gold text-white font-semibold shadow-md shadow-italian-gold/20 hover:bg-italian-gold/90 transition-colors"
                      >
                        <RefreshCw size={16} />
                        Try again
                      </button>
                    ) : (
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white font-semibold shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors"
                      >
                        {turnNumber === totalTurns ? (
                          <>
                            <Trophy size={16} />
                            Finish
                          </>
                        ) : (
                          <>
                            Next
                            <ArrowRight size={16} />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : (
          /* ---- Completion screen ---- */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-italian-green/30 bg-white dark:bg-[#1A1D24] shadow-lg p-8 text-center max-w-md mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-italian-green/10 flex items-center justify-center mx-auto mb-4">
              <Trophy size={30} className="text-italian-gold" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-italian-charcoal dark:text-white mb-1">
              Conversation Complete!
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {scenario.title}
            </p>

            <div className="flex items-center justify-center gap-1 mb-4">
              {[0, 1, 2].map((i) => (
                <Star
                  key={i}
                  size={30}
                  className={
                    i < stars
                      ? 'fill-italian-gold text-italian-gold'
                      : 'text-gray-300 dark:text-gray-600'
                  }
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl bg-italian-green/5 border border-italian-green/20 p-4">
                <p className="font-heading text-2xl font-bold text-italian-green">+{xpEarned} XP</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Earned</p>
              </div>
              <div className="rounded-2xl bg-italian-warm dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] p-4">
                <p className="font-heading text-2xl font-bold text-italian-charcoal dark:text-white">
                  {xpEarned > 40 ? 'Ottimo!' : xpEarned >= 20 ? 'Bravo!' : 'Buono!'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Performance</p>
              </div>
            </div>

            <div className="rounded-2xl bg-italian-warm dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] p-5 mb-6 text-left">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
                Useful expressions
              </p>
              <div className="space-y-2">
                {USEFUL_PHRASES[scenario.id]?.map((p) => (
                  <p key={p} className="text-sm font-medium text-italian-charcoal dark:text-gray-200 italic">
                    “{p}”
                  </p>
                ))}
                {!USEFUL_PHRASES[scenario.id] && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    “Could I have…?”, “How much is…?”, “Would you recommend…?”
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-italian-sage/10 border border-italian-sage/20 p-5 mb-6 text-left">
              <p className="text-xs font-semibold text-italian-sage uppercase tracking-wide mb-2">
                Try to improve
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ask more follow-up questions — it keeps the conversation going and sounds more natural in Italian.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setTurnIdx(0);
                  setResult(null);
                  setPassed(false);
                  setTurnLog([]);
                  setXpEarned(0);
                  setCompleted(false);
                  bestScoreRef.current = {};
                  setShowMission(true);
                }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-italian-green text-white font-semibold shadow-md shadow-italian-green/20 hover:bg-italian-green/90 transition-colors"
              >
                <RotateCcw size={16} />
                Practice again
              </button>
              <Link
                to="/conversation"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#22252E] border border-gray-100 dark:border-[#2E323C] text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#2A2E38] transition-colors"
              >
                Back to scenarios
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}