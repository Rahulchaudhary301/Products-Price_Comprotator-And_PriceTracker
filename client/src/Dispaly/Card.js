import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'












function Card({Data1 , spinner1}) {

  //  const[add,setadd]=useState('')
    
//  <div className="round">
//    <div class="loader"></div>
// </div>  


const Product=(data)=>{

    var c=localStorage.getItem('product');


   

    if(c===null){

      let x=`https://www.flipkart.com${data}`
      localStorage.setItem('product',x)
    }
    else{
      c.substring(24)!=data? alert('Add to track List'):alert('Allready add in List')
    }

    var c=localStorage.getItem('product');
    let x=`https://www.flipkart.com${data}`
    localStorage.setItem('product',x)

    c.substring(24)!=data? alert('Allready add in List') :alert('Add to track List')

   
  }
  





    return (



        <div >


<h2 class="form-check-label"  for="flexSwitchCheckDefault"  style={{color:"red",fontWeight:"bolder" ,fontStyle:"italic"}}>FlipCart.com</h2>

        <hr style={{color:"white"}} />

      <div style={{ display: "flex", flexWrap: "wrap"}}>
      {
          spinner1.length===0?<div className="round">
                    <div class="loader"></div>
        </div>:
            Data1.map((element)=>(

                <div   className='rahul m-1 ' style={{ "width": "155px", "Height": "200px" }}>

               <Link to={`https://www.flipkart.com${element.link}`} target="_blank"> <img src={element.Image} className="card-img-top" style={{ height: "160px", objectFit: "fill" }} alt="..." /></Link>

                <p id='c'>{element.Name}</p>
                <strong id='d'>₹ {element.price}</strong>

            <button onClick={()=>Product(element.link)} className='price'>Add PriceTracker</button>


            </div>

            ))
        }



      </div>
            


        </div>


    )
}

export default Card
