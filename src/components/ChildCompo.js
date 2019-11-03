import React from 'react'

function ChildCompo(props) {
    return (
        <div>
            <hr></hr>
            <button onClick={()=>props.GreetHandler("child")}>Greet</button>
        </div>
   )
}

export default ChildCompo
