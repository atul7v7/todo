import React from 'react'
import { deleteTodo } from './action'

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    return (
        <div>
            <h3> { todo.name } </h3>
            <div> 
                <button onClick = {() => updateTodo(todo.name)} > Update </button>
                <button onClick = {() => deleteTodo(todo.name)} >  Delete </button>
            </div>
        </div>
    )
}


export default TodoItem
