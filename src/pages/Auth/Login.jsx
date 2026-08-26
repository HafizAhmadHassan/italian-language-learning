import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Languages, Eye, EyeOff, AlertCircle } from 'lucide-react';
import auth from '../../services/auth';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const quotes = [
  { text: '"La vita è troppo breve per essere piccola."', translation: 'Life is too short to be small.' },
  { text: '"Chi dorme non piglia pesci."', translation: 'The early bird catches the worm.' },
  { text: '"L\'appetito vien mangiando."', translation: 'Appetite comes with eating.' },
];

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.password) {
      errs.password = 'Password is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      const result = auth.login(form.email.trim(), form.password);
      setLoading(false);

      if (!result.success) {
        setServerError(result.error);
        return;
      }

      const onboarding = localStorage.getItem('italiano_onboarding');
      if (onboarding) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    }, 600);
  };

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }));
    if (serverError) setServerError('');
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#111318]">
      {/* Decorative side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-italian-dark via-italian-dark-card to-italian-dark items-center justify-center p-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,146,70,0.12),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(206,43,55,0.1),transparent_50%)]" />
          <div className="absolute top-[15%] right-[10%] text-7xl opacity-[0.06] font-heading text-white select-none rotate-12">Buongiorno</div>
          <div className="absolute bottom-[20%] left-[10%] text-6xl opacity-[0.06] font-heading text-white select-none -rotate-6">Benvenuto</div>
        </div>

        <div className="relative z-10 max-w-md">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-italian-green to-italian-sage flex items-center justify-center">
                <Languages size={24} className="text-white" />
              </div>
              <span className="font-heading text-2xl font-bold text-white">Italiano</span>
            </motion.div>

            <div className="space-y-8">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="border-l-2 border-italian-green/40 pl-6"
                >
                  <p className="text-white/80 text-lg font-heading italic leading-relaxed">{q.text}</p>
                  <p className="text-white/40 text-sm mt-1">{q.translation}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Form side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full max-w-md"
        >
          <motion.div variants={fadeUp} className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-italian-green to-italian-sage flex items-center justify-center">
              <Languages size={20} className="text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-italian-charcoal dark:text-white">Italiano</span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="font-heading text-3xl font-bold text-italian-charcoal dark:text-white mb-2">
              Welcome back
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Sign in to continue your Italian learning journey.
            </p>
          </motion.div>

          {serverError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex items-center gap-2 p-3 rounded-xl bg-italian-red/10 text-italian-red text-sm mb-6"
            >
              <AlertCircle size={16} className="shrink-0" />
              {serverError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium text-italian-charcoal dark:text-gray-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="you@example.com"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-gray-50 dark:bg-italian-dark-card text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40 focus:border-italian-green transition-all text-sm ${
                    errors.email ? 'border-italian-red' : 'border-gray-200 dark:border-italian-dark-border'
                  }`}
                />
              </div>
              {errors.email && <p className="text-italian-red text-xs mt-1">{errors.email}</p>}
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium text-italian-charcoal dark:text-gray-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange('password')}
                  placeholder="Enter your password"
                  className={`w-full pl-11 pr-12 py-3 rounded-xl border bg-gray-50 dark:bg-italian-dark-card text-italian-charcoal dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-italian-green/40 focus:border-italian-green transition-all text-sm ${
                    errors.password ? 'border-italian-red' : 'border-gray-200 dark:border-italian-dark-border'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-italian-red text-xs mt-1">{errors.password}</p>}
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-italian-green text-white font-semibold shadow-lg shadow-italian-green/20 hover:shadow-xl hover:bg-italian-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Log In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </motion.div>
          </form>

          <motion.p variants={fadeUp} className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-italian-green font-medium hover:underline">
              Sign up
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
