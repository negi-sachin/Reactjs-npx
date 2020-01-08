// PureComponent are bit modifiation of 'Component'
// A purecomp impelements shpuldcomponentupdate() and shallow comparison between state and props of the Component.
// If difference is found between them then componenet is re-rendered else not.
// It increases speed of the application.
// Never mutate the state ,always returns new object 

// 'rpce' snippet for PureComponent
// purecomp2.js and purecomp3.js are children of this parent component .One is regular component and another is PureComponent.
// Observe console
//change set interval timings to see result

import React, { Component } from 'react'
import Purecompo2 from './Purecompo2';
import Purecompo3 from './Purecompo3';
import MemoCompo from './MemoCompo';

 class Purecomp1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'sam'
         }
     }
    
     componentDidMount(){
         setInterval(() => {
          
             //no change in state
             //regular componnet will get re render but pure copmpo will not.
            this.setState({
                name:'sam'
            })
            //small timing
         },200000 );
     }
    render() {
        console.log('********************** Parent ***************************')
        return (
            <div>
            
                 Parent
                <Purecompo2 name={this.state.name}/>
                <Purecompo3 name={this.state.name}/>

                {/* Memo for function is here,comment above two lines and uncomment this to see result  */}
                {/* <MemoCompo/> */}
            </div>
        )
    }
}

export default Purecomp1

//as we do not change this.sate.name value ,therefore pure component find no diffrence ,hence it is not re render 
//but regular compo get render as its shudcompoupdate by default returns true
//if we make this parent compo as pure compo then it will too not get re render even after putting setinterval 
