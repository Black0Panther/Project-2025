import styles from './TaskList.module.css'
import { SlCalender } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";
import Todoitem from './Todoitem';
import { useReducer, useState } from 'react';
import Todoitems from './Todoitems';
import TodoReducer from './TodoReducer';


const TaskList=({item,onNewItem})=>{
     const [Item,setItem]=useState([]);
        const [todo,dispatch] = useReducer(TodoReducer,[]);
        
        const handleAdd=()=>{
           if(Item.trim()!=""){
            dispatch({
                type:"Add",
                payload:Item
            })
            setItem("");
           }
        }
    return <>
        <div className={styles.TaskList_container}>
         <h4>To do</h4>
         <div className={styles.todo_input_container}>
         <input type="text" placeholder="Add a Task " value={Item} onChange={(e)=> setItem(e.target.value)} className={styles.todo_input}/>


         <div className={styles.edit_options}>
            <div className={styles.left_options}>
            <CiBellOn />
            <FaRepeat />
            <SlCalender />
            </div>
            
         </div>
         <button onClick={handleAdd} className={styles.right_btn}>Add Task</button>
         </div>
         <Todoitems todos={todo} dispatch={dispatch}></Todoitems>
        
        </div>
    </>
}

export default TaskList;