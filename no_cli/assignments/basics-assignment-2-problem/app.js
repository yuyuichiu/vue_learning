Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: ""
    }
  },
  methods: {
    showAlert(message) {
      alert(message)
    },
    registerInput(event) {
      this.userInput = event.target.value
    },
    confirmInput(event) {
      this.confirmedInput = event.target.value
    }
  }
}).mount('#assignment')