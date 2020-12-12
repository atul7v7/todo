import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {deleteTodo,markAsComplete,updateTodo} from './action'
import { readThunk,createThunk, markAsCompleteThunk, deleteThunk } from './thunk'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo, readThunk, markAsComplete}) => {
    useEffect(() => readThunk(),[])
    return(
        <div>
            {
                todos.map(todo => <TodoItem key = {todo.id} markAsComplete = {markAsComplete} todo = {todo} removeTodo = {removeTodo} updateTodo = {updateTodo} />)
            }
        </div>
    )
} 

const mapStateToProps = (state) => ({
    todos : state.todo
})
const mapDispatchToProps = dispatch =>({
    removeTodo : (id) => dispatch(deleteThunk(id)),
    updateTodo : id => dispatch(updateTodo(id)),
    readThunk : () => dispatch(readThunk()),
    markAsComplete : (id) => dispatch(markAsCompleteThunk(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);