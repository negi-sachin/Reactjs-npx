//Html forms in recat are conrolled components
//argument passed to an onChange function the element itself,so we can take format data or do other operations

import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userame:'Enter name here',
               comments:'',
              option:'react'
         }
     }
     
     handle_username=event=>{
         this.setState({
             username:event.target.value,
         })
         
     }

     handle_comment=event=>{
        this.setState({
            comments:event.target.value,
        })
        
    }

    handle_topic=event=>{
        this.setState({
            option:event.target.value
        })
    }

    handle_submit=event=>{
        event.preventDefault();
        alert(`${this.state.username} ${this.state.comments}  ${this.state.option} `)
    }
    render() {
        const {username,comments,option}=this.state
        return (

            <div>
                <h2>Form</h2>
               <form onSubmit={this.handle_submit}>
                   <label>Username:</label>
                   <input type='text'  onChange={this.handle_username} ></input>
                   <label>Comments</label>
                   <textarea value={comments} onChange={this.handle_comment}></textarea>
                   <label>Choose :</label>
                   <select value={option} onChange={this.handle_topic}>
                       <option value='react'>React</option>
                       <option value='Vue'>Vue</option>
                       <option value='Angular'>Angular</option>
                   </select>
                   <button type='submit' >Submit</button>
                </form>    
            </div>
             )
    }
}

export default Form
