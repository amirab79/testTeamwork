export default {
  template: `
    <div>
      <h2>My Wallet</h2>
      <div class="balance">
        <h3>Current Balance</h3>
        <p>\${{ balance }}</p>
      </div>
      <div class="add-funds">
        <h3>Add Funds</h3>
        <form @submit.prevent="addFunds">
          <input type="number" v-model.number="amount" placeholder="Enter amount">
          <button type="submit">Add</button>
        </form>
      </div>
      <div class="transaction-history">
        <h3>Transaction History</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.id">
            <span>{{ transaction.date }}</span>
            <span>{{ transaction.description }}</span>
            <span>\${{ transaction.amount.toFixed(2) }}</span>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      balance: 100,
      amount: null,
      transactions: [
        { id: 1, date: '2025-07-25', description: 'Initial balance', amount: 100 },
        { id: 2, date: '2025-07-26', description: 'Yoga session', amount: -20 }
      ]
    }
  },
  methods: {
    addFunds() {
      if (this.amount > 0) {
        this.balance += this.amount;
        this.transactions.push({
          id: this.transactions.length + 1,
          date: new Date().toLocaleDateString(),
          description: 'Added funds',
          amount: this.amount
        });
        this.amount = null;
      }
    }
  }
};
