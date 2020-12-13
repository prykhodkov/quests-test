<template>
  <div class="todo__wrap">
    <div
      class="todo__plume"
      :class="plumeStyles"
    >
      {{ status ? 'Finished': 'Pending' }}
    </div>

    <input
      v-model="todo.finished"
      type="checkbox"
      class="todo__check"
      @click="handleCheckboxClick"
    >
    <div class="todo__title">{{ todo.title }}</div>
    <div class="todo__delete" @click="deleteTodoItem"><img src="../assets/trash.svg" alt="" width="100%"></div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object
    },
  },
  data: () => ({
    plumeVisibility: false
  }),
  computed: {
    status() {
      return this.todo.finished
    },
    plumeStyles() {
      return [
        this.status ? 'finished': 'pending',
        this.plumeVisibility ? 'visible': '',
      ]
    },
  },
  methods: {
    handleCheckboxClick() {
      this.plumeVisibility = true

      setTimeout(() => {
        this.plumeVisibility = false
      }, 500)
    },
    deleteTodoItem() {
      this.$store.dispatch('deleteTodoItem', this.todo)
    },
  }
}
</script>

<style lang="scss">
.todo {
  display: block;
  margin: 10px 0;

  &__wrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 320px;
  }

  &__plume {
    position: absolute;
    bottom: 0;
    left: -75px;
    width: 70px;
    opacity: 0;
    transform: translateY(-20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:not(.visible) {
      transition: 280ms ease;
    }

    &.finished {
      color: #70ce17;
    }

    &.pending {
      color: #e4cc23;
    }
  }

  &__check {
    position: relative;
    visibility: hidden;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer;

    &:before {
      content: '';
      visibility: visible;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 2px solid #1e90ff;
    }

    &:checked {
      &:before {
        background-color: #1e90ff;
      }

      &:after {
        content: '';
        visibility: visible;
        display: block;
        height: 10px;
        width: 5px;
        position: absolute;
        top: 2px;
        left: 6px;
        font-size: 16px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(40deg) scale(-1, 1);
      }
    }
  }

  &__title {
    padding: 0 10px;
  }

  &__delete {
    flex-shrink: 0;
    width: 15px;
    margin-left: auto;
    cursor: pointer;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
