export const addTodoItem = ({commit}, title) => commit('ADD_TODO_ITEM', title)
export const deleteTodoItem = ({commit}, todo) => commit('DELETE_TODO_ITEM', todo)
export const initTodosList = ({commit}, todos) => commit('INIT_TODOS_LIST', todos)
