import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Hello visitor',
            i:1
        }
    }
    
    sayTy(){
       if(this.state.i==1)
        this.setState({
            message:'Thank you for Subscribing',
            i:0
        })

        else 
        this.setState({
            message:'hello visitor',
            i:1
        })
        
    }
    render(){
        return (
            <div>

            <h1>{this.state.message}</h1>
            <button onClick={() => this.sayTy()}>Subscribe</button>

            </div>

         
        )
    }
}

export default Message