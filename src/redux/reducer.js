import { ADD_TASK, COMPLITE, DELETE_TASK, EDIT, FILTER } from "./actionTypes";

const init = {

  tasks:[
   
    {
        id:Math.random(),
        action:'Wake Up',
        isDone:true
    }
        ,

    {
        id:Math.random(),
        action:'Go Out',
        isDone:false
    }

],

   filter:false




}


// const addobject = (text)=> 

//      [ {id:Math.random(),action:text,isDone:true}];





const reducer = (state = init,{type,payload})=>{

    switch (type) {
        case DELETE_TASK:
            return{
                ...state,tasks:state.tasks.filter(el=>el.id!==payload)
            }

            case COMPLITE:

            return{
                ...state,tasks:state.tasks.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            }

         case ADD_TASK:
             return{

                ...state,tasks:[...state.tasks,payload]
             }
            
             case FILTER:
                 return{

                    ...state,filter:!state.filter
                 }

                 case EDIT:
                     return{

                        ...state,tasks:state.tasks.map(el=>el.id===payload.id?payload:el)
                     }
    
        default:
            return state
    }
}

export default reducer