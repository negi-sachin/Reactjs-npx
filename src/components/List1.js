import React from 'react'

function List1(props) {
    const names=['Sam','bruce','Tony']
    const nameList=names.map(name=><h2>{name}</h2>)
    return (
        <div>
            <hr></hr>
            {
                nameList
            }
            <hr></hr>
        </div>
    )
}

export default List1
