//Binding events 
//four methods...
//Third and Fourth method is preferred

import React, { Component } from 'react'

//first method and second method

//  class Bind extends Component {
    
// constructor(props) {
//     super(props)

//     this.state = {
//          message:"Hello bind here"
//     }
// }

// handler(){
// console.log(this);

//     this.setState({
//    message:"GoodBye"
//     })
// }
//     render() {
//         return (
//             <div>
//                 <hr/>
//           <h1>{this.state.message}</h1>
//           <button onClick={this.handler.bind(this)}>click to see Bind--first method</button> 
//           {/* second method                */}
//           <button onClick={()=>this.handler()}>click to see Bind--second method</button> 
//             </div>
//             )
//     }
// }

//third method--suggested method
//bind in constructor


class Bind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        this.handler=this.handler.bind(this)
    }

    handler(){
        console.log(this);
        
            this.setState({
           message:"GoodBye"
            })
        }
    
    render() {
        return (
            <div>
                 <hr/>
          <h1>{this.state.message}</h1>
          <button onClick={this.handler}>click to see Bind--third method</button> 
            </div>
        )
    }
}

//fourth method
//use arrow handler function
// handler=()=>{
//     console.log(this);
    
//         this.setState({
//        message:"GoodBye"
//         })
//     }

export default Bind
