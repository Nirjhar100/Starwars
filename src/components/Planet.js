import React from 'react'

const Planet = ({planet})=>{
    return(
        <div className="card ">
            <h3>{planet.name}</h3>
            <p>Population: { planet.population}</p>
            <p style={{textTransform:"capitalize"}}>Terrain: {planet.terrain}</p>
        </div>
    )
}

export default Planet