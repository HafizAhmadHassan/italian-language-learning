import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Globe, BookOpen, Target, Clock, Palette, Volume2, Trash2, LogOut, Save, AlertTriangle } from 'lucide-react';
import auth from '../../services/auth';
import progress from '../../services/progress';
import storage from '../../services/storage';
import Modal from '../../components/UI/Modal';

const LANGUAGES = [
  { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' }, { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' }, { code: 'pt', name: 'Portuguese' }, { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' }, { code: 'ko', name: 'Korean' }, { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' }, { code: 'nl', name: 'Dutch' }, { code: 'pl', name: 'Polish' },
  { code: 'ru', name: 'Russian' }, { code: 'tr', name: 'Turkish' }, { code: 'ro', name: 'Romanian' },
  { code: 'uk', name: 'Ukrainian' },
];

const LEVELS = [
  { value: 'beginner', label: 'Complete Beginner' },
  { value: 'A1', label: 'A1 — Beginner' },
  { value: 'A2', label: 'A2 — Elementary' },
  { value: 'B1', label: 'B1 — Intermediate' },
  { value: 'B2', label: 'B2 — Upper Intermediate' },
  { value: 'C1', label: 'C1 — Advanced' },
];

const GOALS = ['Travel', 'Conversation', 'Work', 'School', 'Living in Italy', 'Citizenship', 'Personal Interest', 'Italian Culture'];
const DAILY_GOALS = [5, 10, 15, 20, 30];

export default function Settings() {
  const navigate = useNavigate();
  const user = auth.getCurrentUser();
  const onboarding = storage.get('onboarding') || {};

  const [name, setName] = useState(user?.name || '');
  const [nativeLang, setNativeLang] = useState(onboarding.nativeLanguage || 'en');
  const [level, setLevel] = useState(onboarding.level || 'beginner');
  const [goals, setGoals] = useState(onboarding.goals || []);
  const [dailyGoal, setDailyGoal] = useState(onboarding.dailyGoal || 10);
  const [darkMode, setDarkMode] = useState(storage.get('darkMode') || false);
  const [soundEnabled, setSoundEnabled] = useState(storage.get('soundEnabled') !== false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSave = () => {
    auth.updateProfile({ name });
    storage.set('onboarding', { ...onboarding, nativeLanguage: nativeLang, level, goals, dailyGoal });
    storage.set('darkMode', darkMode);
    storage.set('soundEnabled', soundEnabled);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    progress.resetProgress();
    storage.remove('onboarding');
    storage.remove('darkMode');
    storage.remove('soundEnabled');
    setShowResetModal(false);
    navigate('/');
  };

  const handleLogout = () => {
    auth.logout();
    setShowLogoutModal(false);
    navigate('/');
  };

  const toggleGoal = (goal) => {
    setGoals(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
  };

  const initial = (user?.name || 'U')[0].toUpperCase();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-italian-charcoal dark:text-white mb-2 font-heading">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Manage your account and preferences</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-italian-green flex items-center justify-center text-white text-2xl font-bold">{initial}</div>
          <div>
            <p className="font-bold text-italian-charcoal dark:text-white text-lg">{user?.name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{user?.email}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"><User size={14} className="inline mr-1" /> Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border-2 border-gray-200 dark:border-italian-dark-border rounded-xl focus:border-italian-green outline-none transition-colors bg-transparent dark:text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"><Globe size={14} className="inline mr-1" /> Native Language</label>
            <select value={nativeLang} onChange={(e) => setNativeLang(e.target.value)} className="w-full p-3 border-2 border-gray-200 dark:border-italian-dark-border rounded-xl focus:border-italian-green outline-none transition-colors bg-transparent dark:text-white">
              {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"><BookOpen size={14} className="inline mr-1" /> Italian Level</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full p-3 border-2 border-gray-200 dark:border-italian-dark-border rounded-xl focus:border-italian-green outline-none transition-colors bg-transparent dark:text-white">
              {LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"><Target size={14} className="inline mr-1" /> Learning Goals</label>
            <div className="flex flex-wrap gap-2">
              {GOALS.map(goal => (
                <button key={goal} onClick={() => toggleGoal(goal)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${goals.includes(goal) ? 'bg-italian-green text-white' : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'}`}>
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"><Clock size={14} className="inline mr-1" /> Daily Goal</label>
            <div className="flex gap-2">
              {DAILY_GOALS.map(min => (
                <button key={min} onClick={() => setDailyGoal(min)} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${dailyGoal === min ? 'bg-italian-green text-white' : 'bg-gray-100 dark:bg-italian-dark-surface text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-italian-dark-border'}`}>
                  {min}m
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-italian-dark-surface rounded-xl">
            <div className="flex items-center gap-2">
              <Palette size={16} className="text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${darkMode ? 'bg-italian-green' : 'bg-gray-300 dark:bg-gray-600'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow ${darkMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-italian-dark-surface rounded-xl">
            <div className="flex items-center gap-2">
              <Volume2 size={16} className="text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Sound Effects</span>
            </div>
            <button onClick={() => setSoundEnabled(!soundEnabled)} className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${soundEnabled ? 'bg-italian-green' : 'bg-gray-300 dark:bg-gray-600'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow ${soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>

        <button onClick={handleSave} className="mt-6 w-full py-3 bg-italian-green text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
          {saved ? '✓ Saved!' : <><Save size={18} /> Save Changes</>}
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-italian-dark-card rounded-2xl p-6 border border-gray-100 dark:border-italian-dark-border shadow-sm">
        <h2 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>
        <div className="space-y-3">
          <button onClick={() => setShowResetModal(true)} className="w-full py-3 px-4 border-2 border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 rounded-xl font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2 cursor-pointer">
            <Trash2 size={18} /> Reset All Progress
          </button>
          <button onClick={() => setShowLogoutModal(true)} className="w-full py-3 px-4 border-2 border-gray-200 dark:border-italian-dark-border text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-italian-dark-surface transition-colors flex items-center gap-2 cursor-pointer">
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </motion.div>

      <Modal isOpen={showResetModal} onClose={() => setShowResetModal(false)} title="Reset All Progress">
        <div className="text-center">
          <AlertTriangle size={48} className="text-italian-red mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 mb-6">This will permanently delete all your learning progress, vocabulary, scores, and streaks. This cannot be undone.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setShowResetModal(false)} className="px-6 py-2.5 bg-gray-100 dark:bg-italian-dark-surface text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 transition-colors cursor-pointer">Cancel</button>
            <button onClick={handleReset} className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors cursor-pointer">Reset Everything</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} title="Log Out">
        <div className="text-center">
          <LogOut size={48} className="text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 mb-6">Are you sure you want to log out? Your progress is saved locally and will be here when you log back in.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setShowLogoutModal(false)} className="px-6 py-2.5 bg-gray-100 dark:bg-italian-dark-surface text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 transition-colors cursor-pointer">Cancel</button>
            <button onClick={handleLogout} className="px-6 py-2.5 bg-italian-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors cursor-pointer">Log Out</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
