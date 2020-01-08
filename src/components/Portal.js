// Portals are used whenever we want render something outside our root DOM Node
// right now ,our all components are rendering inside id 'root' div DOM Node
// portals helps us to render outside our parent Node
// we create a div with id='portal' in '/public/index.html'

// also import react dom and use 'ReactDOM.createPortal' here

import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
//ReactDOM.createPortal takes two arguments.First can b JSx, child components,strings,numbers.second is element refernce
    return ReactDOM.createPortal(
       <h1>Portal render at id="portal"</h1>,
       document.getElementById('portal')
    )
}

//inspect element for more
//portal are used to display modal,popup,tooltip

export default Portal

