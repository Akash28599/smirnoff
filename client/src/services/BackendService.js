const API_BASE = 'http://localhost:3001/api';

const BackendService = {
  validateCode: async (code, phone) => {
    try {
      const res = await fetch(`${API_BASE}/validate-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, phone })
      });
      return await res.json();
    } catch (err) {
      return { success: false, message: 'Server unreachable. Please try again.' };
    }
  },
  getUser: async (phone) => {
    try {
      const res = await fetch(`${API_BASE}/user/${phone}`);
      return await res.json();
    } catch (err) {
      return null;
    }
  },
  submitTalent: async (data) => {
    try {
      const res = await fetch(`${API_BASE}/talent/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      return { success: false, message: 'Submission failed.' };
    }
  },
  getTalents: async (category) => {
    try {
      const url = category ? `${API_BASE}/talent?category=${category}` : `${API_BASE}/talent`;
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      return [];
    }
  },
  voteTalent: async (id) => {
    try {
      const res = await fetch(`${API_BASE}/talent/${id}/vote`, { method: 'POST' });
      return await res.json();
    } catch (err) {
      return { success: false };
    }
  },
  getLeaderboard: async () => {
    try {
      const res = await fetch(`${API_BASE}/talent/leaderboard`);
      return await res.json();
    } catch (err) {
      return [];
    }
  },
  spinWheel: async (phone) => {
    try {
      const res = await fetch(`${API_BASE}/games/spin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      return await res.json();
    } catch (err) {
      return { success: false, message: 'Spin failed.' };
    }
  }
};

export default BackendService;
