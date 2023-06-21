import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'




function PriceTracker() {



  const [Data, SetData] = useState([])



  const to = localStorage.getItem('product')



const handleApi=async()=>{

  await axios.post('http://localhost:5000/pro', {
      headers: {
        url: to
      }
    })

      .then((result) => {
        console.log(result.data.data)
        SetData(result.data.data)



      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.msg)

      })


}




  useEffect( () => {

    handleApi()
    
  },[])



// if(to!=null){
//   setInterval(()=>{
//     handleApi()
//   },60000)
// }








const handleList=()=>{

  localStorage.setItem('product','')

}











  return (



    <div >

    <h3 id='t'>This tracker is, tract your productPrice, And Its Notify you on your WhatsUp and phone When ProuctPrice gone fall ... . </h3>

      {

        Data.length===0?<div style={{textAlign:"center"}} className="round">
                    <div class="loader"></div>
        </div>:

        Data.map((element) => (



          <div className='row' style={{ textAlign: "center", marginTop: "10px", display: "flex", flexWrap: "wrap", borderRadius: "20px" }}>


            <div className='col-6'>
              <img src={element.img} className="card-img-top" style={{ height: "500px", objectFit:"contain" }} alt="..." />
            </div>




            <div className='col-6'>

              <h3 style={{ color: "red", marginTop: '50px' }} ><span style={{ color: 'yellow' }}>Name:</span> {element.name}</h3>
              <h1 style={{ color: "red", marginTop: '50px' }}><span style={{ color: 'yellow' }}>Rating :</span> {element.rating}</h1>
              <h1 style={{ color: "red", marginTop: '50px',fontSize:"60px",fontWeight:'bolder' }}><span style={{ color: 'yellow' }}>Best Price :</span > {element.price}</h1>
              <Link to={element.link}> <button style={{  }} className='btn btn-info m-3'>Purchag product</button></Link>

              <button onClick={handleList} className='btn btn-success m-3'>Remove product</button>

              <h1 style={{color:'white',marginTop:'10px'}}>oohhh Price is still Same , Actively scanning for change.....</h1>

            </div>


          </div>
        ))
      }

    </div>
  )
}

export default PriceTracker
