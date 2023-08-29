
import styles from "./style.module.css"

export default function Board({guesses,word,oGuess}) {

    
    // const guess=["album","apple","known","bless","abcde","man  "]
    const board=[];
    for(let i=0;i<6;i++){
        let demo=''
        if(i<guesses.length){
            if(guesses[i].length===5){
                demo=guesses[i]
            }
            else{
                demo=guesses[i]
                for(let j=guesses[i].length;j<=4;j++){
                    demo+=" "
                }
            }
        }
        else{
            for(let j=0;j<=4;j++){
                demo+=" "
            }
        }
        board.push(demo)



    }
    // console.log(board)
    // console.log(board[4].length)

    function checkSim(char,idx){
        let splitWord=word.toUpperCase().split("")
        const indx=splitWord.findIndex((el)=>{
            return el===char
        })
        
        if(splitWord.includes(char) && indx===idx){

            return "wordIdx"
            
        }
        else if(splitWord.includes(char)){
            return "word"
        }
        else{
            return "board"
        }

    }

   




  return (
    <div className={styles.body}>

        {
            board.map((words,idx)=>{
                const word=words.toUpperCase().split("")

                return (
                    <div key={idx} className={styles.divs} >
                        {
                            word.map((char,idx2)=>{
                                return (
                                    <div key={idx2}className={styles.board}>
                                        {char}


                                    </div>
                                )

                            })
                        }

                    </div>
                )

            })
        }
    


      
    </div>
  )
}
