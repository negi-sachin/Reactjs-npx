import React, { Component } from 'react'

export class Landing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
             en:true
        }
    }
name=(e)=>{
    this.setState({
        name:e.target.value
    })
}
    en=(e)=>{
        e.preventDefault();
        this.setState({
            en:false
        })
    }
    render() {
        return this.state.en?(
            <div>
                landing page
                <form>
                    <input onChange={this.name}></input>
                    <button onClick={this.en}>Submit</button>
                </form>
            </div>
        ):(<div>Hey {this.state.name}</div>)
    }
}

export default Landing
