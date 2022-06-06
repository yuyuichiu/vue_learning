const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Manuel Lorenz",
          phone: "01235 847",
          email: "manuel@gmail.com",
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "52887 4456",
          email: "jones@gmail.com",
        },
      ],
    };
  },
});

// Vue component (a Vue app that belongs to parent app)
app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "2",
        name: "Julie Jones",
        phone: "52887 4456",
        email: "jones@gmail.com",
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  }
});

app.mount("#app");
