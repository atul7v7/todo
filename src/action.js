export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'


export const createTdod = (todo) => ({
    type : CREATE_TODO,
    payload : {todo}
})

export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : {id}
})

export const updateTodo = (id) => ({
    type : UPDATE_TODO,
    payload : {id}
})