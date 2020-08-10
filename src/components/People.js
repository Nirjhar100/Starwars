import React from 'react'
import {useQuery} from 'react-query'
import Person from './Person'
const fetchPeople = async()=>{
    const res = await fetch('http://swapi.dev/api/people/')
    return res.json();
}

const People = ()=>{
    const {data, status} = useQuery('people',fetchPeople)
    console.log(data)
    return(
        <div className="center">
            <h2 className="center">People</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
           
            {status === 'error' && (
                <div>Error fetching  data</div>
            )}
            {status === 'success' && (
                <div className="center">
                    {data.results.map(person=><Person key={ person.name} person={person}/>)}
                </div>
            )}
        </div>
    )
}

export default People