
import styles from "./styles.module.css"
import {useState,useEffect} from "react"





export default function Setting({word,remove,reset}) {

    const [showWord,setShowWord]=useState(false)

    useEffect(()=>{

        function onMouse(event){
          

          if( event.target.className==="styles_modal_content__p7xeC"){
            return

          }
          if( event.target.className==="styles_amodal__3h5W7"){
            return


          }
          if(event.target.className==="styles_btn__HQcIJ"){
            return

          }
          if(!event.target.className){
            return
          }
          if(event.target.tagName==="svg"){
            return

          }
          if(event.target.tagName==="path"){
            return

          }


          remove()

          




        }
        window.addEventListener("click",onMouse)

        return ()=>{
            window.removeEventListener("click",onMouse)
        }


    },[remove])


    return (
      <div>
          
        <div  className={styles.modal}>
          <div className={styles.modal_content}>
          {/* <span  className={styles.close}>&times;</span> */}
              <h2 className={styles.amodal}>Looks Like You Got Stuck</h2>
              <p className={styles.amodal}>Want To See The Answer ??</p>
              {
                showWord && <p>{word}</p>

              }
              
              <div className={styles.btns}>

              <button className={styles.btn} 
              onClick={()=>{
                setShowWord(prev=>!prev)

              }}
               >
                {
                  showWord ? "Hide Ans" : "Show Ans"
                }
                </button>
              <button className={styles.btn} 
              onClick={
                ()=>{
                  remove(true)
                }
              }
              >Continue</button>
              <button className={styles.btn} 
               onClick={
                ()=>{
                  reset(true)
                }
              }
               >Start Again</button>
              </div>
             
              
          </div>
      </div>
      </div>
    )
  }
  