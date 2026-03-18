import './index.css';

// Import images via Vite
import logoImg from './assets/logo.png';
import heroLineupImg from './assets/hero-lineup.png';
import iconBuyImg from './assets/icon-buy.png';
import iconEnterImg from './assets/icon-enter.png';
import iconPointsImg from './assets/icon-points.png';
import iconRewardsImg from './assets/icon-rewards.png';
import crownCorkImg from './assets/crown-cork.png';
import eventPartyImg from './assets/event-party.png';
import eventFestivalImg from './assets/event-festival.png';
import eventPopupImg from './assets/event-popup.png';
import talentDjImg from './assets/talent-dj.png';
import talentDanceImg from './assets/talent-dance.png';
import talentHypemanImg from './assets/talent-hypeman.png';
import talentProducerImg from './assets/talent-producer.png';
import gamesSpinnerImg from './assets/games-spinner.png';
import smirnoffBottleImg from './assets/smirnoff-bottle.png';
import smirnoffCansImg from './assets/smirnoff-cans.png';
import smirnoffPopImg from './assets/smirnoff-pop.png';
import singleCanImg from './assets/Can.png';
import canBgImg from './assets/can_bg.png';
import canTableImg from './assets/can_table.png';
import chillGameBgImg from './assets/chill_game.png';
import landingNewImg from './assets/landing_new.png';
import eventPageBgImg from './assets/Event_page.png';
import talentBgImg from './assets/talent_bg.png';

// ==============================
// BACKEND SERVICE
// ==============================
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

// ==============================
// ASSETS MAP
// ==============================
const assets = {
  logo: logoImg,
  heroLineup: heroLineupImg,
  iconBuy: iconBuyImg,
  iconEnter: iconEnterImg,
  iconPoints: iconPointsImg,
  iconRewards: iconRewardsImg,
  crownCork: crownCorkImg,
  eventParty: eventPartyImg,
  eventFestival: eventFestivalImg,
  eventPopup: eventPopupImg,
  talentDj: talentDjImg,
  talentDance: talentDanceImg,
  talentHypeman: talentHypemanImg,
  talentProducer: talentProducerImg,
  gamesSpinner: gamesSpinnerImg,
  smirnoffBottle: smirnoffBottleImg,
  smirnoffCans: smirnoffCansImg,
  smirnoffPop: smirnoffPopImg,
  singleCan: singleCanImg,
  canBg: canBgImg,
  canTable: canTableImg,
  chillGameBg: chillGameBgImg,
  landingNew: landingNewImg,
  eventPageBg: eventPageBgImg,
  talentBg: talentBgImg
};

// ==============================
// STATE MANAGEMENT
// ==============================
const state = {
  currentPage: 'home',
  previousPage: null,
  user: {
    phone: '08012345678',
    name: 'Chill Fam',
    points: 1250,
    icePass: 'Active',
    history: [
      { type: 'code', label: 'Code: CHILL2024', points: 50, date: '2026-03-15' },
      { type: 'game', label: 'Spin Wheel Win', points: 10, date: '2026-03-14' },
      { type: 'code', label: 'Code: ICEPASS', points: 100, date: '2026-03-12' },
      { type: 'redeem', label: 'VIP Pass Redeemed', points: -500, date: '2026-03-10' },
      { type: 'code', label: 'Code: SUMMER26', points: 50, date: '2026-03-08' },
    ]
  },
  talentFilter: 'all',
  eventsData: [
    { id: 1, title: 'AMVCA After-Party', date: 'April 5, 2026', venue: 'Eko Hotel, Lagos', desc: 'The biggest party after the AMVCA awards. Smirnoff Ice exclusive.', icePass: true, img: 'eventParty' },
    { id: 2, title: 'Smirnoff Ice Party – Coming Soon', date: 'April 20, 2026', venue: 'Hard Rock Café, Lagos', desc: 'A premium night of vibes, music, and unlimited chill. IcePass holders get VIP entry.', icePass: true, img: 'eventFestival' },
    { id: 3, title: 'Group Therapy Sessions', date: 'May 1, 2026', venue: 'The Chill Zone, Victoria Island', desc: 'Good vibes only. Talk, laugh, chill with Smirnoff Ice.', icePass: false, img: 'eventPopup' },
    { id: 4, title: 'Chill Talent Academy Showcase', date: 'May 15, 2026', venue: 'Terra Kulture, Lagos', desc: 'Watch the top talents from the Chill Talent Academy compete live.', icePass: false, img: 'eventParty' },
    { id: 5, title: 'South Social Club', date: 'June 1, 2026', venue: 'Muri Okunola Park, Lagos', desc: 'An outdoor chill fest with live DJs, food, and Smirnoff Ice.', icePass: false, img: 'eventFestival' },
    { id: 6, title: 'Chill Buddies Meet & Greet', date: 'June 10, 2026', venue: 'Landmark Beach, Lagos', desc: 'A special hangout for loyal Smirnoff Ice fans. Free entry with IcePass.', icePass: true, img: 'eventPopup' }
  ],
  mockTalents: [
    { id: 1, name: 'DJ Chill-X', category: 'dj', votes: 342, img: 'talentDj' },
    { id: 2, name: 'Vibes Queen', category: 'dance', votes: 287, img: 'talentDance' },
    { id: 3, name: 'MC IceCold', category: 'hypeman', votes: 198, img: 'talentHypeman' },
    { id: 4, name: 'BeatSmith', category: 'producer', votes: 156, img: 'talentProducer' },
    { id: 5, name: 'Spinmaster K', category: 'dj', votes: 312, img: 'talentDj' },
    { id: 6, name: 'FlexGod', category: 'dance', votes: 245, img: 'talentDance' },
    { id: 7, name: 'Hype King', category: 'hypeman', votes: 178, img: 'talentHypeman' },
    { id: 8, name: 'Afro Genius', category: 'producer', votes: 134, img: 'talentProducer' }
  ]
};

// ==============================
// ROUTER & RENDERING
// ==============================
const navigateTo = (pageId) => {
  state.previousPage = state.currentPage;
  state.currentPage = pageId;
  renderApp();
};

const renderApp = () => {
  const app = document.querySelector('#app');
  document.body.classList.remove('dark-mode');

  app.innerHTML = `
    ${renderHeader()}
    <main id="content">
      ${getPageContent(state.currentPage)}
    </main>
    ${renderFooter()}
  `;

  attachListeners();
  window.scrollTo(0, 0);

  if (state.currentPage === 'spin-game') {
    setTimeout(drawWheel, 100);
  }
};

// ==============================
// HEADER
// ==============================
const renderHeader = () => `
  <header class="site-header">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
      <div>
        <a href="#" data-link="home" class="smirnoff-badge">SMIRNOFF</a>
      </div>
      <button id="theme-toggle" class="theme-toggle-btn" title="Toggle Theme">🌙</button>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
      <nav>
        <ul class="nav-links" id="nav-links">
          <li><a href="#" data-link="home" class="${state.currentPage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="#" data-link="events" class="${['events','event-detail'].includes(state.currentPage) ? 'active' : ''}">Events</a></li>
          <li><a href="#" data-link="talent" class="${['talent','gallery','leaderboard'].includes(state.currentPage) ? 'active' : ''}">Talent Academy</a></li>
          <li><a href="#" data-link="games" class="${['games','spin-game'].includes(state.currentPage) ? 'active' : ''}">Chill Games</a></li>
          <li><a href="#" data-link="shop" class="${state.currentPage === 'shop' ? 'active' : ''}">Shop</a></li>
          <li><a href="#" data-link="code" class="${state.currentPage === 'code' ? 'active' : ''}">Enter Code</a></li>
          <li><button class="user-nav-btn" data-link="user">👤 ${state.user.points} pts</button></li>
        </ul>
      </nav>
    </div>
  </header>
`;

// ==============================
// FOOTER
// ==============================
const renderFooter = () => `
  <footer class="site-footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="footer-how-it-works">
        <div class="footer-step" data-link="shop">
          <div class="footer-step-num">1</div>
          <span class="footer-step-text">Buy Smirnoff Ice</span>
        </div>
        <div class="footer-step-divider"></div>
        <div class="footer-step-divider-mobile"></div>
        <div class="footer-step" data-link="code">
          <div class="footer-step-num">2</div>
          <span class="footer-step-text">Enter Code</span>
        </div>
        <div class="footer-step-divider"></div>
        <div class="footer-step-divider-mobile"></div>
        <div class="footer-step" data-link="games">
          <div class="footer-step-num">3</div>
          <span class="footer-step-text">Earn Points</span>
        </div>
        <div class="footer-step-divider"></div>
        <div class="footer-step-divider-mobile"></div>
        <div class="footer-step" data-link="rewards">
          <div class="footer-step-num">4</div>
          <span class="footer-step-text">Win Rewards</span>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-links-col">
          <h4>Explore</h4>
          <a href="#" data-link="events">Events</a>
          <a href="#" data-link="talent">Talent Academy</a>
          <a href="#" data-link="games">Chill Games</a>
        </div>
        <div class="footer-links-col">
          <h4>Account</h4>
          <a href="#" data-link="code">Enter Code</a>
          <a href="#" data-link="user">My Profile</a>
          <a href="#" data-link="rewards">Rewards</a>
        </div>
        <div class="footer-links-col">
          <h4>Shop</h4>
          <a href="https://www.jumia.com.ng" target="_blank">Jumia</a>
          <a href="https://www.konga.com" target="_blank">Konga</a>
        </div>
      </div>

      <div class="footer-bottom">
        <img src="${assets.logo}" alt="Smirnoff Ice" class="footer-logo">
        <p>© 2026 Smirnoff Ice Nigeria. Drink Responsibly. Must be 18+.</p>
      </div>
    </div>
  </footer>
`;

// ==============================
// PAGE ROUTER
// ==============================
const getPageContent = (pageId) => {
  switch (pageId) {
    case 'home': return renderHome();
    case 'code': return renderCodeEntry();
    case 'events': return renderEvents();
    case 'event-detail': return renderEventDetail();
    case 'talent': return renderTalent();
    case 'gallery': return renderGallery();
    case 'leaderboard': return renderLeaderboard();
    case 'games': return renderGames();
    case 'spin-game': return renderSpinGame();
    case 'shop': return renderShop();
    case 'user': return renderUserProfile();
    case 'rewards': return renderRewards();
    default: return renderHome();
  }
};

// ==============================
// HOME PAGE
// ==============================
const renderHome = () => `
  <section class="animate-fade-in w-full relative bg-white flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-36 overflow-hidden">
    <div class="z-10 mb-2 sm:mb-4 px-4">
      <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black tracking-tight text-gray-900 mb-2 sm:mb-3 leading-none">
        POP. <span class="text-smirnoff-red">ENTER.</span> CHILL.
      </h1>
      <p class="text-sm sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-8 font-medium">
        Pop it. Play it. Show up. Win big.
      </p>
      <button class="btn text-xs sm:text-base py-3 sm:py-4 px-6 sm:px-10" data-link="code">
        POP A CAN… WIN A POINT
      </button>
    </div>
    <div class="w-full relative mt-4 sm:mt-0">
      <img src="${assets.landingNew}" alt="Smirnoff Ice Bottles" class="w-full h-auto block object-contain">
    </div>
  </section>
`;

// ==============================
// ENTER CODE PAGE
// ==============================
const renderCodeEntry = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center pt-28 sm:pt-32 pb-20 min-h-screen">
    <div class="relative flex items-center justify-center order-first md:order-none">
      <div class="absolute bg-smirnoff-red -skew-x-12 z-[-1] opacity-80 rounded-xl" style="top:-1.875rem;left:-1.25rem;height:23.75rem;width:12.5rem;"></div>
      <img src="${assets.smirnoffPop}" class="w-full max-w-md rounded-2xl animate-float" alt="Pop & Win" style="box-shadow: 0 1.875rem 3.75rem rgba(0,0,0,0.12);">
    </div>
    <div class="flex flex-col gap-5">
      <p class="section-label">POP. ENTER. CHILL.</p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl leading-tight">ENTER YOUR<br>CHILL CODE</h1>
      <p class="text-gray-500 text-sm sm:text-base">Got a code under your cap? Let's see what the chill brings.</p>
      <input type="text" id="code-input" class="code-input" placeholder="ENTER CODE HERE" maxlength="12">
      <button id="submit-code" class="btn btn-black w-full text-base">UNLOCK MY CHILL</button>
      <div id="code-feedback" class="text-center"></div>
      <p class="text-xs text-gray-400 text-center mt-2">
        📖 <a href="#" class="text-smirnoff-red font-semibold no-underline">How to find your code</a> — Look under the crown cork or label.
      </p>
      <div class="mt-8 border-t border-gray-200 pt-6">
        <p class="text-xs text-gray-400 font-extrabold uppercase tracking-wider mb-4">Potential Chill Rewards</p>
        <div class="flex gap-4">
          <div class="flex-1 p-6 text-center rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1" style="box-shadow:0 0.125rem 0.5rem rgba(0,0,0,0.04);">
            <div class="text-3xl mb-2">🎫</div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-gray-500">VIP Pass</div>
          </div>
          <div class="flex-1 p-6 text-center rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1" style="box-shadow:0 0.125rem 0.5rem rgba(0,0,0,0.04);">
            <div class="text-3xl mb-2">🧥</div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-gray-500">Hoodie</div>
          </div>
          <div class="flex-1 p-6 text-center rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1" style="box-shadow:0 0.125rem 0.5rem rgba(0,0,0,0.04);">
            <div class="text-3xl mb-2">🎧</div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-gray-500">AirPods</div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// ==============================
// EVENTS PAGE
// ==============================
const renderEvents = () => `
  <section class="animate-fade-in w-screen -ml-[50vw] left-[50%] relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-[4.375rem]">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
      <img src="${assets.eventPageBg}" alt="Smirnoff Ice Events" class="w-full h-full object-cover brightness-[0.6]" style="transform:scale(1.06) translate(2%,2%);">
    </div>
    <div class="relative z-[2] py-12 px-4 text-white text-center mb-0">
      <p class="section-label" style="box-shadow:0 0.3125rem 0.9375rem rgba(0,0,0,0.5);">SMIRNOFF ICE PRESENTS</p>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white" style="text-shadow:0 0.25rem 1.25rem rgba(0,0,0,0.8);">Upcoming <span class="text-smirnoff-red">Chill</span> Events</h1>
      <p class="text-gray-300 text-base sm:text-lg" style="text-shadow:0 0.125rem 0.625rem rgba(0,0,0,0.8);">The hottest events, powered by the coldest vibes. Don't miss out.</p>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-12 pb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      ${state.eventsData.map(event => `
        <div class="event-card" data-event-id="${event.id}" data-action="view-event">
          <img src="${assets[event.img]}" alt="${event.title}">
          <div class="event-overlay">
            ${event.icePass ? '<span class="event-tag">🧊 IcePass Required</span>' : '<span class="event-tag tag-open">Open Entry</span>'}
            <h3>${event.title}</h3>
            <p>${event.date} • ${event.venue}</p>
            <button class="btn btn-sm" data-event-id="${event.id}" data-action="view-event">Learn More →</button>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
`;

// ==============================
// EVENT DETAIL PAGE
// ==============================
const renderEventDetail = () => {
  const event = state.eventsData.find(e => e.id === state.selectedEventId) || state.eventsData[0];
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <button class="back-btn" data-link="events">← Back to Events</button>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <img src="${assets[event.img]}" alt="${event.title}" class="w-full rounded-2xl" style="box-shadow:0 1.25rem 3.125rem rgba(0,0,0,0.1);">
        </div>
        <div>
          ${event.icePass ? '<span class="event-tag">🧊 IcePass Required</span>' : '<span class="event-tag tag-open">Open Entry</span>'}
          <h1 class="text-2xl sm:text-3xl lg:text-4xl my-4">${event.title}</h1>
          <p class="text-base sm:text-lg text-gray-500 mb-8">${event.desc}</p>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <span class="text-2xl">📅</span>
              <div>
                <p class="font-bold">${event.date}</p>
                <p class="text-sm text-gray-400">Date</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-2xl">📍</span>
              <div>
                <p class="font-bold">${event.venue}</p>
                <p class="text-sm text-gray-400">Venue</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3 sm:gap-4 flex-wrap mt-8">
            ${event.icePass ? '<button class="btn btn-gold btn-sm">USE ICEPASS</button>' : ''}
            <button class="btn btn-sm">BUY TICKET</button>
            <button class="btn btn-outline btn-sm">REDEEM POINTS</button>
          </div>
          <div class="mt-12 text-right hidden sm:block">
            <img src="${assets.smirnoffBottle}" alt="Smirnoff Ice" class="inline-block max-w-[6rem] md:max-w-[7.5rem] animate-float" style="mix-blend-mode:multiply;filter:drop-shadow(0 0.625rem 1.25rem rgba(0,0,0,0.1));">
          </div>
        </div>
      </div>
    </section>
  `;
};

// ==============================
// TALENT ACADEMY PAGE
// ==============================
const renderTalent = () => `
  <section class="animate-fade-in w-screen -ml-[50vw] left-[50%] relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-[4.375rem]">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
      <img src="${assets.talentBg}" alt="Smirnoff Chill Talent Academy" class="w-full h-full object-cover" style="transform:scale(1.06) translate(2%,2%);">
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-12 md:pt-16 pb-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="talent-card" data-action="submit-talent" data-category="dj">
        <img src="${assets.talentDj}" alt="DJ">
        <div class="talent-card-overlay">
          <h3>DJ</h3>
          <button class="btn btn-sm">Submit Entry →</button>
        </div>
      </div>
      <div class="talent-card" data-action="submit-talent" data-category="hypeman">
        <img src="${assets.talentHypeman}" alt="Hypeman">
        <div class="talent-card-overlay">
          <h3>HYPEMAN</h3>
          <button class="btn btn-sm">Submit Entry →</button>
        </div>
      </div>
      <div class="talent-card" data-action="submit-talent" data-category="dance">
        <img src="${assets.talentDance}" alt="Dance">
        <div class="talent-card-overlay">
          <h3>DANCE</h3>
          <button class="btn btn-sm">Submit Entry →</button>
        </div>
      </div>
      <div class="talent-card" data-action="submit-talent" data-category="producer">
        <img src="${assets.talentProducer}" alt="Afrobeat Producers">
        <div class="talent-card-overlay">
          <h3>AFROBEAT PRODUCERS</h3>
          <button class="btn btn-sm">Submit Entry →</button>
        </div>
      </div>
    </div>
    <div class="flex gap-6 justify-center mt-12 flex-wrap">
      <button class="btn" data-link="gallery">VIEW GALLERY</button>
      <button class="btn btn-outline" data-link="leaderboard">LEADERBOARD</button>
    </div>
  </section>
`;

// ==============================
// GALLERY PAGE
// ==============================
const renderGallery = () => {
  const categories = ['all', 'dj', 'hypeman', 'dance', 'producer'];
  const filtered = state.talentFilter === 'all'
    ? state.mockTalents
    : state.mockTalents.filter(t => t.category === state.talentFilter);

  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <button class="back-btn" data-link="talent">← Back to Talent Academy</button>
      <div class="text-center mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">Talent <span class="text-smirnoff-red">Gallery</span></h1>
        <p class="text-base text-gray-500 max-w-xl mx-auto">Browse entries and vote for your favourite chiller.</p>
      </div>
      <div class="flex gap-2 mb-8 flex-wrap">
        ${categories.map(c => `
          <button class="tab-btn ${state.talentFilter === c ? 'active' : ''}" data-filter="${c}">${c === 'all' ? 'All' : c.toUpperCase()}</button>
        `).join('')}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${filtered.map(talent => `
          <div class="gallery-card">
            <img class="gallery-card-img" src="${assets[talent.img]}" alt="${talent.name}">
            <div class="gallery-card-info">
              <h4>${talent.name}</h4>
              <p>${talent.category.toUpperCase()}</p>
              <button class="vote-btn" data-vote-id="${talent.id}">
                ❤️ VOTE THIS CHILLER <span class="vote-count">(${talent.votes})</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

// ==============================
// LEADERBOARD PAGE
// ==============================
const renderLeaderboard = () => {
  const sorted = [...state.mockTalents].sort((a, b) => b.votes - a.votes);
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <button class="back-btn" data-link="talent">← Back to Talent Academy</button>
      <div class="text-center mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">Top <span class="text-smirnoff-red">Chillers</span></h1>
        <p class="text-base text-gray-500 max-w-xl mx-auto">The most voted talents across all categories.</p>
      </div>
      <div class="leaderboard-panel">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Talent</th>
              <th class="hidden sm:table-cell">Category</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            ${sorted.map((t, i) => `
              <tr>
                <td>
                  <span class="rank-badge ${i < 3 ? `rank-${i+1}` : 'rank-default'}">
                    ${i + 1}
                  </span>
                </td>
                <td class="font-bold">${t.name}</td>
                <td class="hidden sm:table-cell uppercase text-xs tracking-wider text-gray-400">${t.category}</td>
                <td class="font-extrabold text-smirnoff-red">${t.votes}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
};

// ==============================
// GAMES PAGE
// ==============================
const renderGames = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
    <div class="text-center mb-12">
      <p class="section-label">PLAY & EARN</p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">PLAY. <span class="text-smirnoff-red">WIN.</span> REPEAT.</h1>
      <p class="text-base text-gray-500 max-w-xl mx-auto">Spin the wheel to earn more points.</p>
    </div>
    <div class="relative max-w-3xl mx-auto flex flex-col items-center">
      <img src="${assets.chillGameBg}" alt="Smirnoff Ice Chill Games" class="w-full mb-8" style="mix-blend-mode:darken;">
      <div class="relative z-10">
        <button class="btn text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-16" data-link="spin-game" style="box-shadow:0 0.625rem 1.875rem rgba(211,47,47,0.4);">SPIN THE CHILL WHEEL</button>
      </div>
    </div>
  </section>
`;

// ==============================
// SPIN WHEEL GAME
// ==============================
const renderSpinGame = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
    <button class="back-btn" data-link="games">← Back to Games</button>
    <div class="text-center mb-12">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">Spin The <span class="text-smirnoff-red">Chill</span> Wheel</h1>
      <p class="text-base text-gray-500">Let's see how lucky your chill is…</p>
    </div>
    <div class="flex flex-col items-center gap-8">
      <div class="flex items-center gap-8 md:gap-12 justify-center">
        <div class="hidden md:block">
          <img src="${assets.smirnoffBottle}" alt="Smirnoff Ice" class="max-w-[11.25rem] animate-float" style="mix-blend-mode:multiply;filter:drop-shadow(0 0.9375rem 1.875rem rgba(0,0,0,0.1));">
        </div>
        <div class="flex flex-col items-center">
          <div class="wheel-wrapper">
            <div class="wheel-pointer"></div>
            <canvas id="spin-wheel" class="wheel-canvas" width="320" height="320"></canvas>
          </div>
          <button id="spin-btn" class="btn text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 mt-8">🎰 SPIN THE CHILL WHEEL</button>
          <div id="spin-result"></div>
        </div>
      </div>
    </div>
  </section>
`;

// ==============================
// SHOP PAGE
// ==============================
const renderShop = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
    <div class="text-center mb-12">
      <p class="section-label">GET YOUR CHILL</p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">Shop <span class="text-smirnoff-red">Smirnoff Ice</span></h1>
      <p class="text-base text-gray-500 max-w-xl mx-auto">Get your bottles delivered. Choose your preferred store.</p>
    </div>
    <div class="text-center mb-12">
      <img src="${assets.canBg}" alt="Smirnoff Ice Collection" class="max-w-xl w-4/5 mx-auto" style="mix-blend-mode:darken;filter:drop-shadow(0 0.9375rem 2.1875rem rgba(0,0,0,0.1));">
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
      <div class="shop-card">
        <div class="shop-card-logo">🛒</div>
        <h3>Jumia</h3>
        <p>Nigeria's #1 online marketplace. Fast delivery nationwide.</p>
        <a href="https://www.jumia.com.ng" target="_blank" class="btn btn-sm">SHOP ON JUMIA</a>
      </div>
      <div class="shop-card">
        <div class="shop-card-logo">🏬</div>
        <h3>Konga</h3>
        <p>Shop premium beverages with express delivery options.</p>
        <a href="https://www.konga.com" target="_blank" class="btn btn-sm">SHOP ON KONGA</a>
      </div>
    </div>
  </section>
`;

// ==============================
// USER PROFILE PAGE
// ==============================
const renderUserProfile = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
    <div class="profile-header">
      <div class="profile-avatar">${state.user.name.charAt(0)}</div>
      <div class="profile-info">
        <h2>${state.user.name}</h2>
        <p>${state.user.phone}</p>
      </div>
      <img src="${assets.smirnoffBottle}" alt="Smirnoff Ice" class="profile-product-img">
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
      <div class="stat-card">
        <div class="stat-value">${state.user.points.toLocaleString()}</div>
        <div class="stat-label">Point Balance</div>
      </div>
      <div class="stat-card">
        <div class="stat-value stat-active">${state.user.icePass}</div>
        <div class="stat-label">IcePass Status</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">12</div>
        <div class="stat-label">Codes Entered</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">3</div>
        <div class="stat-label">Rewards Claimed</div>
      </div>
    </div>
    <div class="flex gap-6 mb-12 flex-wrap">
      <button class="btn btn-sm" data-link="rewards">VIEW REWARDS</button>
      <button class="btn btn-sm btn-outline">REDEMPTION HISTORY</button>
    </div>
    <h3 class="mb-6 text-base">Recent Activity</h3>
    <div class="history-panel">
      <ul class="history-list">
        ${state.user.history.map(item => `
          <li class="history-item">
            <div class="history-item-info">
              <h4>${item.label}</h4>
              <p>${item.date}</p>
            </div>
            <span class="history-item-points ${item.points > 0 ? 'positive' : 'negative'}">
              ${item.points > 0 ? '+' : ''}${item.points} pts
            </span>
          </li>
        `).join('')}
      </ul>
    </div>
  </section>
`;

// ==============================
// REWARDS PAGE
// ==============================
const renderRewards = () => `
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
    <button class="back-btn" data-link="user">← Back to Profile</button>
    <div class="text-center mb-12">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-3">Your <span class="text-smirnoff-red">Rewards</span></h1>
      <p class="text-base text-gray-500 max-w-xl mx-auto">Redeem your points for exclusive Smirnoff Ice rewards.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="reward-item">
        <div class="reward-item-icon">🎫</div>
        <h3>VIP Event Pass</h3>
        <p>Skip the queue at any Smirnoff Ice event.</p>
        <div class="reward-cost">500 Points</div>
        <br>
        <button class="btn btn-sm">REDEEM</button>
      </div>
      <div class="reward-item">
        <div class="reward-item-icon">🧥</div>
        <h3>Smirnoff Ice Hoodie</h3>
        <p>Premium limited edition branded hoodie.</p>
        <div class="reward-cost">1000 Points</div>
        <br>
        <button class="btn btn-sm">REDEEM</button>
      </div>
      <div class="reward-item">
        <div class="reward-item-icon">🎧</div>
        <h3>Wireless Earbuds</h3>
        <p>Premium wireless earbuds with noise cancellation.</p>
        <div class="reward-cost">2000 Points</div>
        <br>
        <button class="btn btn-sm btn-outline">NOT ENOUGH POINTS</button>
      </div>
      <div class="reward-item">
        <div class="reward-item-icon">🎉</div>
        <h3>Party Starter Pack</h3>
        <p>A crate of Smirnoff Ice delivered to your door.</p>
        <div class="reward-cost">750 Points</div>
        <br>
        <button class="btn btn-sm">REDEEM</button>
      </div>
      <div class="reward-item">
        <div class="reward-item-icon">✈️</div>
        <h3>All-Expense Trip</h3>
        <p>Win a trip for 2 to the Smirnoff Ice Beach Festival.</p>
        <div class="reward-cost">5000 Points</div>
        <br>
        <button class="btn btn-sm btn-outline">NOT ENOUGH POINTS</button>
      </div>
      <div class="reward-item">
        <div class="reward-item-icon">🎤</div>
        <h3>Studio Session</h3>
        <p>1-hour studio recording session at a top Lagos studio.</p>
        <div class="reward-cost">1500 Points</div>
        <br>
        <button class="btn btn-sm">REDEEM</button>
      </div>
    </div>
  </section>
`;

// ==============================
// SPIN WHEEL DRAWING
// ==============================
const wheelSegments = [
  { label: '5 pts', color: '#D32F2F', value: 5 },
  { label: '10 pts', color: '#222', value: 10 },
  { label: '2 pts', color: '#D32F2F', value: 2 },
  { label: '50 pts', color: '#FFD700', value: 50 },
  { label: '5 pts', color: '#222', value: 5 },
  { label: '20 pts', color: '#D32F2F', value: 20 },
  { label: '0 pts', color: '#555', value: 0 },
  { label: '100 pts', color: '#FFD700', value: 100 },
];

const drawWheel = () => {
  const canvas = document.getElementById('spin-wheel');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 160, cy = 160, r = 150;
  const segments = wheelSegments.length;
  const arc = (2 * Math.PI) / segments;

  for (let i = 0; i < segments; i++) {
    const startAngle = i * arc;
    const endAngle = startAngle + arc;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = wheelSegments[i].color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Montserrat, sans-serif';
    ctx.fillText(wheelSegments[i].label, r - 15, 5);
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 25, 0, 2 * Math.PI);
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
  ctx.fillStyle = '#D32F2F';
  ctx.fill();
};

// ==============================
// TALENT SUBMIT MODAL
// ==============================
const showSubmitModal = (category) => {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'talent-modal';
  modal.innerHTML = `
    <div class="modal-content animate-slide-up">
      <button class="modal-close" id="close-modal">✕</button>
      <h2 class="mb-2">Submit Your Entry</h2>
      <p class="text-gray-400 mb-8 text-sm">Category: <strong class="text-smirnoff-red uppercase">${category}</strong></p>
      <div class="form-group">
        <label>Your Name / Stage Name</label>
        <input type="text" id="talent-name" placeholder="e.g. DJ Chill-X">
      </div>
      <div class="form-group">
        <label>Short Bio</label>
        <textarea id="talent-bio" rows="3" placeholder="Tell us about your talent..." class="resize-none"></textarea>
      </div>
      <div class="form-group">
        <label>Video Link (YouTube / Instagram / TikTok)</label>
        <input type="url" id="talent-link" placeholder="https://...">
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" id="talent-phone" placeholder="080XXXXXXXX" value="${state.user.phone}">
      </div>
      <button id="submit-talent-btn" class="btn w-full">SUBMIT MY ENTRY</button>
      <div id="talent-feedback" class="mt-4 text-center"></div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('close-modal').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

  document.getElementById('submit-talent-btn').addEventListener('click', async () => {
    const name = document.getElementById('talent-name').value.trim();
    const bio = document.getElementById('talent-bio').value.trim();
    const link = document.getElementById('talent-link').value.trim();
    const phone = document.getElementById('talent-phone').value.trim();
    const feedback = document.getElementById('talent-feedback');

    if (!name || !bio || !link) {
      feedback.innerHTML = '<p class="text-smirnoff-red">Please fill all fields.</p>';
      return;
    }

    const result = await BackendService.submitTalent({ name, bio, link, phone, category });
    if (result.success) {
      feedback.innerHTML = `
        <div class="bg-green-50 border border-green-200 p-4 rounded-xl">
          <p class="text-green-600 font-bold">🎉 Your entry has been received!</p>
          <p class="text-sm text-gray-400 mt-2">Share your link to get votes.</p>
        </div>
      `;
      document.getElementById('submit-talent-btn').style.display = 'none';
    } else {
      feedback.innerHTML = `<p class="text-smirnoff-red">${result.message}</p>`;
    }
  });
};

// ==============================
// TOAST NOTIFICATION
// ==============================
const showToast = (message, type = 'success') => {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
};

// ==============================
// EVENT LISTENERS
// ==============================
const attachListeners = () => {
  // Navigation Links
  document.querySelectorAll('[data-link]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.closest('[data-link]').dataset.link;
      navigateTo(target);
    });
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle && !themeToggle.dataset.listenersAttached) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.innerText = '☀️';
    }
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.innerText = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    themeToggle.dataset.listenersAttached = 'true';
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Code Entry Logic
  const submitBtn = document.querySelector('#submit-code');
  const codeInput = document.querySelector('#code-input');
  const feedback = document.querySelector('#code-feedback');

  if (submitBtn && codeInput) {
    submitBtn.addEventListener('click', async () => {
      const code = codeInput.value.trim();
      if (!code) {
        feedback.innerHTML = '<p class="text-smirnoff-red font-semibold">Please enter a code.</p>';
        return;
      }

      submitBtn.innerText = 'Validating...';
      submitBtn.disabled = true;

      const result = await BackendService.validateCode(code, state.user.phone);

      if (result.success) {
        state.user.points += result.points;
        if (result.prize) {
          feedback.innerHTML = `
            <div class="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-2xl animate-slide-up">
              <p class="text-2xl mb-2">🎉 You just won!</p>
              <p class="font-extrabold text-xl text-yellow-600">${result.prize}</p>
              <p class="text-sm text-gray-400 mt-2">Your chill just got real.</p>
            </div>
          `;
        } else {
          feedback.innerHTML = `
            <div class="bg-green-50 border-2 border-green-200 p-6 rounded-2xl animate-slide-up">
              <p class="text-xl font-extrabold text-green-500">✅ You just earned ${result.points} Ice Points!</p>
              <p class="text-sm text-gray-400 mt-2">Keep popping. Keep winning.</p>
            </div>
          `;
        }
        codeInput.value = '';
        showToast(`+${result.points} points added!`);
      } else {
        feedback.innerHTML = `
          <div class="bg-red-50 border-2 border-red-200 p-6 rounded-2xl animate-slide-up">
            <p class="font-bold text-smirnoff-red">❌ ${result.message || "Hmm… that code isn't chilling. Try again."}</p>
          </div>
        `;
      }

      submitBtn.innerText = 'UNLOCK MY CHILL';
      submitBtn.disabled = false;
    });

    codeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitBtn.click();
    });
  }

  // Event View Detail
  document.querySelectorAll('[data-action="view-event"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const eventId = parseInt(e.target.closest('[data-event-id]').dataset.eventId);
      state.selectedEventId = eventId;
      navigateTo('event-detail');
    });
  });

  // Talent Submit
  document.querySelectorAll('[data-action="submit-talent"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.target.closest('[data-category]').dataset.category;
      showSubmitModal(category);
    });
  });

  // Gallery Filter
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('click', () => {
      state.talentFilter = el.dataset.filter;
      renderApp();
    });
  });

  // Vote
  document.querySelectorAll('[data-vote-id]').forEach(el => {
    el.addEventListener('click', async () => {
      const id = parseInt(el.dataset.voteId);
      const talent = state.mockTalents.find(t => t.id === id);
      if (talent) {
        talent.votes += 1;
        showToast(`Voted for ${talent.name}! ❤️`);
        renderApp();
      }
    });
  });

  // Spin Wheel
  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) {
    spinBtn.addEventListener('click', () => {
      spinBtn.disabled = true;
      spinBtn.innerText = '🎰 Spinning...';

      const canvas = document.getElementById('spin-wheel');
      const degrees = 1800 + Math.floor(Math.random() * 360);
      canvas.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
      canvas.style.transform = `rotate(${degrees}deg)`;

      setTimeout(() => {
        const normalizedDeg = degrees % 360;
        const segmentIndex = Math.floor(normalizedDeg / (360 / wheelSegments.length));
        const reversedIndex = (wheelSegments.length - segmentIndex) % wheelSegments.length;
        const won = wheelSegments[reversedIndex];

        state.user.points += won.value;
        const resultDiv = document.getElementById('spin-result');

        if (won.value > 0) {
          resultDiv.innerHTML = `
            <div class="spin-result bg-green-50 border-2 border-green-200 mt-6">
              <p class="text-xl text-green-500 font-extrabold mb-2">You just iced that round. ${won.value} Points added.</p>
              <button class="btn btn-sm btn-outline border-green-500 text-green-500 mt-4" onclick="alert('Results shared to your social media!')">📤 Share Results</button>
            </div>
          `;
          showToast(`+${won.value} points from the spin wheel!`);
        } else {
          resultDiv.innerHTML = `
            <div class="spin-result bg-red-50 border-2 border-red-200 mt-6">
              <p>Better luck next spin! 🧊</p>
            </div>
          `;
        }

        spinBtn.disabled = false;
        spinBtn.innerText = '🎰 SPIN AGAIN';
      }, 4500);
    });
  }
};

// ==============================
// INITIAL RENDER
// ==============================
renderApp();
