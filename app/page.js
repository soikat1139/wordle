

'use client'
 
import React, { useState, useEffect } from 'react'
import Board from "./components/Body/Board"





const words=["ALBUM","HINGE","MONEY","SCRAP","GAMER","GLASS","SCOUR","BEING","DELVE","YIELD","METAL","TIPSY","SLUNG","FARCE","GECKO","SHINE","CANNY","MIDST","BADGE","HOMER","TRAIN","STORY","HAIRY","FORGO","LARVA","TRASH","ZESTY","SHOWN","HEIST","ASKEW","INERT","OLIVE","PLANT","OXIDE","CARGO","FOYER","FLAIR","AMPLE","CHEEK","SHAME","MINCE","CHUNK","ROYAL","SQUAD","BLACK","STAIR","SCARE","FORAY","COMMA","NATAL","SHAWL","FEWER","TROPE","SNOUT","LOWLY","STOVE","SHALL","FOUND","NYMPH","EPOXY","DEPOT","CHEST","PURGE","SLOSH","THEIR","RENEW","ALLOW","SAUTE","MOVIE","CATER","TEASE","SMELT","FOCUS","TODAY","WATCH","LAPSE","MONTH","SWEET","HOARD","CLOTH","BRINE","AHEAD","MOURN","NASTY","RUPEE","CHOKE","CHANT","SPILL","VIVID","BLOKE","TROVE","THORN","OTHER","TACIT","SWILL","DODGE","SHAKE","CAULK","AROMA","CYNIC","ROBIN","ULTRA","ULCER","PAUSE","HUMOR","FRAME","ELDER","SKILL","ALOFT","PLEAT","SHARD","MOIST","THOSE","LIGHT","WRUNG","COULD","PERKY","MOUNT","WHACK","SUGAR","KNOLL","CRIMP","WINCE","PRICK","ROBOT","POINT","PROXY","SHIRE","SOLAR","PANIC","TANGY","ABBEY","FAVOR","DRINK","QUERY","GORGE","CRANK","SLUMP","BANAL","TIGER","SIEGE","TRUSS","BOOST","REBUS","UNIFY","TROLL","TAPIR","ASIDE","FERRY","ACUTE","PICKY","WEARY","GRIPE","CRAZE","PLUCK","BRAKE","BATON","CHAMP","PEACH","USING","TRACE","VITAL","SONIC","MASSE","CONIC","VIRAL","RHINO","BREAK","TRIAD","EPOCH","USHER","EXULT","GRIME","CHEAT","SOLVE","BRING","PROVE","STORE","TILDE","CLOCK","WROTE","RETCH","PERCH","ROUGE","RADIO","SURER","FINER","VODKA","HERON","CHILL","GAUDY","PITHY","SMART","BADLY","ROGUE","GROUP","FIXER","GROIN","DUCHY","COAST","BLURT","PULPY","ALTAR","GREAT","BRIAR","CLICK","GOUGE","WORLD","ERODE","BOOZY","DOZEN","FLING","GROWL","ABYSS","STEED","ENEMA","JAUNT","COMET","TWEED","PILOT","DUTCH","BELCH","OUGHT","DOWRY","THUMB","HYPER","HATCH","ALONE","MOTOR","ABACK","GUILD","KEBAB","SPEND","FJORD","ESSAY","SPRAY","SPICY","AGATE","SALAD","BASIC","MOULT","CORNY","FORGE","CIVIC","ISLET","LABOR","GAMMA","LYING","AUDIT","ROUND","LOOPY","LUSTY","GOLEM","GONER","GREET","START","LAPEL","BIOME","PARRY","SHRUB","FRONT","WOOER","TOTEM","FLICK","DELTA","BLEED","ARGUE","SWIRL","ERROR","AGREE","OFFAL","FLUME","CRASS","PANEL","STOUT","BRIBE","DRAIN","YEARN","PRINT","SEEDY","IVORY","BELLY","STAND","FIRST","FORTH","BOOBY","FLESH","UNMET","LINEN","MAXIM","POUND","MIMIC","SPIKE","CLUCK","CRATE","DIGIT","REPAY","SOWER","CRAZY","ADOBE","OUTDO","TRAWL","WHELP","UNFED","PAPER","STAFF","CROAK","HELIX","FLOSS","PRIDE","BATTY","REACT","MARRY","ABASE","COLON","STOOL","CRUST","FRESH","DEATH","MAJOR","FEIGN","ABATE","BENCH","QUIET","GRADE","STINK","KARMA","MODEL","DWARF","HEATH","SERVE","NAVAL","EVADE","FOCAL","BLUSH","AWAKE","HUMPH","SISSY","REBUT","CIGAR"]






// words[Math.floor(Math.random() * words.length)].toLowerCase()

const maxGuess=7

const wordLength=5





export default function Home() {

  const [guesses,setGuesses]=useState([])

  const[demoGuess,setDemoGuess]=useState([])

  const [currentGuess,setCurrentGuess]=useState('')
  const [isEvaluate,setEvaluate]=useState(false)
  const [word,setWord]=useState("")
 
  useEffect(()=>{
    
    setWord(words[Math.floor(Math.random()*words.length)].toLowerCase())

  },[])

  console.log(word)




  function isAlphabet(character) {
    // Convert the character to uppercase to handle both cases
    const uppercaseChar = character.toUpperCase();
    
    // Check if the character is between 'A' and 'Z' in the ASCII table
    return uppercaseChar >= 'A' && uppercaseChar <= 'Z';
  }




  

  
  useEffect(() => {
    function onKeyPressed(e) {
      if (e.key === "Enter") {
        
        console.log(currentGuess.length)
        if (
          guesses.length < maxGuess &&
          !guesses.includes(word) &&
          currentGuess.length === word.length
        ) {
          setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
          
          setCurrentGuess("");

        }
      } else if (e.key === "Backspace") {
        if (currentGuess.length > 0) {
          setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
          setDemoGuess([...guesses,currentGuess.slice(0, -1)])

        }
      } else if (isAlphabet(e.key)) {
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

  console.log(currentGuess)
  console.log(demoGuess)


  if(guesses.includes(word)){
    return <div>You Have Guessed It My Boy</div>
  }





  return (
    <div>
     
     <Board guesses={demoGuess} word={word} oGuess={guesses}/>
  
     
    </div>
 
  )
}



 
