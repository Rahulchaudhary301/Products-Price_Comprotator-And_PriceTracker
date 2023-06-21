import React from 'react'
import { Link } from 'react-router-dom'

function AmoZon({Data2,spinner2}) {




return (
    <div >

<h2 style={{color:"red",fontWeight:"bolder" ,fontStyle:"italic"}}>AmaZone.com</h2>
<hr style={{color:"white"}} />

    <div style={{ display: "flex", flexWrap: "wrap"}}>

    {
        spinner2.length===0?<div className="round">
                    <div class="loader"></div>
        </div>:
        Data2.map((element)=>(

            <div className='rahul m-1' style={{ "width": "155px", "Height": "200px" }}>
            <Link to={`https://www.amazon.in${element.link}`} target="_blank"><img src={element.Image} className="card-img-top" style={{ height: "160px", objectFit: "fill" }} alt="..." /></Link>
            
            <p id='c'>{element.Name}</p>
            <strong id='d'>₹ {element.price}</strong>
            <Link ><button className='price'>Add PriceTracker</button></Link>
        </div>

        ))
    }

    </div>

    </div>


)
}

export default AmoZon
