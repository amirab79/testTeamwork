export default {
  template: `
    <div>
      <h3>Your Location</h3>
      <div v-if="error">{{ error }}</div>
      <div v-if="latitude && longitude">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>
    </div>
  `,
  data() {
    return {
      latitude: null,
      longitude: null,
      error: null
    }
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
          },
          error => {
            this.error = 'Unable to retrieve your location';
          }
        );
      } else {
        this.error = 'Geolocation is not supported by your browser';
      }
    }
  },
  mounted() {
    this.getLocation();
  }
};
