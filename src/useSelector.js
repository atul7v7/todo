// basically for seperating the state value extraction from component

// the mamin main of function is to return the desired value
// this function accept sate as parameter


import { createSelector } from 'reselect'

export const getTodos = state => state.todo

export const getCompletedTodos = state => {
    return state.todo.filter(todo => todo.isCompleted !== false)    
    
}

export const getInCompletedTodos = createSelector(getTodos,(todos) => {
    return todos.filter(todo => todo.isCompleted === false)
})