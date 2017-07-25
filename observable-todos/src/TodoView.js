import React from 'react'
import mobxReact from 'mobx-react'
const {observer} = mobxReact

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
);

export default TodoView
