

'use client'
 
import React, { useState, useEffect } from 'react'
import Board from "./components/Body/Board"
import {words} from "./data/words"
import Keyboard from './components/keyboard/keyboard'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


import { Black_Ops_One } from 'next/font/google'
 
export const black_Ops_One=Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})









// words[Math.floor(Math.random() * words.length)].toLowerCase()

const maxGuess=7

const wordLength=5





export default function Home() {

  const [guesses,setGuesses]=useState([])

  const[demoGuess,setDemoGuess]=useState([])

  const [currentGuess,setCurrentGuess]=useState('')
  
  const [word,setWord]=useState("")
 
  useEffect(()=>{
    
    setWord(words[Math.floor(Math.random()*words.length)].toLowerCase())

  },[])
  console.log(word)

 




  function isAlphabet(character) {

    if(character.length>1){
      return false
    }

    // Convert the character to uppercase to handle both cases
    const uppercaseChar = character.toUpperCase();
    
    // Check if the character is between 'A' and 'Z' in the ASCII table
    return uppercaseChar >= 'A' && uppercaseChar <= 'Z';
  }

  async function wordCheck(word){
    
        var myHeaders = new Headers();
        myHeaders.append("apikey", "6QZ7utRWlPaZ4Ct1hN55Vu0JoyvejvSj");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        try{
         const response=await fetch(`https://api.apilayer.com/spell/spellchecker?q=${word}`, requestOptions)
         const result=await response.json()
        //  console.log(result.corrections.length)
        // console.log(result)
        return result.corrections.length>0


        }
        catch{
          return false
        }

        

          // .then(response => response.text())
          // .then(result => console.log(result))
          // .catch(error => console.log('error', error));
  }




  

  
  useEffect(() => {

    async function onKeyPressed(e) {



    
      if (e.key === "Enter") {
        
        
       
          
        if (guesses.length < maxGuess &&
          !guesses.includes(currentGuess) &&
          currentGuess.length === word.length
        ) {
          if(await wordCheck(currentGuess)){
            return
  
          }


          setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
          
          setCurrentGuess("");

        }
      } else if (e.key === "Backspace") {
        if (currentGuess.length > 0) {
          setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
          setDemoGuess([...guesses,currentGuess.slice(0, -1)])

        }
      } else if (isAlphabet(e.key)) {
        if(guesses.includes(word)){
          return
        }

        if (currentGuess.length > 4) {
          return;
        }
        else{
          setCurrentGuess((prev) => prev + e.key.toLowerCase());
          setDemoGuess([...guesses,currentGuess+e.key.toLowerCase()])
        }
        
        
      }
    }
  
    window.addEventListener("keydown", onKeyPressed);
  
    return () => {
      window.removeEventListener("keydown", onKeyPressed);
    };


  }, [word, guesses, currentGuess,setDemoGuess]);

  // console.log(currentGuess)
  // console.log(demoGuess)


  function screenKeyBoard(char){
    console.log(char)

   
  }







  return (
    <div>
     
      <Board guesses={demoGuess} word={word} oGuess={guesses}/>

  
     
     

    
     
     <Keyboard change={screenKeyBoard} word={word} guesses={guesses}/>
  
     
    </div>
 
  )
}



 
