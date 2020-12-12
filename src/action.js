export const READ_TODO = 'READ_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const MARK_AS_COMPLETE = "MARK_AS_COMPLETE"

export const createTodo = (todo) => ({
    type : CREATE_TODO,
    payload : {todo}
})

export const deleteTodo = (deletedTodo) => ({
    type : DELETE_TODO,
    payload : {deletedTodo}
})

export const updateTodo = (id) => ({
    type : UPDATE_TODO,
    payload : {id}
})

export const readTodo = (todos) => ({
    type : READ_TODO,
    payload : {todos}
})

export const markAsComplete = (updatedState) =>({
    type : MARK_AS_COMPLETE,
    payload : {updatedState}
})