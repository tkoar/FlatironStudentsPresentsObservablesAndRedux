import React from 'react'
import mobxReact from 'mobx-react'
import Todo from './Todo'
import TodoView from './TodoView'
const {observer} = mobxReact
const {Component} = React


@observer
export default class TodoListView extends Component {

 		addTodo = (event) => {
    	event.preventDefault()
      this.props.todoList.todos.push(new Todo(event.target.children[0].value))
      event.target.children[0].value = ""
    }

    render() {
        return <div>

            <form onSubmit={this.addTodo}>
              <input type='text'></input>
              <input type='submit' value="Add New Todo!"></input>
            </form>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks Left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}
