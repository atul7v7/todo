import React,{useState} from 'react'
import { createThunk } from './thunk'
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
    onCreate : (data) => dispatch(createThunk(data))
})
export default connect(null, mapDispatchToProps)(CreateTodo)
