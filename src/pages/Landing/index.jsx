import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Languages,
  GraduationCap,
  Target,
  ArrowRight,
  ChevronRight,
  Star,
  Heart,
  CheckCircle,
  Clock,
  Trophy,
  Sparkles,
  Globe,
  Users,
  Quote,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ────── Hero ────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-italian-cream via-white to-italian-cream">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-italian-green/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-italian-red/5 blur-3xl" />
        <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-italian-green/30 animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-italian-red/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-italian-gold/30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-16 left-[8%] text-6xl opacity-[0.07] font-heading select-none">Ciao</div>
        <div className="absolute bottom-20 right-[8%] text-5xl opacity-[0.07] font-heading select-none">Benvenuto</div>
        <div className="absolute top-[15%] right-[25%] text-4xl opacity-[0.05] font-heading select-none rotate-12">Grazie</div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-italian-green/10 text-italian-green text-sm font-medium mb-8"
          >
            <Globe size={16} />
            Learn Italian Online — Free
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-italian-charcoal leading-[1.05] tracking-tight"
          >
            Italian, made{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-italian-green via-italian-sage to-italian-green bg-clip-text text-transparent">
                simple.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 left-0 w-full h-3 bg-italian-green/15 rounded-full origin-left -z-0"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Master Italian through interactive lessons, real-world conversations,
            and personalized practice. From <em>buongiorno</em> to fluency — your journey starts here.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-italian-green text-white font-semibold text-lg shadow-xl shadow-italian-green/25 hover:shadow-2xl hover:shadow-italian-green/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Learning
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-italian-charcoal font-semibold text-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              Explore Lessons
              <ChevronRight size={20} />
            </button>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-14 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-italian-green" /> 100% Free</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-italian-green" /> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-italian-green" /> Learn at your pace</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ────── How It Works ────── */
function HowItWorks() {
  const steps = [
    { icon: Target, title: 'Choose your level', desc: 'Tell us where you stand and we tailor everything to you — from complete beginner to advanced.' },
    { icon: BookOpen, title: 'Learn with lessons', desc: 'Dive into bite-sized lessons covering vocabulary, grammar, and real conversation.' },
    { icon: Trophy, title: 'Practice daily', desc: 'Build lasting habits with streaks, quizzes, and daily challenges.' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-italian-green font-semibold text-sm uppercase tracking-widest mb-3">How It Works</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal">Three steps to fluency</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} custom={i} className="relative group">
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-italian-cream/40 hover:bg-italian-cream transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-italian-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <s.icon size={28} className="text-italian-green" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-italian-green text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-italian-charcoal mb-2">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Learning Features ────── */
function LearningFeatures() {
  const features = [
    { icon: BookOpen, title: 'Lessons', desc: 'Structured courses from A1 to C1 with audio, examples, and cultural context.', color: 'from-italian-green/10 to-italian-sage/10', iconColor: 'text-italian-green' },
    { icon: Languages, title: 'Vocabulary', desc: 'Thousands of words organized by topic with spaced repetition for lasting memory.', color: 'from-italian-red/10 to-italian-gold/10', iconColor: 'text-italian-red' },
    { icon: GraduationCap, title: 'Grammar', desc: 'Clear explanations with interactive exercises — tenses, conjugations, and more.', color: 'from-italian-gold/10 to-italian-green/10', iconColor: 'text-italian-gold' },
    { icon: Target, title: 'Practice', desc: 'Real-world scenarios, conversation simulations, and daily challenges.', color: 'from-italian-sage/10 to-italian-green/10', iconColor: 'text-italian-sage' },
  ];

  return (
    <section className="py-24 bg-italian-cream/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-italian-red font-semibold text-sm uppercase tracking-widest mb-3">Features</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal">Everything you need to learn Italian</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                <f.icon size={22} className={f.iconColor} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-italian-charcoal mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Example Lesson Preview ────── */
function ExampleLessonPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p variants={fadeUp} className="text-italian-green font-semibold text-sm uppercase tracking-widest mb-3">Try a Lesson</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal mb-4">
              Learn words that matter
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 leading-relaxed mb-6">
              Every lesson teaches you real Italian you can use immediately. Hear native pronunciations, see examples in context, and practice until it sticks.
            </motion.p>
            <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-8">
              {['Native speaker audio for every word', 'Example sentences in context', 'Track what you know'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-italian-green shrink-0" />
                  {t}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} custom={4}>
              <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-italian-green text-white font-medium shadow-lg shadow-italian-green/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Try Free Lessons <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-br from-italian-green/10 to-italian-red/10 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-italian-red" />
                  <div className="w-3 h-3 rounded-full bg-italian-gold" />
                  <div className="w-3 h-3 rounded-full bg-italian-green" />
                  <span className="ml-auto text-xs text-gray-400 font-medium">Lesson 1</span>
                </div>

                <div className="text-center mb-8">
                  <p className="text-sm text-gray-400 mb-1">Italian</p>
                  <p className="font-heading text-4xl font-bold text-italian-charcoal">Ciao</p>
                  <p className="text-sm text-gray-400 mt-1">/tʃa.o/</p>
                </div>

                <div className="bg-italian-cream/60 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Translation</p>
                  <p className="text-lg font-medium text-italian-charcoal">Hello / Goodbye</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Example</p>
                  <p className="text-italian-charcoal italic">"Ciao, come stai?"</p>
                  <p className="text-sm text-gray-400 mt-1">"Hello, how are you?"</p>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl bg-italian-red/10 text-italian-red font-medium text-sm hover:bg-italian-red/20 transition-colors">
                    Still Learning
                  </button>
                  <button className="flex-1 py-3 rounded-xl bg-italian-green text-white font-medium text-sm shadow-md shadow-italian-green/20 hover:shadow-lg transition-all">
                    Got It!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Vocabulary Preview ────── */
function VocabularyPreview() {
  const words = [
    { it: 'Buongiorno', en: 'Good morning', emoji: '🌅' },
    { it: 'Grazie', en: 'Thank you', emoji: '🙏' },
    { it: 'Prego', en: "You're welcome", emoji: '😊' },
    { it: 'Famiglia', en: 'Family', emoji: '👨‍👩‍👧' },
    { it: 'Acqua', en: 'Water', emoji: '💧' },
    { it: 'Amore', en: 'Love', emoji: '❤️' },
  ];

  return (
    <section className="py-24 bg-italian-cream/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-italian-gold font-semibold text-sm uppercase tracking-widest mb-3">Vocabulary</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal">
            Words you'll use every day
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {words.map((w, i) => (
            <motion.div
              key={w.it}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-2 block">{w.emoji}</span>
              <p className="font-heading text-lg font-semibold text-italian-charcoal">{w.it}</p>
              <p className="text-sm text-gray-400 mt-1">{w.en}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Progress Tracking ────── */
function ProgressTracking() {
  const stats = [
    { label: 'Lessons Completed', value: '24', icon: BookOpen },
    { label: 'Words Learned', value: '312', icon: Languages },
    { label: 'Day Streak', value: '18', icon: Clock },
    { label: 'Accuracy', value: '92%', icon: Target },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-heading font-semibold text-italian-charcoal">Your Progress</h4>
                <span className="text-xs text-italian-green bg-italian-green/10 px-3 py-1 rounded-full font-medium">This Week</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((s) => (
                  <div key={s.label} className="bg-italian-cream/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <s.icon size={16} className="text-italian-green" />
                      <span className="text-xs text-gray-400">{s.label}</span>
                    </div>
                    <p className="font-heading text-2xl font-bold text-italian-charcoal">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-italian-cream/40 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Weekly Goal</span>
                  <span className="text-italian-green font-medium">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-italian-green to-italian-sage rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-italian-sage font-semibold text-sm uppercase tracking-widest mb-3">Progress Tracking</motion.p>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal mb-4">
              Watch yourself improve
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-500 leading-relaxed mb-6">
              Track your daily streaks, vocabulary growth, and lesson completion. Visualize your journey from beginner to fluent speaker with detailed progress insights.
            </motion.p>
            <motion.ul variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {['Daily streaks to keep you motivated', 'Vocabulary retention stats', 'Lesson completion tracking'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-italian-green shrink-0" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Testimonials ────── */
function Testimonials() {
  const testimonials = [
    { name: 'Sarah M.', role: 'Travel Enthusiast', quote: "I learned enough Italian in 3 months to navigate Rome confidently. The bite-sized lessons fit perfectly into my commute.", stars: 5 },
    { name: 'David K.', role: 'Software Engineer', quote: "The grammar explanations finally made Italian click for me. I tried other apps before — this one actually teaches you the language.", stars: 5 },
    { name: 'Lucia B.', role: 'Italian Heritage', quote: "I wanted to reconnect with my grandparents' language. The cultural context in each lesson makes it so much more meaningful.", stars: 5 },
  ];

  return (
    <section className="py-24 bg-italian-cream/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-italian-red font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-italian-charcoal">
            Loved by learners worldwide
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote size={28} className="text-italian-green/20 mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-italian-green to-italian-sage flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-italian-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} className="text-italian-gold fill-italian-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────── CTA ────── */
function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-italian-dark via-italian-dark-card to-italian-dark p-12 sm:p-16 text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-italian-green/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-italian-red/10 blur-3xl" />
          </div>
          <div className="relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-italian-gold text-sm font-medium mb-4">
              <Sparkles size={16} />
              Start your journey
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Start learning Italian today
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Join thousands of learners mastering Italian with structured lessons and daily practice.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-italian-green text-white font-semibold text-lg shadow-xl shadow-italian-green/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started Free <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────── Footer ────── */
function Footer() {
  const links = {
    Learn: ['Lessons', 'Vocabulary', 'Grammar', 'Practice'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
  };

  return (
    <footer className="bg-italian-dark text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-italian-green to-italian-sage flex items-center justify-center">
                <Languages size={18} className="text-white" />
              </div>
              <span className="font-heading text-lg font-bold text-white">Italiano</span>
            </div>
            <p className="text-sm leading-relaxed">
              A beautiful way to learn Italian. Free, structured, and designed for real progress.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm hover:text-white transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Italiano. All rights reserved.</p>
          <p className="text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-italian-red fill-italian-red" /> for Italy
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ────── Landing Page ────── */
export default function Landing() {
  return (
    <div className="bg-white">
      <Hero />
      <HowItWorks />
      <LearningFeatures />
      <ExampleLessonPreview />
      <VocabularyPreview />
      <ProgressTracking />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
