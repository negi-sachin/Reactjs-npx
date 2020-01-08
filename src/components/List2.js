//while using list in react ,we got some error regarding key as in list1.js occur
//to prvent this,we use 'key' as an prop for component 
//key value should be unique ,can be number ,string

import React from 'react'
import Person  from "./person";
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
             persons.map(person=><Person key={person.name} person={person}/>)
         }  
         <hr></hr>          
        </div>
    )
}


export default List2
