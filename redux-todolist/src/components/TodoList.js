import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Count from './Count'
const {addTodo} = actions

class TodoList extends React.Component {
  constructor(){
    super()

    this.state = {
      title: '',
      count: ''
    }
  }

  handleChange = (event) => this.setState({title: event.target.value})

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault()
    this.props.addTodo({title: this.state.title})
    this.setState({title: ''})
  }


  render() {
    console.log(this.props)
    const allTodos = this.props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))
    console.log(allTodos)
    return (
      <div>
        <form>
          <input type='text' value={this.state.title} onChange={this.handleChange}></input>
          <input type='button' value="Add New Todo!" onClick={this.handleSubmit}></input>
        </form>
        <ul>
          {allTodos}
        </ul>
        <Count todos={allTodos}/>
      </div>
    )
  }

}

function mapStateToProps (state) {
  console.log(state)
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo: addTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
