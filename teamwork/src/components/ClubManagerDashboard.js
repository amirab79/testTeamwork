export default {
  template: `
    <div>
      <h2>Club Manager Dashboard</h2>
      <div class="tabs">
        <button @click="currentTab = 'profile'">Profile</button>
        <button @click="currentTab = 'bookings'">Bookings</button>
        <button @click="currentTab = 'earnings'">Earnings</button>
      </div>
      <div v-if="currentTab === 'profile'">
        <club-profile></club-profile>
      </div>
      <div v-if="currentTab === 'bookings'">
        <h3>Current Bookings</h3>
        <ul>
          <li v-for="booking in bookings" :key="booking.id">
            <p><strong>{{ booking.userName }}</strong></p>
            <p>{{ booking.date }} at {{ booking.time }}</p>
            <button @click="confirmBooking(booking.id)" :disabled="booking.confirmed">
              {{ booking.confirmed ? 'Confirmed' : 'Confirm' }}
            </button>
          </li>
        </ul>
      </div>
      <div v-if="currentTab === 'earnings'">
        <h3>Earnings</h3>
        <p>Total Earnings: \${{ totalEarnings }}</p>
        <ul>
          <li v-for="earning in earnings" :key="earning.id">
            <p>{{ earning.date }} - {{ earning.description }} - \${{ earning.amount }}</p>
          </li>
        </ul>
      </div>
    </div>
  `,
  components: {
    'club-profile': () => import('./ClubProfile.js')
  },
  data() {
    return {
      currentTab: 'profile',
      bookings: [
        { id: 1, userName: 'John Doe', date: '2025-07-28', time: '10:00', confirmed: false },
        { id: 2, userName: 'Jane Smith', date: '2025-07-28', time: '11:00', confirmed: true }
      ],
      earnings: [
        { id: 1, date: '2025-07-26', description: 'Session payment from Jane Smith', amount: 20 }
      ]
    }
  },
  computed: {
    totalEarnings() {
      return this.earnings.reduce((acc, earning) => acc + earning.amount, 0);
    }
  },
  methods: {
    confirmBooking(bookingId) {
      const booking = this.bookings.find(b => b.id === bookingId);
      if (booking) {
        booking.confirmed = true;
      }
    }
  }
};
