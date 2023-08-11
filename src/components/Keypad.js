import React from "react";

function Keypad (){
    function enter(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type = "password" onChange={enter}></input>
        </div>
    )
}

export default Keypad;