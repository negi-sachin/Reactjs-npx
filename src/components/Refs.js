//refs are used when we want to access real DOM node elements
//There are two ways : createREf() and callback ref
//create ref is new and has three steps:
//refs are for clas compo not for function compo
//Here,we want auto focus on our input element

import React, { Component } from 'react'

 class Refs extends Component {
     constructor(props) {
         super(props)
     //step1: to create a ref property
       this.inputref=React.createRef()
     }

     componentDidMount(){
         //step2: intialising property u want to get to this.input.current
         this.inputref.current.focus()
     }
     
    render() {
        //see it in console with its properties
        console.log(this.inputref)
        return (
            <div>
                {/* step3:attaching this.inputref to element */}
                <input type='text' ref={this.inputref}></input>
            </div>
        )
    }
}

export default Refs
