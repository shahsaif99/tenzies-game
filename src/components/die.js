import React from "react"

export default function Die(props){
    const styles={
        backgroundColor:props.isHeld? "#59E391": "white"
    }
    return(
        <div
         className="dice" 
         style={styles}
         onClick={props.holdDice}
         >
            
            <div  >
                <div>{props.num}</div></div>

        </div>
    )
}