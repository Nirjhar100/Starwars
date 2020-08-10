import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'
import {ReactQueryDevtools} from 'react-query-devtools'

function App() {
  const [page, setPage] = useState('planets')

  return (
    <>
    <div className="container">
      <h1>Star Wars Info</h1>
      <div className="container">
      <Navbar setPage={setPage}/>
      </div>
      <div className="container ">
        {page==='planets'?<Planets/>:<People/>}
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={false}/>
    </>
  );
}

export default App;
