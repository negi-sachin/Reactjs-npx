// Higher order components

// A pattern in which original component is passed as argument and new enhanced component is returned.
// This is used when components are having same functionality and we dont want to use use code again

//Here the functionality of incrementing by 1 is used in Hoc1 and Hoc2 

import React from 'react';

//our Hoc function which takes orgnal compo and will return newcomponent by adding some functionality
const UpdatedComponent=OriginalComponent=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        increment=()=>{
            this.setState(prevstate=>{
                return {count:prevstate.count+1}
            })
        }

        render(){
            return(
                <div>
                <h3>HOC</h3>
                {/* Here we are passing down the props */}
               
                <OriginalComponent count={this.state.count} increment={this.increment}></OriginalComponent>

                </div>
            )
        }
        
    }
    return NewComponent
}

export default UpdatedComponent
//import this module wherevr u want these functionality like increment
//HOC1 AND HOC2 