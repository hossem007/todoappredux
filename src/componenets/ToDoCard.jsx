import React from 'react'
import { useDispatch } from 'react-redux'
import { complite, deleteTask } from '../redux/action'
import EditTask from './EditTask'


const ToDoCard = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2 style={task.isDone?{textDecoration:'line-through',color:'red'}:null}>{task.action}</h2>
            <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
            <button onClick={()=>dispatch(complite(task.id))}>Complite</button>
            <EditTask task={task}/>
        </div>
    )
}

export default ToDoCard
