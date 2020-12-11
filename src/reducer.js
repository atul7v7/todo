import { CREATE_TODO, UPDATE_TODO, DELETE_TODO} from './action'

const initialstate = []

export const todoReducer = (state = initialstate, action) => {
    const {type, payload} = action
    switch(type){
        case CREATE_TODO:
            const {todo} = payload
            return state.concat(todo)
        case DELETE_TODO:
            const {id } = payload
            return(state.map(todo => todo.name !== id))
        case UPDATE_TODO:
            const {id} = payload
            return (
                state.map(todod => {
                    if(todo.name === id){
                        todo.name = todo.name + 'updated'
                    }
                    return todo
                })
            )
        default:
            return state
    }
}