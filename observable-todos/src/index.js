import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import TodoListView from './TodoListView'

const store = new TodoList()

ReactDOM.render(
  <TodoListView todoList={store} />,
  document.getElementById('root')
)
