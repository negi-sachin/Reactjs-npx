import React, { PureComponent } from 'react'

export class Purecompo3 extends PureComponent {
    render() {
        console.log('****Purecompo****')
        return (
            
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default Purecompo3
