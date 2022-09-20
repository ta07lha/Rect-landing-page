import React from 'react';
import './Features.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


const Features = () => {
  return (
    <div id='Features' style={{backgroundColor:'whitesmoke'}} className='container-fluid'>
        <div className="row">
            <div className="col-12 text-center mt-2 custom-colum">
                <h2 className='mt-3'>FEATURES</h2>
                
            </div>
        </div>
        <div className="row mt-5 mb-5 justify-content-evenly custom-row">
          <div className="col-md-2 text-center">
          <MessageOutlinedIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Esse excepturi.</p>
          </div>
          <div className="col-md-2 text-center">
          <CampaignIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Esse excepturi.</p>
          </div>
          <div className="col-md-2 text-center">
          <Diversity3Icon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Esse excepturi.</p>
          </div>
          <div className="col-md-2 text-center">
          <AutoFixHighIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Esse excepturi.</p>
          </div>
          
        </div>
      
    </div>
  )
}

export default Features
