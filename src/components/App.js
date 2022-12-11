import React from "react"
import Die from "./die"
import {nanoid} from "nanoid"

export default function App(){
  const [dice, setDice]=React.useState(allNewDice())
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
          num:Math.ceil(Math.random() * 6),
          isHeld:false,
          id:nanoid()

        
        })
    }
    return newDice
}
function rollDice(){
  return setDice(allNewDice())
}
  const diceElements=dice.map(die=> <Die key={die.id} num={die.num}/>)
  return (
   <main>
        <div className="dice-container">
        {diceElements}
    
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
    
            </main>)
}