//Making a relationship between parent compo and child compo
//Passing parameters from child compo to parent compo

import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

class ParentCompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'Parent'
        }
        this.GreetHandler=this.GreetHandler.bind((this))
    }
    GreetHandler(child){
        
        
        alert(`Hello ${this.state.ParentName} from ${child}`)
    }
    render() {
        return (
            <div>
                <ChildCompo GreetHandler={this.GreetHandler}/>
            </div>
        )
    }
}


export default ParentCompo
