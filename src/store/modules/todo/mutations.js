export const ADD_TODO_ITEM = (state, title) => {
    state.todoList.push({
        finished: false,
        title: title,
    })
}
export const DELETE_TODO_ITEM = (state, todo) => {
    let todoList = state.todoList
    todoList.splice(todoList.indexOf(todo), 1)
}
export const INIT_TODOS_LIST = (state, todos) => {
    state.todoList = todos
}
