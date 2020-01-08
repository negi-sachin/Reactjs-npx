import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:0,
             list:[1,2,44,67,5,4],
             
        }
    }
    
    handleinput=(e)=>{
      this.setState({
          data:e.target.value
      })
    }
   handlesubmit=(e)=>{
       e.preventDefault();
      this.setState(prevstate=>({
          list:[...this.state.list,prevstate.data]
      }))

   }
   remove=(e)=>{
       this.setState(prevstate=>({
           list:prevstate.list.slice(0,e).concat(prevstate.list.slice(e+1,prevstate.list.length))
       }),()=>{
        console.log(this.state.list)
       })
   
       
   }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleinput}>

                    </input>
                    <button type='submit' onClick={this.handlesubmit}> submit</button>

                </form>
                {
                    this.state.list.map((list,index)=><h4 key={index}>{list}
                    <button onClick={()=>this.remove(index)} >Remove</button>
                    </h4>)
                }
            </div>
        )
    }
}

export default Todo
