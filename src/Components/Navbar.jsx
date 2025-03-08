import styles from "./Navbar.module.css"
const Navbar=()=>{

    return <>
           <div className={styles.Navbar_container}>
            <div className={styles.Navbar_left}>
                <ul> 
                    <li><img src="/images/menu.png" alt="" /></li>
                    <li className={styles.logo_container}><img src="/images/logomark.png" alt="logo" />
                    <span>DoIt</span>
                    </li>
                </ul>
            </div>

            <div className={styles.Navbar_right}>
                <ul>
                    <li><img src="/images/search.png" alt="" /></li>
                    <li><img src="/images/Icon.png" alt="" /></li>
                    <li><img src="/images/dark_mode.png" alt="" /></li>
                </ul>
            </div>
           </div>
    </>
}

export default Navbar