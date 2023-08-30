import styles from "./styles.module.css"
import {useState,useEffect} from 'react'




export default function Keyboard({change,word,guesses}) {

    const [clsNames,setClsNames]=useState({})

    // console.log(`guessses : ${guesses}`)

    

    


    useEffect(()=>{
        const tempObj={}
        let count=0
        function checkSim(char,idx,arr){
            console.log(char)
            console.log(idx)
            console.log(arr)
            console.log("Checking")
    
            const splitSolution=word.toLowerCase().split("")
    
            let isSimiliar=true
            
    
            for(let i=0;i<arr.length;i++){
    
                if(arr[i]!==splitSolution[i]){
                    isSimiliar=false
                }
            }
    
            if(isSimiliar){
    
                for(let x of splitSolution){
    
                    tempObj[x]="wordIdx"
    
                }
    
               
    
            }
            const indx=splitSolution.findIndex((el)=>{
                return el===char
            })
            
            if(splitSolution.includes(char) && indx===idx){
                tempObj[char]="wordIdx"                    
            }
            else if(splitSolution.includes(char)){
                if(!tempObj[char]){
                    // setClsNames((prev)=>{
                    //     return {...prev,
                    //      [char]:"word"}
                    //  })
    
                    tempObj[char]="word"
    
                }
            
            }
            else{
                // setClsNames((prev)=>{
                //     return {...prev,
                //      [char]:"noMatch"}
                //  })
    
                tempObj[char]="noMatch"
                
            }
    
        }
    
        
    
    
    
    
        for(let words of guesses){
            const splitWord=words.toLowerCase().split("")
            console.log(splitWord)
    
            for(let i=0;i<splitWord.length;i++){
    
                checkSim(splitWord[i],i,splitWord)
    
    
            }
            count+=1
    
        }

        if(count===guesses.length){
            console.log("hELLO")
            setClsNames(tempObj)
        }




    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[word,guesses])




    // setClsNames(tempObj)



    console.log(clsNames)







  return (
    <div className={styles.kbd}>
        <div className={styles.direction}>
        <div  className={clsNames["q"] ? styles[clsNames["q"]] : styles.board} onClick={()=>{change("Q")}} >
            Q

        </div>
        <div className={clsNames["w"] ? styles[clsNames["w"]] : styles.board} onClick={()=>{change("W")}} >
            W

        </div>
      
        <div className={clsNames["e"] ? styles[clsNames["e"]] : styles.board} onClick={()=>{change("E")}}>
            E

        </div>
        <div className={clsNames["r"] ? styles[clsNames["r"]] : styles.board} onClick={()=>{change("R")}}>
            R

        </div>
        <div className={clsNames["t"] ? styles[clsNames["t"]] : styles.board} onClick={()=>{change("T")}}>
            T

        </div>
        <div className={clsNames["y"] ? styles[clsNames["y"]] : styles.board} onClick={()=>{change("Y")}}>
            Y

        </div>
        <div className={clsNames["u"] ? styles[clsNames["u"]] : styles.board} onClick={()=>{change("U")}}>
            U

        </div>
        <div className={clsNames["i"] ? styles[clsNames["i"]] : styles.board} onClick={()=>{change("I")}}>
            I

        </div>
        <div className={clsNames["o"] ? styles[clsNames["o"]] : styles.board} onClick={()=>{change("O")}}>
            O

        </div>
        <div className={clsNames["p"] ? styles[clsNames["p"]] : styles.board} onClick={()=>{change("P")}}>
            P

        </div>
        </div>
        <div className={styles.direction}>

        <div className={clsNames["a"] ? styles[clsNames["a"]] : styles.board} onClick={()=>{change("A")}}>
            A

        </div>
        <div className={clsNames["s"] ? styles[clsNames["s"]] : styles.board} onClick={()=>{change("S")}}>
            S

        </div>
        <div className={clsNames["d"] ? styles[clsNames["d"]] : styles.board} onClick={()=>{change("D")}}>
            D

        </div>
        <div className={clsNames["f"] ? styles[clsNames["f"]] : styles.board} onClick={()=>{change("F")}}>
            F

        </div>
        <div className={clsNames["g"] ? styles[clsNames["g"]] : styles.board} onClick={()=>{change("G")}}>
            G

        </div>
        <div className={clsNames["h"] ? styles[clsNames["h"]] : styles.board} onClick={()=>{change("H")}}>
            H

        </div>
        <div className={clsNames["j"] ? styles[clsNames["j"]] : styles.board} onClick={()=>{change("J")}}>
            J

        </div>
        <div className={clsNames["k"] ? styles[clsNames["k"]] : styles.board} onClick={()=>{change("K")}}>
            K

        </div>
        <div className={clsNames["l"] ? styles[clsNames["l"]] : styles.board} onClick={()=>{change("L")}}>
            L

        </div>








        </div>

        <div className={styles.direction}>

        <div className={clsNames["Enter"] ? styles[clsNames["Enter"]] : styles.enter} onClick={()=>{change("Enter")}}>
            Enter

        </div>
        <div className={clsNames["z"] ? styles[clsNames["z"]] : styles.board} onClick={()=>{change("Z")}}>
            Z

        </div>

        <div className={clsNames["x"] ? styles[clsNames["x"]] : styles.board} onClick={()=>{change("X")}}>
            X

        </div>

        <div className={clsNames["c"] ? styles[clsNames["c"]] : styles.board} onClick={()=>{change("C")}}>
            C

        </div>

        <div className={clsNames["v"] ? styles[clsNames["v"]] : styles.board} onClick={()=>{change("V")}}>
            V

        </div>
        <div className={clsNames["b"] ? styles[clsNames["b"]] : styles.board} onClick={()=>{change("B")}}>
            B

        </div>
        <div className={clsNames["n"] ? styles[clsNames["n"]] : styles.board} onClick={()=>{change("N")}}>
            N

        </div>
        <div className={clsNames["m"] ? styles[clsNames["m"]] : styles.board} onClick={()=>{change("M")}}>
            M

        </div>
        <div className={clsNames["Enter"] ? styles[clsNames["Enter"]] : styles.enter} onClick={()=>{change("BackSpace")}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="40"><path d="M367.71-220.001q-21.923 0-40.367-10.539-18.445-10.538-31.035-28.385L140.001-480l156.307-220.306q12.59-17.846 31-28.769 18.41-10.924 40.385-10.924h389.742q25.705 0 44.134 18.43 18.43 18.429 18.43 44.134v394.87q0 25.705-18.43 44.134-18.429 18.43-44.134 18.43H367.71Zm402.034-50.255V-689.744v419.488Zm-407.297 0h394.988q4.616 0 8.462-3.847 3.847-3.846 3.847-8.462v-394.87q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847H362.411q-5.77 0-10.963 2.885-5.192 2.885-8.269 7.116L202.153-480l141.062 199.743q3.077 4.231 8.269 7.116 5.193 2.885 10.963 2.885Zm82.835-66.566 107.794-107.794 107.795 107.794 36.051-35.793L588.46-480l107.385-107.385-35.794-35.793-106.975 107.794-107.794-107.794-35.794 35.793L517.693-480 409.488-372.615l35.794 35.793Z"/></svg>

        </div>














        </div>
       
      
    </div>
  )
}
