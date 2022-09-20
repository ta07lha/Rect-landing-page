import React, { useState } from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import MonochromePhotosRoundedIcon from '@mui/icons-material/MonochromePhotosRounded';

const Footer = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <div id='Contact' className='container-fluid cstm-cnt'>
      <div className="row mt-5 justify-content-evenly">
        <div className="col-md-7 mt-5 mb-5 cstm-col text-white">
           <h2 className='mt-5'>GET IN TOUCH</h2>
           <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, perferendis.</p>
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Message</Form.Label>
          <Form.Control className='h-100' type="text" placeholder="messages" required />
          <Form.Control.Feedback type="invalid">
            Please outfill this box.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type='submit' className='mt-5 bg-transparent border-5 mb-5'>SEND MESSAGE</Button>
    </Form>
        </div>
        <div className="col-md-3 mt-5 text-white">
            <h3 className='mt-5'>Contact info</h3>
            <h5 className='mt-5'><LocationOnIcon/> <span className='ms-3'> Address</span> </h5>
            <p className='ms-5'>4321 California St, San Fransisco, CA 12345</p>
            <h5 className='mt-5'><LocalPhoneIcon/> <span className='ms-3'> Phone</span> </h5>
            <p className='ms-5'><phone>+1 123 465 78910</phone></p>
            <h5 className='mt-5'><EmailIcon/> <span className='ms-3'>Email</span> </h5>
            <p className='ms-5'><email>info@talhasparkgmail.com</email></p>
        </div>
        <hr/>
      </div>
     <div className="row text-white">
        <div className="col-12  text-center">
        <FacebookRoundedIcon className='icon-1 mb-5 me-5' style={{fontSize:"50px"}} /> 
        <AlternateEmailRoundedIcon className='icon-1 mb-5' style={{fontSize:"50px"}} />
        <MonochromePhotosRoundedIcon className='icon-1 mb-5 ms-5' style={{fontSize:"50px"}} />
        </div>
     </div>
    </div>
  )
}

export default Footer
