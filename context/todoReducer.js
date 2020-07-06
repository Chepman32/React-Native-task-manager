import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAN_ERROR, FETCH_TODOS } from "./types"

const handlers = {
  [ADD_TODO]: (state, { title, id }) => ({
    ...state,
        todos: [...state.todos, {
          id: id,
        title
        }],
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id != id)
  }),
  [UPDATE_TODO] : (state, {id, title}) => ({
    todos: state.todos.map(t => {
      if (t.id === id) {
        t.title = title
      }
      return t
    })
  }),
  [SHOW_LOADER]: state => ({...state, isLoading: true}),
  [HIDE_LOADER]: state => ({...state, isLoading: false}),
  [SHOW_ERROR]: (state, {error}) => ({...state, error}),
  [CLEAN_ERROR]: (state) => ({...state, error: null}),
  [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),
  DEFAULT: state => state
}
export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}