// When A Component is intialised ,four Component mounting Lifcycle methods are called in Order i.e:
// Constructor => static static getDerivedStateFromProps(props, state) => render => componentDidMount
// side affects methods like ajax call ,http reqst are made in Componentdidmount

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sam',
        }
        console.log('A constructor')
    }
    static  getDerivedStateFromProps(props, state) {
        //it return state object from props or null 
        //do use 'static' keyword
        //this method is called every time a components is re rendered by changing state or props
        console.log('A getderivedstatefromprops')
        return null
    }
   componentDidMount(){
       //it is called only once in whole lifecycle
       //best place doing ajax http request
       console.log('A componentdidmount')
   }
    render() {
        return (
            <div>
                {console.log('A render')}
                LifecycleA
                <LifecycleB/>
            </div>
        )
    }
}

//in console see order of occurence pf parent and child compnents
export default LifecycleA
