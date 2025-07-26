import UserProfile from './components/UserProfile.js';
import ClubProfile from './components/ClubProfile.js';
import Geolocation from './components/Geolocation.js';

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
    'geolocation': Geolocation
  }
});

app.mount('#app');
