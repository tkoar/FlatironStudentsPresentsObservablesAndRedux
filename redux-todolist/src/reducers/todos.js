const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ]
    // case 'COUNT_TODOS':
    //   return state.length
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id.toString() === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo)
    default:
      return state
  }
}

export default todos
