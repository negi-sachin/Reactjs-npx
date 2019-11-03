//"rce" snippet for reacr,class,export
//"rconst" for constructor
import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        this.setState(prevstate=>({
                  count:prevstate.count+1
        }),
        //Callback to avoid async operations
        ()=>{console.log("Count is "+this.state.count)})
    }

    incrementbyFive(){
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       
    }
       render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>{ this.increment()}}>Increment by One </button>
                <button onClick={()=>{ this.incrementbyFive()}}>Increment by five </button>
            </div>
        )
    }
}

export default Count

//Points to remember:
//1.Always make use of setState and never modify directlt
//2.if the code has to be executed after the state has been updated ,then use the code in the callback as second argument of setstate
//3.when you have to update state based objecton previous value ,pass in a function as an argument instead of regular object.