const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log('Ref: ', this.$refs.userText);
    },
  },
});

app.mount('#app');

// By mounting the app, the mounted HTML part becomes a Vue template
// In this example, we alternatively add template on JS instead.
const app2 = Vue.createApp({
  template: `
    <h1>Template added inside Vue.createApp</h1>
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'pizza'
    }
  }
})

app2.mount('#app2')


// Javascript is not reactive in default
// let prefix = 'Hello, '
// let message = prefix + 'World'

// prefix = 'Hello, Vue '
// console.log(message)

// Vue.js uses Proxy to do the reactivity functionality for us
let data = {
  prefix: 'Hello, ',
  message: 'Hello, World.'
}

let handler = {
  set(target, key, value) {
    if(key === 'prefix') {
      target.message = value + 'World.'
    }
    target.prefix = value;
  }
}


// Demonstrate the concept of how Vue implement its reactivity feature
// with the help of JavaScript built-in Proxy object
const proxy = new Proxy(data, handler);

console.log(proxy.message)

proxy.prefix = 'Hello, Vue '

console.log(proxy.message)