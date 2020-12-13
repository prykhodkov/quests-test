<template>
  <div class="page">
    <h1 class="title">My great plans</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: "Home",
  components: {
    TodoList
  }
}
</script>

<style scoped>
.page {
  padding: 30px 15px;
}

.title {
  margin: 0 auto 20px;
  text-align: center;
  font-weight: 300;
  font-size: 38px;
}
</style>
