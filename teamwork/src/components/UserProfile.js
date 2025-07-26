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
      <div class="history">
        <h3>Session History</h3>
        <ul>
          <li v-for="session in sessionHistory" :key="session.id">
            {{ session.clubName }} - {{ session.date }} - \${{ session.price }}
          </li>
        </ul>
        <h3>Payment Transactions</h3>
        <ul>
          <li v-for="transaction in paymentHistory" :key="transaction.id">
            {{ transaction.date }} - {{ transaction.description }} - \${{ transaction.amount }}
          </li>
        </ul>
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
      balance: 0,
      sessionHistory: [
        { id: 1, clubName: 'Fitness First', date: '2025-07-20', price: 15 },
        { id: 2, clubName: 'Gym Box', date: '2025-07-22', price: 20 }
      ],
      paymentHistory: [
        { id: 1, date: '2025-07-19', description: 'Added funds', amount: 50 },
        { id: 2, date: '2025-07-20', description: 'Session payment', amount: -15 },
        { id: 3, date: '2025-07-22', description: 'Session payment', amount: -20 }
      ]
    }
  },
  methods: {
    saveProfile() {
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
      this.paymentHistory.push({
        id: this.paymentHistory.length + 1,
        date: new Date().toISOString().split('T')[0],
        description: 'Added funds',
        amount: amount
      });
    }
  }
};
