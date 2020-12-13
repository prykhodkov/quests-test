<template>
  <div class="todo-list">
    <div class="todo-list__stat">
      <div class="stat">
        <span>All: </span>
        <span>{{ todos.length }}</span>
      </div>

      <div class="stat">
        <span>Finished: </span>
        <span>{{ finishedTodos.length }}</span>
      </div>

      <div class="stat">
        <span>Pending: </span>
        <span>{{ pendingTodos.length }}</span>
      </div>
    </div>

    <div
        v-for="(todo, index) in todos"
        :key="index"
        class="todo"
    >
      <TodoItem :todo="todo" />
    </div>
    <div class="todo-add">
      <div class="todo-add__wrap">
        <input
            v-model="newTodoTitle"
            type="text"
            placeholder="New great idea..."
            class="todo-add__field"
        >
        <button class="todo-add__button" @click="addNewTodo">Add</button>
      </div>
      <div v-show="errorVisibility" class="todo-add__error">Can't be empty!</div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapGetters } from 'vuex'

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data: () => ({
    todoList: localStorage.getItem('todoList'),
    newTodoTitle: '',
    errorVisibility: false,
  }),
  computed: {
    ...mapGetters(['todos']),
    finishedTodos() {
      return this.todos.filter(item => item.finished)
    },
    pendingTodos() {
      return this.todos.filter(item => !item.finished)
    },
  },
  mounted() {
    this.$store.dispatch('initTodosList', JSON.parse(this.todoList))
  },
  watch: {
    newTodoTitle() {
      if(this.newTodoTitle) {
        this.errorVisibility = false
      }
    }
  },
  methods: {
    addNewTodo() {
      if(this.newTodoTitle) {
        this.$store.dispatch('addTodoItem', this.newTodoTitle)
        this.newTodoTitle = ''
        this.errorVisibility = false
      } else {
        this.errorVisibility = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  &__stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .todo-add {
    width: 100%;
    margin-top: 20px;

    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 16px;
    }

    &__field {
      box-sizing: border-box;
      height: 35px;
      width: 100%;
      padding-left: 10px;
      outline: none;
      border-radius: 0;
      border: 1px solid #afafaf;

      &:focus {
        border-radius: 0;
        border: 1px solid #727272;
      }
    }

    &__button {
      box-sizing: border-box;
      height: 35px;
      padding: 0 20px;
      margin-left: -1px;
      color: #fff;
      border: none;
      outline: none;
      border-radius: 0;
      box-shadow: none;
      background-color: #1e90ff;
      cursor: pointer;
      transition: 180ms ease;

      &:hover {
        background-color: #0466c6;
      }
    }

    &__error {
      width: 100%;
      margin-top: 5px;
      text-align: center;
      font-size: 14px;
      color: #cd3d3d;
    }
  }
}
</style>
