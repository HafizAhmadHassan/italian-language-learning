const STORAGE_KEY = 'italiano_auth';

const auth = {
  signup(name, email, password) {
    const users = JSON.parse(localStorage.getItem('italiano_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    const user = { id: Date.now().toString(), name, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    localStorage.setItem('italiano_users', JSON.stringify(users));
    const session = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return { success: true, user: session };
  },

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('italiano_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, error: 'Invalid email or password.' };
    }
    const session = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return { success: true, user: session };
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated() {
    return !!this.getCurrentUser();
  },

  updateProfile(updates) {
    const user = this.getCurrentUser();
    if (!user) return false;
    const updated = { ...user, ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    const users = JSON.parse(localStorage.getItem('italiano_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...updates };
      localStorage.setItem('italiano_users', JSON.stringify(users));
    }
    return true;
  }
};

export default auth;
