//Memo are like purecompoent but for function
//they do not get re render whenver change in prop or state is found
//here,parent is Purecomp1.js
//just pass function compo name in 'React.memo()' while exporting
import React from 'react'

function MemoCompo({name}) {
    console.log('Functional Component')
    return (
        <div>
                {name}
        </div>
    )
}

export default React.memo(MemoCompo)
