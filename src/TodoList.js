import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {deleteTodo,markAsComplete,updateTodo} from './action'
import { readThunk,createThunk, markAsCompleteThunk, deleteThunk } from './thunk'
import { getTodos, getCompletedTodos, getInCompletedTodos } from './useSelector'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo, readThunk, markAsComplete, completed, incompleted}) => {
    useEffect(() => readThunk(),[])
    return(
        <div>
            <h1> ALL TODOS</h1>
            {
                todos.map(todo => <TodoItem key = {todo.id} markAsComplete = {markAsComplete} todo = {todo} removeTodo = {removeTodo} updateTodo = {updateTodo} />)
            }
            <h1> Completed Todos</h1>
            {
                completed.map(todo => <TodoItem key = {todo.id} markAsComplete = {markAsComplete} todo = {todo} removeTodo = {removeTodo} updateTodo = {updateTodo} />)
            }
            <h1> InCompleted Todos</h1>
            {
                incompleted.map(todo => <TodoItem key = {todo.id} markAsComplete = {markAsComplete} todo = {todo} removeTodo = {removeTodo} updateTodo = {updateTodo} />)
            }
        </div>
    )
} 

const mapStateToProps = (state) => ({
    todos : getTodos(state),
    completed : getCompletedTodos(state),
    incompleted : getInCompletedTodos(state)
})
const mapDispatchToProps = dispatch =>({
    removeTodo : (id) => dispatch(deleteThunk(id)),
    updateTodo : id => dispatch(updateTodo(id)),
    readThunk : () => dispatch(readThunk()),
    markAsComplete : (id) => dispatch(markAsCompleteThunk(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);