import UserProfile from './components/UserProfile.js';
import ClubProfile from './components/ClubProfile.js';
import Geolocation from './components/Geolocation.js';
import ClubDiscovery from './components/ClubDiscovery.js';
import Wallet from './components/Wallet.js';
import Booking from './components/Booking.js';
import ClubManagerDashboard from './components/ClubManagerDashboard.js';
import AdminPanel from './components/AdminPanel.js';

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      currentView: 'home'
    }
  },
  components: {
    'user-profile': UserProfile,
    'club-profile': ClubProfile,
    'geolocation': Geolocation,
    'club-discovery': ClubDiscovery,
    'wallet': Wallet,
    'booking': Booking,
    'club-manager-dashboard': ClubManagerDashboard,
    'admin-panel': AdminPanel
  }
});

app.mount('#app');
