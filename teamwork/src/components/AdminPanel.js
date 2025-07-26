export default {
  template: `
    <div>
      <h2>Admin Panel</h2>
      <div class="tabs">
        <button @click="currentTab = 'users'">Users</button>
        <button @click="currentTab = 'clubs'">Clubs</button>
        <button @click="currentTab = 'payments'">Payments</button>
      </div>
      <div v-if="currentTab === 'users'">
        <h3>Manage Users</h3>
        <ul>
          <li v-for="user in users" :key="user.id">
            <p><strong>{{ user.name }}</strong> ({{ user.email }})</p>
            <button @click="deleteUser(user.id)">Delete</button>
          </li>
        </ul>
      </div>
      <div v-if="currentTab === 'clubs'">
        <h3>Manage Clubs</h3>
        <ul>
          <li v-for="club in clubs" :key="club.id">
            <p><strong>{{ club.name }}</strong></p>
            <button @click="approveClub(club.id)" :disabled="club.approved">
              {{ club.approved ? 'Approved' : 'Approve' }}
            </button>
            <button @click="deleteClub(club.id)">Delete</button>
          </li>
        </ul>
      </div>
      <div v-if="currentTab === 'payments'">
        <h3>Manage Payments</h3>
        <ul>
          <li v-for="payment in payments" :key="payment.id">
            <p>{{ payment.date }} - {{ payment.userName }} - {{ payment.description }} - \${{ payment.amount }}</p>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      currentTab: 'users',
      users: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
      ],
      clubs: [
        { id: 1, name: 'Fitness First', approved: true },
        { id: 2, name: 'Gym Box', approved: false }
      ],
      payments: [
        { id: 1, date: '2025-07-26', userName: 'Jane Smith', description: 'Session payment', amount: 20 }
      ]
    }
  },
  methods: {
    deleteUser(userId) {
      this.users = this.users.filter(u => u.id !== userId);
    },
    approveClub(clubId) {
      const club = this.clubs.find(c => c.id === clubId);
      if (club) {
        club.approved = true;
      }
    },
    deleteClub(clubId) {
      this.clubs = this.clubs.filter(c => c.id !== clubId);
    }
  }
};
