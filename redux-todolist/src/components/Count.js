import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions'

class Count extends React.Component {
  render() {
    return (
      <div>
        Tasks Left: {this.props.todos.filter(el => !el.completed).length}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Count)
