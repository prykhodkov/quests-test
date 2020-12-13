<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  created() {
    let todoList = JSON.stringify([
      {
        finished: true,
        title: 'Feed the cat',
      },
      {
        finished: true,
        title: 'Cuddle the cat',
      },
      {
        finished: false,
        title: 'Play with cat',
      },
      {
        finished: false,
        title: 'Clean after the cat',
      },
    ])
    localStorage.setItem('todoList', todoList)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #111;
}
</style>
