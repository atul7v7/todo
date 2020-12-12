import React,{useState} from 'react'
import { createTodo } from './action'
import { connect } from 'react-redux'

const CreateTodo = ({onCreate}) => {
    const [input, setInput] = useState('')
    return (
        <div>
            <h1>Creta todo</h1> 
            <input 
            placeholder = "create todo"
            value = {input}
            onChange = { e => setInput(e.target.value)}
            />
            <button onClick = { () => onCreate(input)} > Create Todo</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    onCreate : (data) => dispatch(createTodo(data))
})
export default connect(null, mapDispatchToProps)(CreateTodo)
