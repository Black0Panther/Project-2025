
import styles from "./Sidebar.module.css"
import PieChart from "./PieChart"

const Sidebar=()=>{
    return <>
    <div className={styles.Sidebar_container}>
        <div className={styles.profile_section}>
            <div className={styles.profile_pic}>
            <img src="/images/avatar.png" alt="" />
            <p>Hey, ABCD</p>
            </div>
            <ul className={styles.sidebar_first}>
                <li><a href=""><img src="/images/menu.svg" alt="" /> All tasks </a></li>
                <li className={styles.sidebar_first_active}><a href=""><img src="/images/calendar.svg" alt="" /> Today</a></li>
                <li><a href=""><img src="/images/iwwa_assign.svg" alt="" /> Important</a></li>
                <li><a href=""><img src="/images/clock2.svg" alt="" /> Planned</a></li>
                <li><a href=""><img src="/images/ph_star.svg" alt="" /> Assigned to me</a></li>
            </ul>
            <ul className={styles.add_list}>
               <li> <img src="/images/Vector.svg" alt="" /> <p>Add List</p></li>
            </ul>
            <div className={styles.chart}>
                <div className={styles.chart_inner}>
                <h4>Todays Task</h4>
                <h3><b>11</b></h3>
                <PieChart></PieChart>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Sidebar