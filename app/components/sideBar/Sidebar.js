

import styles from "./styles.module.css"



export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        
      <footer className={styles.footer}>
        <div className={styles.line}>

        </div>
        <div className={styles.btns}>
        <button className={styles.btn} >
            SUBSCRIBE
        </button>
        <button className={styles.btn} >
            LOG IN
        </button>

        </div>
       

      </footer>
    </div>
  )
}
