export default {
  template: `
    <div>
      <h2>Book a Session</h2>
      <form @submit.prevent="bookSession">
        <div>
          <label for="club">Select a Club:</label>
          <select id="club" v-model="selectedClub">
            <option v-for="club in clubs" :key="club.id" :value="club.id">{{ club.name }}</option>
          </select>
        </div>
        <div>
          <label for="date">Select a Date:</label>
          <input type="date" id="date" v-model="selectedDate">
        </div>
        <div>
          <label for="time">Select a Time:</label>
          <input type="time" id="time" v-model="selectedTime">
        </div>
        <button type="submit">Book Now</button>
      </form>
      <div class="upcoming-sessions">
        <h3>Upcoming Sessions</h3>
        <ul>
          <li v-for="session in upcomingSessions" :key="session.id">
            <p><strong>{{ session.clubName }}</strong></p>
            <p>{{ session.date }} at {{ session.time }}</p>
            <button @click="checkIn(session.id)" :disabled="session.checkedIn">
              {{ session.checkedIn ? 'Checked In' : 'Check In' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      clubs: [
        { id: 1, name: 'Fitness First' },
        { id: 2, name: 'Gym Box' },
        { id: 3, name: 'Pure Gym' }
      ],
      selectedClub: 1,
      selectedDate: '',
      selectedTime: '',
      upcomingSessions: []
    }
  },
  methods: {
    bookSession() {
      const club = this.clubs.find(c => c.id === this.selectedClub);
      this.upcomingSessions.push({
        id: this.upcomingSessions.length + 1,
        clubName: club.name,
        date: this.selectedDate,
        time: this.selectedTime,
        checkedIn: false
      });
    },
    checkIn(sessionId) {
      const session = this.upcomingSessions.find(s => s.id === sessionId);
      if (session) {
        session.checkedIn = true;
      }
    }
  }
};
