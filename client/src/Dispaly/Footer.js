import React from 'react'
import { Link } from 'react-router-dom'







function Footer() {
    return (
        <div className='bg-info'>

       <div className='fo'>
       <Link to='/' className='item'>Home</Link>
        <Link to='/com' className='item'>ComapreProduct</Link>
        <Link to='/track' className='item'>TrackPrice</Link>
        <Link to='#' className='item'>About</Link>
       </div>
            
        </div>
    )
}

export default Footer
