import React, { useState } from 'react'
import Card from './Dispaly/Card'
import AmoZon from './Dispaly/AmoZon'
import Ebay from './Dispaly/Ebay'
import axios from 'axios'
import { Link } from 'react-router-dom'






function App() {

const[spinner1,setSpinner1]=useState([1])
const[spinner2,setSpinner2]=useState([1])
const[spinner3,setSpinner3]=useState([1])

const[plipCart,setPlicart]=useState([])
const[Amozone,setAmozone]=useState([])
const[ebay,setEbay]=useState([])
const[name,setName]=useState('')



const handleData=async()=>{

setSpinner1([])
setSpinner2([])
setSpinner3([])

   axios.post('http://localhost:5000/data',{
    headers: {
      name:name
    }
  })

    .then((result) => {
     // console.log(result.data.data)
       setPlicart(result.data.data)
       setSpinner1([1])
     
    })
    .catch((err) => {
      console.log(err)

      //alert(err.response.data.msg)
    })



     axios.post('http://localhost:5000/amo',{
      headers: {
        name:name
      }
    })
  
      .then((result) => {
       // console.log(result.data.data)
        setAmozone(result.data.data)
        setSpinner2([1])
       
      })
      .catch((err) => {
        console.log(err)
  
      })



       axios.post('http://localhost:5000/my',{
        headers: {
          name:name
        }
      })
    
        .then((result) => {
         // console.log(result.data.data)
          setEbay(result.data.data)
          setSpinner3([1])
         
        })
        .catch((err) => {
          console.log(err)
    
        })




}





  return (
    <div>
    
      <div className='bg-warning' style={{ textAlign: 'center' }}>
        <input onChange={(e)=>setName(e.target.value)}  className='m-2' style={{ width: "800px" }}    type='text'></input>
        <button onClick={handleData} className='btn btn-info'>Search Items</button>

       
      
      </div>
      


      <div className='row' style={{ textAlign: "center", marginTop: "10px", display: "flex", flexWrap: "wrap" }}>
        <div className='col-4'>
          <Card spinner1={spinner1} Data1={plipCart}  />
        </div>

        <div className='col-4'>
         <AmoZon spinner2={spinner2} Data2={Amozone} />
        </div>

        <div className='col-4'>
         <Ebay spinner3={spinner3} Data3={ebay}   />
        </div>
      </div>

    </div>
  )
}

export default App
