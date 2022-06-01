const app = Vue.createApp({
  data() {
    return {
      input: "",
      tasks: [],
      showTasks: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.input)
      this.input = ''
    },
    toggleTaskList() {
      this.showTasks = !this.showTasks
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
})

app.mount('#assignment')