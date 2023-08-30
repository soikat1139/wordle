
import styles from "./styles.module.css"


export default function modal({heading,message,reset}) {
  return (
    <div>
        
      <div  className={styles.modal}>
        <div className={styles.modal_content}>
        {/* <span  className={styles.close}>&times;</span> */}
            <h2>{heading}</h2>
            <p>{message}</p>
            <button className={styles.btn} onClick={reset} >Play Again</button>
            
        </div>
    </div>
    </div>
  )
}
