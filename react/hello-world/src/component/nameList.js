import React from "react";
import Person from "./person";

function NameList (){
    const persons = [
        {
            id : 1,
            name : "Kavita",
            age : 24,
            skill : 'React'
        },
        {
            id : 2,
            name : "Mehak",
            age : 25,
            skill : 'Angular'
        },
        {
            id : 3,
            name : "Aditi",
            age : 23,
            skill : 'Android'
        }

    ]
    const personList =  persons.map(person => <Person key= {person.id} person = {person}/>)
   
    return(
        <div>{personList}</div>
    )
}

export default NameList