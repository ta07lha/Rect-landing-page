import React from 'react';
import './Bservices.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import AdbIcon from '@mui/icons-material/Adb';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

const Bservices = () => {
  return (
    <div id='Services' className='container-fluid mt-5 custom-cnt'>
     <div className="row text-center text-white ">
        <div className="col-12 custom-colum1 mt-5">
            <h2>OUR SERVICES</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, esse!</p>
        </div>
     </div>
     <div className="row mt-5 justify-content-evenly text-white text-center custom-r1">
        <div className="col-md-3">
        <VpnLockIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo libero explicabo aliquam doloremque minus.</p>
        </div>
        <div className="col-md-3">
        <GitHubIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Consectetur adipising</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sequi numquam consequatur dicta cumque debitis?</p>
        </div>
        <div className="col-md-3">
        <BorderColorIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sapiente quos, modi autem officiis voluptas.</p>
        </div>
     </div>
     <div className="row mt-5 justify-content-evenly text-white text-center custom-r1 ">
        <div className="col-md-3 mb-5">
        <FormatSizeIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Consectetur adipising</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo libero explicabo aliquam doloremque minus.</p>
        </div>
        <div className="col-md-3">
        <AdbIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Consectetur adipising</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sequi numquam consequatur dicta cumque debitis?</p>
        </div>
        <div className="col-md-3">
        <ScreenshotMonitorIcon style={{fontSize:"70px"}} className='icon'/>
          <h4 className='mt-3'>Consectetur adipising</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sapiente quos, modi autem officiis voluptas.</p>
        </div>
     </div>
    </div>
  )
}

export default Bservices
