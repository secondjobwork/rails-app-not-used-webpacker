import Vue from 'vue'
import Hello from '../Hello.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    components: {
      Hello
    }
  })

  console.log(app)
})
