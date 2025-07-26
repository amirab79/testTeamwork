export default {
  template: `
    <div>
      <h2>Discover Fitness Clubs</h2>
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search clubs...">
        <select v-model="sortBy">
          <option value="distance">Distance</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div class="view-toggle">
        <button @click="view = 'list'">List View</button>
        <button @click="view = 'map'">Map View</button>
      </div>
      <div v-if="view === 'list'" class="list-view">
        <ul>
          <li v-for="club in filteredClubs" :key="club.id">
            <h3>{{ club.name }}</h3>
            <p>{{ club.address }}</p>
            <p>Rating: {{ club.rating }}</p>
          </li>
        </ul>
      </div>
      <div v-if="view === 'map'" id="map" style="height: 400px;"></div>
    </div>
  `,
  data() {
    return {
      view: 'list',
      search: '',
      sortBy: 'distance',
      clubs: [
        { id: 1, name: 'Fitness First', address: '123 Main St', rating: 4.5, lat: 34.0522, lon: -118.2437 },
        { id: 2, name: 'Gym Box', address: '456 Oak Ave', rating: 4.2, lat: 34.0532, lon: -118.2447 },
        { id: 3, name: 'Pure Gym', address: '789 Pine Ln', rating: 4.8, lat: 34.0542, lon: -118.2457 }
      ],
      map: null
    }
  },
  computed: {
    filteredClubs() {
      let clubs = this.clubs.filter(club =>
        club.name.toLowerCase().includes(this.search.toLowerCase())
      );

      if (this.sortBy === 'rating') {
        clubs.sort((a, b) => b.rating - a.rating);
      } else if (this.sortBy === 'name') {
        clubs.sort((a, b) => a.name.localeCompare(b.name));
      }

      return clubs;
    }
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([34.0522, -118.2437], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.filteredClubs.forEach(club => {
        L.marker([club.lat, club.lon]).addTo(this.map)
          .bindPopup(club.name);
      });
    }
  },
  watch: {
    view(newView) {
      if (newView === 'map') {
        this.$nextTick(() => {
          this.initMap();
        });
      }
    }
  }
};
