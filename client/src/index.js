import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PriceTracker from './Dispaly/PriceTracker';
import Footer from './Dispaly/Footer';
import Home from './Dispaly/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
   <Footer/>
       <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route exact path='/create' element={<App/>}/> */}
         
          <Route exact path='/*' element={<h1>Page not found</h1>}/>

          <Route exact path='/track' element={<PriceTracker/>}/>

          <Route exact path='/com' element={<App/>}/>
        
       </Routes>
      
    </Router>
 
);

