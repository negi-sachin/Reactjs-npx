//Regular component

import React, { Component } from 'react'

export class Purecompo2 extends Component {
    render() {
        console.log('*****Regular compo ***********')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default Purecompo2
