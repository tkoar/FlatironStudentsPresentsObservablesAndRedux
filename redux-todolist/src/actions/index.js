let nextTodoId = 0
export function addTodo(text) {
  return {type: 'ADD_TODO',
    id: nextTodoId++,
    title: text.title}
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
