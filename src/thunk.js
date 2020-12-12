import {readTodo, createTodo, updateTodo, markAsComplete, deleteTodo} from './action'

export const readThunk = () => async (dispatch, getState) => {
    const res =await fetch('http://localhost:8080/todos')
    const data = await res.json()
    await console.log('thunk call',data)
    await dispatch(readTodo(data))
} 

export const createThunk = (text) => async(dispatch)=> {
    const res = await fetch('http://localhost:8080/todos',{
        headers: {
            'Content-Type': 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({text})
    })
    const data = await res.json()
    console.log('response from api ', data)
    await dispatch(createTodo(data))
}

export const markAsCompleteThunk = (id) => async(dispatch) => {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
        headers :{
            'Content-Type' : 'application/json'
        },
        method :'POST',
    })
    const data = await response.json() // upadated state
    await dispatch(markAsComplete(data))
}

export const deleteThunk = (id) => async dispatch => {
    try{
        const res = await fetch(`http://localhost:8080/todos/${id}`,{
            method :'delete',
        })
        const deletedTodo = await res.json()
        await console.log("deleted todo", deleteTodo)
        await dispatch(deleteTodo(deletedTodo))
    }catch(e){
        console.log('deleteing error', e)
    }
}