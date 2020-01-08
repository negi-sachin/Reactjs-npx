//update Lifecycle methds are called whenver a components is re rendered due to change in state and props
// render ,componentDidUpdate(prevProps, prevState) ,static getDerivedStateFromProps(props, state) ,
// shouldComponentUpdate(nextProps, nextState),
// getSnapshotBeforeUpdate(prevProps, prevState) 

//there are five methods out of which three are rarely used :
// getDerivedStateFromProps(props, state) ,shouldComponentUpdate(nextProps, nextState),
//getSnapshotBeforeUpdate(prevProps, prevState) 

//'componentWillUnmount()' will be called whenever a component is removed or destroyed
//Error handling methods are called for detecting errors while rendering components

import React, { Component } from 'react'

 class UpdateLM extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'sam'
         }
         console.log('\n\nConstructor')
     }
     
      static getDerivedStateFromProps(props, state) {
         console.log('get derived state from props ')
         return null
     }
     shouldComponentUpdate(){
         //shud return true or false
         console.log("shud compo update")
         return true
     }
     componentDidUpdate(){
         console.log('componentDidUpdate')
     }
     handle=()=>{
         this.setState({name:'max'})
     }
    render() {
        return (
            <div>
                <h1>Update methods</h1>
                <button onClick={this.handle}>click</button>
            </div>
        )
    }
}

export default UpdateLM
