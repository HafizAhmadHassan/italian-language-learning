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

  const sidebarBg = dark ? 'bg-italian-dark-card' : 'bg-italian-cream/60';
  const sidebarBorder = dark ? 'border-italian-dark-border' : 'border-italian-sage/20';
  const textColor = dark ? 'text-gray-200' : 'text-italian-charcoal';
  const textMuted = dark ? 'text-gray-400' : 'text-gray-500';
  const hoverBg = dark ? 'hover:bg-italian-dark-surface' : 'hover:bg-italian-sage/10';
  const activeBg = dark ? 'bg-italian-green/20 text-italian-green' : 'bg-italian-green/10 text-italian-green';
  const bottomBarBg = dark ? 'bg-italian-dark-card border-italian-dark-border' : 'bg-white border-gray-200';

  return (
    <div className={`flex h-screen overflow-hidden ${dark ? 'bg-[#111318]' : 'bg-italian-light'}`}>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col w-[260px] shrink-0 ${sidebarBg} border-r ${sidebarBorder} transition-colors`}
      >
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="w-9 h-9 rounded-xl bg-italian-green flex items-center justify-center text-white font-heading font-bold text-sm">
            IT
          </div>
          <span className={`font-heading font-semibold text-lg ${textColor}`}>
            Parla Italiano
          </span>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {desktopNavItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${hoverBg} ${
                  isActive ? activeBg : textMuted + ' ' + textColor
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={`px-4 py-4 border-t ${sidebarBorder}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-italian-green/15 flex items-center justify-center text-italian-green font-semibold text-sm">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${textColor}`}>{user?.name || 'User'}</p>
              <p className={`text-xs truncate ${textMuted}`}>{user?.email || ''}</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className={`flex items-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-medium ${hoverBg} ${textMuted} hover:text-italian-red transition-colors`}
          >
            <LogOut size={17} />
            Log Out
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto ${dark ? 'bg-[#111318]' : 'bg-italian-light'}`}>
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav
        className={`md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-around border-t ${bottomBarBg} backdrop-blur-lg`}
      >
        {mobileNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-2 px-3 text-[10px] font-medium transition-colors ${
                isActive ? 'text-italian-green' : textMuted
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={22} strokeWidth={isActive ? 2.2 : 1.6} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
