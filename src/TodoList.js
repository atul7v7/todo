import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo,updateTodo} from './action'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <div>
            {
                todos.map(todo => <TodoItem key = {todo.id} todo = {todo} removeTodo = {removeTodo} updateTodo = {updateTodo} />)
            }
        </div>
    )
} 

const mapStateToProps = (state) => ({
    todos : state.todo
})
const mapDispatchToProps = dispatch =>({
    removeTodo : (id) => dispatch(deleteTodo(id)),
    updateTodo : id => dispatch(updateTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);