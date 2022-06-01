const app = Vue.createApp({
  data() {
    return {
      input: "",
      goals: []
    }
  },
  methods: {
    addGoal() {
      if(!this.input || this.input.length === 0) { return }
      this.goals.push(this.input);
      this.input = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
