
import styles from "./styles.module.css"


export default function modal({heading,message,reset}) {
  return (
    <div>
        
      <div   className={styles.modal}>
        <div id="modalOverlay" className={styles.modal_content}>
        {/* <span  className={styles.close}>&times;</span> */}
            <h2 id="point">{heading}</h2>
            <p id="point" title="something">{message}</p>
            <button className={styles.btn} onClick={reset} >Play Again</button>
            
        </div>
    </div>
    </div>
  )
}
