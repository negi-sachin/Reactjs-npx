import React from 'react'
import './style.css'
import style from './style.module.css'
function Stylesheet() {
    return (
        <div>
          <h2 className='primary secondary'>Styles TExt</h2> 
          <h1 className={style.borde}>module</h1> 
        </div>
    )
}

export default Stylesheet
