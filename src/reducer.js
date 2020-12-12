import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, READ_TODO, MARK_AS_COMPLETE} from './action'

const initialstate = []

export const todoReducer = (state = initialstate, action) => {
    const {type, payload} = action
    switch(type){
        case CREATE_TODO:
            const {todo} = payload
            return state.concat(todo)
        case DELETE_TODO:
            const {deletedTodo} = payload
            return state.filter(todo => todo.id !== deletedTodo.id)
            
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
        case READ_TODO : {
            const {todos} = payload;
            return todos
        }
        case MARK_AS_COMPLETE :{
            const {updatedState} = payload
            console.log(updatedState)
            return state.map(todo => {
                if(todo.id === updatedState.id){
                    todo.isCompleted = true
                }
                return todo
            })
            
        }
        default:
            return state
    
        }
}