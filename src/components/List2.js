import React from 'react'

function List2() {
    const persons=[
        {  
        "name":       "Sam",   
        "salary":      56000,   
        "married":    true  
    }  ,
    {  
        "name":       "Bruce",   
        "salary":      23600,   
        "married":    true  
    }  ,

    {  
        "name":       "Tony",   
        "salary":      11000,   
        "married":    false
    },
    {  
        "name":       "Clara",   
        "salary":      2000,   
        "married":    true  
    }  ,
    {  
        "name":       "Swift",   
        "salary":      -36000,   
        "married":    false  
    }    
    ]
    return (
        <div>
         {
             persons.map(person=><p>{person.name} has salary {person.salary} and is {person.married?"married":"not married"}</p>)
         }  
         <hr></hr>          
        </div>
    )
}


export default List2
