export default {
  template: `
    <div>
      <h2>Club Profile</h2>
      <form @submit.prevent="saveProfile">
        <div>
          <label for="clubName">Club Name:</label>
          <input type="text" id="clubName" v-model="club.name">
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="club.address">
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="club.description"></textarea>
        </div>
        <div>
          <label for="amenities">Amenities:</label>
          <textarea id="amenities" v-model="club.amenities"></textarea>
        </div>
        <div>
          <label for="services">Services:</label>
          <input type="text" id="services" v-model="club.services">
        </div>
        <div>
          <label for="price">Price per session:</label>
          <input type="number" id="price" v-model.number="club.price">
        </div>
        <div>
          <label for="hours">Business Hours:</label>
          <input type="text" id="hours" v-model="club.hours">
        </div>
        <div>
          <label for="photos">Photos:</label>
          <input type="file" id="photos" @change="onFileChange" multiple>
        </div>
        <button type="submit">Save Profile</button>
      </form>
      <div class="reviews">
        <h3>Ratings and Reviews</h3>
        <p>Average Rating: {{ averageRating }}</p>
        <ul>
          <li v-for="review in reviews" :key="review.id">
            <p><strong>{{ review.userName }}</strong> - {{ review.rating }}/5</p>
            <p>{{ review.comment }}</p>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      club: {
        name: '',
        address: '',
        description: '',
        amenities: '',
        services: '',
        price: 0,
        hours: '',
        photos: []
      },
      reviews: [
        { id: 1, userName: 'John Doe', rating: 5, comment: 'Great gym!' },
        { id: 2, userName: 'Jane Smith', rating: 4, comment: 'Good equipment, but can get crowded.' }
      ]
    }
  },
  computed: {
    averageRating() {
      if (this.reviews.length === 0) {
        return 'No ratings yet';
      }
      const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      return (total / this.reviews.length).toFixed(1);
    }
  },
  methods: {
    saveProfile() {
      console.log('Saving club profile:', this.club);
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.club.photos = Array.from(files);
    }
  }
};
