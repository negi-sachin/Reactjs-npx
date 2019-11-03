//"rfce" snippet for react ,func compo,export
import React from 'react'

function events() {
    function sayhello(){
        console.log("Hello from sayhello ----events used")
    }
    return (
        <div>
            <hr></hr>

          <button onClick={sayhello}>Click for event</button>  
    </div>
        
    )
}

//classes can be used to do so 
export default events
