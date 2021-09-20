import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/action'

const AddTask = () => {

    const [text, setText] = useState('')
    const {tasks} = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(tasks)
    const handleSubmit =(e)=>{

        

        e.preventDefault()

        const newTask = {

            id:Math.random(),
            action:text,
            isDone:false
        }
        text.trim()===''?alert('please full the input'):
        dispatch(addTask(newTask));
        setText('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
