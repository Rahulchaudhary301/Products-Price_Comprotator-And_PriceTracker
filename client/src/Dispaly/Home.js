import React from 'react'
import p from '../img/pic1.jpg'
import p2 from '../img/pic2.jpg'
import p3 from '../img/pic3.png'




function Home() {
    return (
        <div>
            <h1 id='hh' style={{ color: "yellow", textAlign: 'center', fontStyle: "italic", fontWeight: "bold" }}>Welcome to Price Comprotator And Price Tracker</h1>








            <div className='row' style={{ textAlign: "center", marginTop: "10px", display: "flex", flexWrap: "wrap", borderRadius: "20px" }}>


                <div className='col-8'>

                    <div style={{maxHeight:"520px"}} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img style={{maxHeight:"520px"}} src={p} class="d-block w-100" alt="..." />

                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img style={{maxHeight:"520px"}} src={p2} class="d-block w-100" alt="..." />
                            </div>
                            <div  class="carousel-item">
                                <img style={{maxHeight:"520px"}} src={p3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>







                </div>




                <div id='bo' className='col-4'>
  
  <h2 id='kk' style={{fontWeight:"bold",fontStyle:"italic"}}>Hellow EveryOne This Web-site is Basically use for Comapre products price with Different Website Like FlipCart.com , AmaZone.com and  Ebay.com  top  E-Commerece website</h2>
  <h1 id='k' style={{marginTop:"20px"}}>And Its is used to track your Product price in Every One Hour...</h1>


                </div>


            </div>





















        </div>
    )
}

export default Home
