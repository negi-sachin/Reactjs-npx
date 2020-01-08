//React.Fragment
//It lets us return more than one child elements without using any container tag

import React from 'react'

function FragmentR() {
    return (
        <React.Fragment>
            <h1>
         Fragment
         </h1>
            
        </React.Fragment>
    )
}

//inspect Element to See
//for now ' <React.Fragment>' takes only one attribute that is 'key'
//instead of <React.Fragment> we can also use '<>' for opening and for closing '</>'
export default FragmentR
