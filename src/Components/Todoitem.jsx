import { useState } from "react"
import styles from "./Todoitem.module.css"
import Right_sidebar from "./Right_sidebar";


const Todoitem=({todoName,todoId,dispatch})=>{
     const [Task,setTask]=useState();
     const handleDelete=()=>{
          dispatch({ type:"Remove",payload:todoId});
         }
    return <>
   <ul className={styles.tasks}>
            <li className={styles.todo_item}> <input type="checkbox" /> {todoName} <div className={styles.delete_btn}> <button onClick={handleDelete}>Delete</button></div> </li> 
         </ul>

    </>
}

export default Todoitem