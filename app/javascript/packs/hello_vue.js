import Vue from 'vue'
import Hello from '../Hello.vue'
import store from '../store'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    components: {
      Hello
    },
    store
  })

  console.log(app)
})
