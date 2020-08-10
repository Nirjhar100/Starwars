import React, {useState} from 'react'
import {useQuery, usePaginatedQuery} from 'react-query'
import Planet from './Planet'
const fetchPlanets = async(key,page)=>{
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    return res.json();
}

const Planets = ()=>{

    const [page,setPage] = useState(1);
    const {resolvedData,latestData,status} = usePaginatedQuery(['planets',page],fetchPlanets,{
        staleTime:0,
        //cacheTime:10

    })
    console.log(resolvedData)
    return(
        <div className="center">
            <h4 className="center">Planets</h4>
            
            
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
           
            {status === 'error' && (
                <div>Error fetching  data</div>
            )}
            {status === 'success' && (
                <>
               
                <div className="">
                    {resolvedData.results.map(planet=><Planet key={ planet.name} planet={planet}/>)}
                </div>
    
               
           
                <button
               style={{border:"solid white",backgroundColor:"black"}}
               className="white-text " disabled
           >{page}</button>
           <button
               onClick={()=>setPage(old=>Math.max(old-1,1))}
               disabled={page===1}
               style={{border:"solid white"}}
               className="white-text"
           >Prev</button>
          
           <button
               onClick={()=>setPage(old=>(!latestData||!latestData.next?old:old+1))}
               disabled={!latestData||!latestData.next}
               style={{border:"solid white"}}
               className="white-text"
           >Next</button>
          
       
    
            
                </>
            )}
        </div>
    )
}

export default Planets