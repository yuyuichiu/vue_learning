Vue.createApp({
  data() {
    return {
      counter: 0,
      resetting: false
    }
  },
  methods: {
    add(num) {
      this.counter += num
    }
  },
  computed: {
    countOutput() {
      if(this.counter > 37) {
        return "Too much!"
      } else if (this.counter < 37) {
        return "Not there yet"
      } else {
        return `Yes, the value is ${this.counter}!`
      }
    }
  },
  watch: {
    counter(value) {
      if(value > 0 && !this.resetting) {
        this.resetting = true;

        const vueThis = this;
        const resetTimer = setTimeout(function() {
          vueThis.counter = 0;
          vueThis.resetting = false;
        }, 5000)
      }
    }
  }
}).mount('#assignment')