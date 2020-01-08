import React from 'react'

export default function person({person}) {
    return (
        <div>
            <p>{person.name} has salary {person.salary} and is {person.married?"married":"not married"}</p>
        </div>
    )
}
