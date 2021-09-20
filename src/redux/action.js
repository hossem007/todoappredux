import { ADD_TASK, COMPLITE, DELETE_TASK, EDIT, FILTER } from "./actionTypes"

export const deleteTask = (id)=>{

    return{
        type:DELETE_TASK,
        payload:id
    }
}


export const complite = (id)=>{

    return{
        type:COMPLITE,
        payload:id
    }
}

export const addTask =(task)=>{

    return{
        type:ADD_TASK,
        payload:task
    }
}


export const filterTask =()=>{

    return{
        type:FILTER
    }
}

export const editTask = (editing)=>{

    return{
        type:EDIT,
        payload:editing
    }
}