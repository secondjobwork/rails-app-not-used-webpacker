<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import store from './store'

export default {
  props: ['data'],
  computed: {
    ...mapState({
      message: 'message'
    })
  },
  methods: {
    ...mapMutations(['setMessage'])
  },
  created() {
    this.setMessage(this.data.message)
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
