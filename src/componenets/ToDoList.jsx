import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask } from '../redux/action'
import ToDoCard from './ToDoCard'

const ToDoList = () => {
    const {tasks,filter} = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(tasks)
    return (
        <div>
            <button onClick={()=>dispatch(filterTask())}>{filter?'ALL':'Filter'}</button>
            {!filter?
                tasks.map((el,i)=>
                    
                    <ToDoCard task={el} key={i} />
                    
                    ):tasks.filter((el)=>el.isDone).map((el,i)=><ToDoCard task={el} key={i}/>)
            }
        </div>
    )
}

export default ToDoList
