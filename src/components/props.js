import React from 'react'
//for class
import {Component} from 'react'

const Hello=props=>{
    return(
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>

    )
}

//Same thing using class
//this.props are used  to access  data
//this.props values cannot be changed

// class Hello extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         )
//     }
// }

export default Hello