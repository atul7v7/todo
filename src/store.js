const {createStore, combineReducer} from 'redux'

import {todoReducer} from './reducer'

const rootReducer = combineReducer({
    todo : todoReducer
})


export const store = createStore(rootReducer)