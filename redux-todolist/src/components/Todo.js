import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
const {toggleTodo} = actions

class Todo extends React.Component {

  handleClick = (event) => this.props.toggleTodo(event.target.id)

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.finished}
          id={this.props.todo.id}
          onClick={this.handleClick}
        />{this.props.todo.title}
      </li>
    )
  }

}

function mapStateToProps (state) {
  console.log(state)
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleTodo: toggleTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
