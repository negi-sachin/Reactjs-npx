//Here we have import our fuctionality that is updatedcomponent function

import React from 'react';
import UpdatedComponent from './HOC'



 class HOC1 extends React.Component {
    render() {
        const {count ,increment}=this.props
        return (
            <div>
                <button onClick={increment}>Clicked {count} times</button>
            </div>
        )
    }
}

//export it like this to add  feature
export default UpdatedComponent(HOC1)
