const app = Vue.createApp({
  data: () => {
    return {
      // Use v-html to output HTML tag instead of string, be aware of security issue
      vueLink: 'https://vuejs.org/',
      counter: 0,
      username: ""
    }
  },
  // Watcher run function to 
  watch: {
    counter(value) {
      if(Math.abs(value) > 50) {
        // JS: You can store this in a variable to use it in different scope.
        const vueThis = this;
        setTimeout(function() {
          vueThis.counter = 0;
        }, 2000)
      }
    }
  },
  // Computed properties run on dependency changes to affect the data
  computed: {
    confirmedUsername(event) {
      if(!this.username) {
        return ""
      }
      return `User-${this.username}`;
    },
    randomGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return 'Find a full-time developer job'
      } else {
        return 'Expand your web capabilities'
      }
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    signup(event) {
      this.username = event.target.name.value;
    }
  }
})

app.mount('#user-goal')