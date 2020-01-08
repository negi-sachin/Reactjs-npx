//In this,an object is formed contains css details in a key value pair
//keys are used for css element and shud be camel case
import React from 'react'

const heading={
    fontSize:'65px',
    color:'green'
}

function Inline() {
    
    return (
        <div>
            <h2 style={heading}>Inline</h2>
        </div>
    )

}



export default Inline
