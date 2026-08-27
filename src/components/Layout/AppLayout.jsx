import { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  BookOpen,
  MessageSquare,
  BarChart3,
  Settings,
  Trophy,
  GraduationCap,
  Mic,
  LogOut,
  User,
  Sun,
  Moon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import auth from '../../services/auth';
import storage from '../../services/storage';

const desktopNavItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/learn', label: 'Learn', icon: GraduationCap },
  { to: '/vocabulary', label: 'Vocabulary', icon: BookOpen },
  { to: '/grammar', label: 'Grammar', icon: MessageSquare },
  { to: '/practice', label: 'Practice', icon: Mic },
  { to: '/progress', label: 'Progress', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
];

const mobileNavItems = [
  { to: '/dashboard', label: 'Home', icon: Home },
  { to: '/learn', label: 'Learn', icon: GraduationCap },
  { to: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { to: '/grammar', label: 'Grammar', icon: MessageSquare },
  { to: '/practice', label: 'Practice', icon: Mic },
  { to: '/progress', label: 'Progress', icon: BarChart3 },
  { to: '/settings', label: 'Profile', icon: User },
];

export default function AppLayout() {
  const navigate = useNavigate();
  const user = auth.getCurrentUser();
  const [dark, setDark] = useState(() => storage.get('darkMode', false));

  useEffect(() => {
    const handler = () => setDark(storage.get('darkMode', false));
    window.addEventListener('storage', handler);
    window.addEventListener('darkmode-change', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('darkmode-change', handler);
    };
  }, []);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    storage.set('darkMode', next);
    document.documentElement.classList.toggle('dark', next);
    window.dispatchEvent(new Event('darkmode-change'));
  };

  const getNavClass = ({ isActive }) => {
    if (isActive) {
      return dark
        ? 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 bg-green-500/20 text-green-500'
        : 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 bg-green-500/10 text-italian-green';
    }
    return dark
      ? 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-[#22252E] text-gray-400 text-gray-200'
      : 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-italian-sage/10 text-gray-500 text-italian-charcoal';
  };

  const getMobileNavClass = ({ isActive }) => {
    if (isActive) {
      return 'flex flex-col items-center gap-0.5 py-2 px-1.5 text-[9px] font-medium transition-colors text-italian-green min-w-0';
    }
    return dark
      ? 'flex flex-col items-center gap-0.5 py-2 px-1.5 text-[9px] font-medium transition-colors text-gray-400 min-w-0'
      : 'flex flex-col items-center gap-0.5 py-2 px-1.5 text-[9px] font-medium transition-colors text-gray-500 min-w-0';
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: dark ? '#111318' : '#FEFCF8' }}>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex flex-col w-[260px] shrink-0 border-r transition-colors"
        style={{
          backgroundColor: dark ? '#1A1D24' : 'rgba(255,248,240,0.6)',
          borderColor: dark ? '#2E323C' : 'rgba(124,182,157,0.2)',
        }}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-italian-green flex items-center justify-center text-white font-heading font-bold text-sm">
              IT
            </div>
            <span className="font-heading font-semibold text-lg" style={{ color: dark ? '#E5E5E5' : '#2D2D2D' }}>
              Parla Italiano
            </span>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            style={{
              backgroundColor: dark ? '#22252E' : 'rgba(124,182,157,0.1)',
              color: dark ? '#FBBF24' : '#6B7280',
            }}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {desktopNavItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={getNavClass}>
              {({ isActive }) => (
                <>
                  <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div
          className="px-4 py-4 border-t"
          style={{ borderColor: dark ? '#2E323C' : 'rgba(124,182,157,0.2)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-italian-green/15 flex items-center justify-center text-italian-green font-semibold text-sm">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: dark ? '#E5E5E5' : '#2D2D2D' }}>
                {user?.name || 'User'}
              </p>
              <p className="text-xs truncate" style={{ color: dark ? '#9CA3AF' : '#6B7280' }}>
                {user?.email || ''}
              </p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:text-italian-red"
            style={{
              color: dark ? '#9CA3AF' : '#6B7280',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = dark ? '#22252E' : 'rgba(124,182,157,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <LogOut size={17} />
            Log Out
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ backgroundColor: dark ? '#111318' : '#FEFCF8' }}
      >
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-around border-t backdrop-blur-lg"
        style={{
          backgroundColor: dark ? '#1A1D24' : '#FFFFFF',
          borderColor: dark ? '#2E323C' : '#E5E7EB',
        }}
      >
        {mobileNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={getMobileNavClass}>
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Dark Mode Toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleDark}
        className="md:hidden fixed bottom-20 right-4 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: dark ? '#22252E' : '#FFFFFF',
          color: dark ? '#FBBF24' : '#6B7280',
          boxShadow: dark ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
}
