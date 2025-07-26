export default {
  template: `
    <div>
      <h2>User Profile</h2>
      <form @submit.prevent="saveProfile">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="user.name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div>
          <label for="profilePicture">Profile Picture:</label>
          <input type="file" id="profilePicture" @change="onFileChange">
        </div>
        <button type="submit">Save Profile</button>
      </form>
      <div class="balance">
        <h3>Your Balance</h3>
        <p>\${{ balance }}</p>
        <button @click="addFunds(10)">Add $10</button>
        <button @click="addFunds(20)">Add $20</button>
      </div>
    </div>
  `,
  data() {
    return {
      user: {
        name: '',
        email: '',
        profilePicture: null
      },
      balance: 0
    }
  },
  methods: {
    saveProfile() {
      // In a real application, you would save this data to a server.
      console.log('Saving profile:', this.user);
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.user.profilePicture = files[0];
    },
    addFunds(amount) {
      this.balance += amount;
    }
  }
};
