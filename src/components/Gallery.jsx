import React from 'react';
import './Gallery.css';
import background2 from './images/c1.jpg';
import background3 from './images/c2.jpg';
import background4 from './images/c3.jpg';
import background5 from './images/c4.jpg';
import background6 from './images/c5.jpg';
import background7 from './images/c6.jpg';

const Gallery = () => {
  return (
    <div id='Gallery' className='container-fluid '>
     <div className="row text-center mt-5">
        <div className="col-12 colum3 mt-5">
            <h2>GALLERY</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, esse!</p>
        </div>
     </div>
     <div className="row justify-content-center">
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid' src={background2} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid' src={background3} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid' src={background4} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
       
     </div>
     <div className="row justify-content-center">
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid h-100' src={background5} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid h-100' src={background6} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
        <div className="col-md-4 hover-container  p-0">
            <img className='img-fluid h-100' src={background7} alt="" />
            <div className="overly">
              <div className="content">
               <h3>PROJECT TITLE</h3> 
              </div>
            </div>
        </div>
       
     </div>
     
    </div>
  )
}

export default Gallery
