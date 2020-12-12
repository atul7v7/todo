import React from 'react'
import { deleteTodo } from './action'

const TodoItem = ({ todo, removeTodo, updateTodo, markAsComplete }) => {
    console.log("todo props in TodoItem", todo)
    return (
        <div>
            <h3> {todo.text} </h3>
            <div>
                <button onClick={() => updateTodo(todo.text)} > Update </button>
                <button onClick={() => removeTodo(todo.id)} >  Delete </button>
                <button onClick={() => markAsComplete(todo.id)} > Mark As complete </button>
            </div>
        </div>
    )
}


export default TodoItem
