import React, { useState } from 'react'
import axios from 'axios'


export default function App() {
  const[photo,setphoto]=useState('');
  const[result,setresult]=useState([]);
  const[apikey,setapikey]=useState("CbVjkPmTlKNZqydtUz_85MDn4WSZz0zLuOs2w7LzQVs");
  
  function handleChange(event){
    const photo=event.target.value
    setphoto(photo)
  }
  function handleSumbit(event){
    const url=(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=CbVjkPmTlKNZqydtUz_85MDn4WSZz0zLuOs2w7LzQVs`)
    axios.get(url).then(Response=>{
      console.log(Response.data.results)
      setresult(Response.data.results)

    })

    
  }
  return (
    <>
    <div className='container-fluid'>
      <h2 style={{textAlign:'center'}}>Photo Search-App</h2>
      <form onSubmit={handleSumbit} >
        <div className='form- group'>
          <input type='text'  id='search' placeholder='search for photo' className='form-control mb-3'value={photo} autoComplete='off' onChange={handleChange} />
           </div>
           <button type="button" className="btn btn-dark" onClick={handleSumbit}>search</button>
           <p id='showsearch'>you searched for {photo}</p>
      </form>
      {result.map(photo=>{
        return <img src={photo.urls.small} style={{height:'300px', width:'200px'}} className="m-4"/>
})}
    </div>

    </>
  )
}
