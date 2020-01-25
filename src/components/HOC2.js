//increment on hover

import UpdatedComponent from './HOC'

import React, { Component } from 'react'

 class HOC2 extends Component {
    render() {
        const {count ,increment}=this.props
        return (
            <div>
                    <button onMouseOver={increment}>Hover {count} times</button>                 
            </div>
        )
    }
}

export default UpdatedComponent(HOC2)

