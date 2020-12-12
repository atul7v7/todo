import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer} from './reducer'

const rootReducer = combineReducers({
    todo : todoReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))