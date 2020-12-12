import { CREATE_TODO, UPDATE_TODO, DELETE_TODO} from './action'

const initialstate = []

export const todoReducer = (state = initialstate, action) => {
    const {type, payload} = action
    switch(type){
        case CREATE_TODO:
            const {todo} = payload
            const newTodo = {
                text : todo,
                isCompleted : false
            }
            return state.concat(newTodo)
        case DELETE_TODO:
            const {id } = payload
            return state.filter(todo => todo.text !== id)
            
        case UPDATE_TODO:{
            const {id} = payload
            return (
                state.map(todo => {
                    if(todo.text === id){
                        todo.text = todo.text + 'updated'
                    }
                    return todo
                })
            )
        }
        default:
            return state
    }
}