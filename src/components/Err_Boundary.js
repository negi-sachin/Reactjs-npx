// Error boundary comes into play when a componenet is causing some Error and our whole app get crashed.
// By error handling methods we can get display a UI insted of that error and our other components work as it is.
// There are two methods: static getDerivedStatefromError and componentDidcatch()

// You can wrap error boundary component around other compo to check error in them and if found then display a good UI

import React, { Component } from 'react'

 class Err_Boundary extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              hasError:false,
         }
     }
      static getDerivedStateFromError(err) {
          //eturn new state
         return {
             hasError:true,
         }
     }
     
     componentDidCatch(err,info){
         //both parameters gives details of error
         //this is called for just to log errors
         console.log(err)
         console.log(info)

         //by default react automatically throws error in consolr
     }
    render() {
       return(
           this.state.hasError?<h1>Somethin went wrong</h1>:this.props.children
       )
    }
}

export default Err_Boundary
