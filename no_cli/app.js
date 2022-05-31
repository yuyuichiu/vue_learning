const app = Vue.createApp({
  data: () => {
    return {
      // Use v-html to output HTML tag instead of string, be aware of security issue
      goalA: 'Find a full-time developer job',
      goalB: 'Expand your web capabilities',
      vueLink: 'https://vuejs.org/',
      counter: 0
    }
  },
  methods: {
    randomGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.goalA
      } else {
        return this.goalB
      }
    }
  }
})

app.mount('#user-goal')