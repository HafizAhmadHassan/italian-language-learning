import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/Layout/AppLayout';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import Vocabulary from './pages/Vocabulary';
import Flashcards from './pages/Vocabulary/Flashcards';
import Grammar from './pages/Grammar';
import PresenteLesson from './pages/Grammar/Presente';
import PassatoLesson from './pages/Grammar/Passato';
import ImperfettoLesson from './pages/Grammar/Imperfetto';
import FuturoLesson from './pages/Grammar/Futuro';
import PreposizioniLesson from './pages/Grammar/Preposizioni';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import storage from './services/storage';
import auth from './services/auth';

function PublicRoute({ children }) {
  if (auth.isAuthenticated()) {
    const onboarding = storage.get('onboarding');
    if (!onboarding) {
      return <Navigate to="/onboarding" replace />;
    }
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

function App() {
  useEffect(() => {
    const darkMode = storage.get('darkMode');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <BrowserRouter basename="/italian-language-learning">
      <Routes>
        <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/grammar/presente" element={<PresenteLesson />} />
          <Route path="/grammar/passato" element={<PassatoLesson />} />
          <Route path="/grammar/imperfetto" element={<ImperfettoLesson />} />
          <Route path="/grammar/futuro" element={<FuturoLesson />} />
          <Route path="/grammar/preposizioni" element={<PreposizioniLesson />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
