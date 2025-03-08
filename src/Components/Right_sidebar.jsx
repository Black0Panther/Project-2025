import styles from './Right_sidebar.module.css'

const Right_sidebar=({todoName,todoId,dispatch})=>{
  
    return <>
     <div className={styles.Right_sidebar_container}>
        <div className={styles.first_col}>
            <div className={styles.first_col_top}>
           <li><input type="checkbox"  />Buy Grocery</li> 
            <img src="/images/clock.svg" alt="" />
            </div>
       
        <ul className={styles.first_col_items}>
            <li><a href=""><img src="/images/plus.svg" alt="" />Add Step</a></li>
            <li><a href=""><img src="/images/bell.svg" alt="" />Set Remainder</a></li>
            <li><a href=""><img src="/images/calendar.svg" alt="" />Add Due Date</a></li>
            <li><a href=""><img src="/images/repeat.svg" alt="" />Repeat</a></li>
        </ul>
       
        </div>
     </div>
    
    </>
}

export default Right_sidebar