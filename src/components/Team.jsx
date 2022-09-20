import React from 'react';
import './Team.css';
import bg13 from './images/bg.jpg';
import bg14 from './images/bg7.jpg';
import bg15 from './images/bg8.jpg';
import bg16 from './images/bg9.jpg';

const Team = () => {
  return (
    <div id='Team' className='container-fluid'>
      <div className="row text-center mt-5">
        <div className="col-12 column3 mt-5">
            <h2>MEET THE TEAM</h2>
            <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, dicta.</p>
        </div>
      </div>
      <div className="row mt-5 justify-content-evenly">
        <div className="col-md-3 text-center cstm-col ">
            <div className='cnt-hvr'>
            <img className='img-fluid' src={bg13} alt="" />
            <div className="overlay">
              <div className="cntnt">
               <h3>CEO</h3> 
              </div>
            </div>
            </div>
            <h5 className='mt-2'>John Doe</h5>
            <p>CEO</p> 
        </div>
        <div className="col-md-3 text-center cstm-col ">
            <div className='cnt-hvr'>
            <img className='img-fluid' src={bg14} alt="" />
            <div className="overlay">
              <div className="cntnt">
               <h3>SENIOR DEGSINER</h3> 
              </div>
            </div>
            </div>
            <h5 className='mt-2'>Mike John</h5>
            <p>Senior degsiner</p> 
        </div>
        <div className="col-md-3 text-center cstm-col ">
            <div className='cnt-hvr'>
            <img className='img-fluid' src={bg15} alt="" />
            <div className="overlay">
              <div className="cntnt">
               <h3>SENIOR DEVELOPER</h3> 
              </div>
            </div>
            </div>
            <h5 className='mt-2'>Karen Doe</h5>
            <p>Senior Developer</p> 
        </div>
        <div className="col-md-3 text-center cstm-col ">
            <div className='cnt-hvr'>
            <img className='img-fluid' src={bg16} alt="" />
            <div className="overlay">
              <div className="cntnt">
               <h3>PROJECT MANAGER</h3> 
              </div>
            </div>
            </div>
            <h5 className='mt-2'>Jane Doe</h5>
            <p>Project manager</p> 
        </div>
       
      </div>
    </div>
  )
}

export default Team
