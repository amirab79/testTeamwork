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
          <label for="facilities">Facilities:</label>
          <textarea id="facilities" v-model="club.facilities"></textarea>
        </div>
        <div>
          <label for="photos">Photos:</label>
          <input type="file" id="photos" @change="onFileChange" multiple>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  `,
  data() {
    return {
      club: {
        name: '',
        address: '',
        facilities: '',
        photos: []
      }
    }
  },
  methods: {
    saveProfile() {
      // In a real application, you would save this data to a server.
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
