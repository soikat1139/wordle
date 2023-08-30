import styles from "./styles.module.css"
import {useState} from 'react'




export default function Keyboard({change,word,guesses}) {

    const [clsNames,setClsNames]=useState({})


    function checkSim(char,idx,arr){

        const splitSolution=word.toLowerCase().split("")

        let isSimiliar=true
        

        for(let i=0;i<arr.length;i++){

            if(arr[i]!==splitSolution[i]){
                isSimiliar=false
            }
        }
        if(isSimiliar){

            const keys=Object.keys(clsNames)

            for(let x of keys){
                setClsNames((prev)=>{
                    return {...prev,
                     [x]:"wordIdx"}
                 })

            }

            return "wordIdx"

        }
        const indx=splitSolution.findIndex((el)=>{
            return el===char
        })
        
        if(splitSolution.includes(char) && indx===idx){

            
                setClsNames((prev)=>{
                   return {...prev,
                    [char]:"wordIdx"}
                })
                     
        }
        else if(splitSolution.includes(char)){
            if(!clsNames[char]){
                setClsNames((prev)=>{
                    return {...prev,
                     [char]:"word"}
                 })

            }
        
        }
        else{
            setClsNames((prev)=>{
                return {...prev,
                 [char]:"noMatch"}
             })
            
        }

    }

    console.log(clsNames)




    for(let words in guesses){
        const splitWord=words.toLowerCase().split("")

        for(let i=0;i<splitWord.length;i++){

            checkSim(splitWord[i],i,splitWord)


        }

    }











  return (
    <div className={styles.kbd}>
        <div className={styles.board} onClick={()=>{change("Q")}} >
            Q

        </div>
        <div className={styles.board} onClick={()=>{change("W")}} >
            W

        </div>
      
        <div className={styles.board} onClick={()=>{change("E")}}>
            E

        </div>
        <div className={styles.board} onClick={()=>{change("R")}}>
            R

        </div>
        <div className={styles.board} onClick={()=>{change("T")}}>
            T

        </div>
        <div className={styles.board} onClick={()=>{change("Y")}}>
            Y

        </div>
        <div className={styles.board} onClick={()=>{change("U")}}>
            U

        </div>
        <div className={styles.board} onClick={()=>{change("I")}}>
            I

        </div>
        <div className={styles.board} onClick={()=>{change("O")}}>
            O

        </div>
        <div className={styles.board} onClick={()=>{change("P")}}>
            P

        </div>
       
      
    </div>
  )
}
