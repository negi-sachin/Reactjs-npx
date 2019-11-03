//Four methods to do conditional renderimg
//If/else,Elelment variables,Ternary conditional operator,short circuit operator


import React, { Component } from 'react'

class Conditional_Render extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:false
        }
    }
    
    render() {
        //If/else
        
        // if(this.state.isLoggedin)
        // {
        // return (
        //     <div>
        //        <hr></hr>
        //         <p>Looged In</p>
        //     </div>
        // )
        // }
        // return (
        //     <div>
        //         <hr></hr>
        //         <p>Logged out</p>
        //     </div>
        // )

        //conditional
        return this.state.isLoggedin?(<div>Logged in</div>):(<div>Logged out</div>)

    }
}

export default Conditional_Render
