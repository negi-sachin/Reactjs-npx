import React, { Component } from 'react'

//Child components fo 'lifeycleA' component
class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sam',
        }
        console.log('B constructor')
    }
    static  getDerivedStateFromProps(props, state) {
        //it return state object or null 
        //do use 'static' keyword
        console.log('B getderivedstatefromprops')
        return null
    }
   componentDidMount(){
       //it is called only once in whole lifecycle
       //best place doing ajax http request
       console.log('B componentdidmount')
   }
    render() {
        return (
            <div>
                {console.log('B render')}
                LifecycleB
            </div>
        )
    }
}


export default LifecycleB