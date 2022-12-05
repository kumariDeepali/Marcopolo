import React, { useState } from 'react'
//import '../styles/App.css';
const App = () => {

  const [data,setData] = useState(true)

  
  return (
    <div id="main">

    <h1 id={"marco-polo"} >{data ? "Marco":"Polo"}</h1>
    <button id='marco-polo-toggler' onClick={()=>setData(!data)}>{!data ? "Marco":"Polo"}</button>

    </div>
  )
}


export default App;