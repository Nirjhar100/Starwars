import React from 'react'

const Person = ({person})=>{
    return(
        <div className="card ">
            <h3>{person.name}</h3>
            <p style={{textTransform:"capitalize"}}>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p>
        </div>
    )
}

export default Person