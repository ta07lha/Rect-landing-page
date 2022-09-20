import React from 'react';
import './Bnavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink as Link} from "react-router-hash-link";

const Bnavbar = () => {
  return (
    <div>
      <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='mt-2'>
            <h4>REACT LANDING PAGE</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
           <Link style={{textDecoration:'none'}} to="#Features"><Nav.Link className='ms-5 active link ' href='Features'>FEATURES</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#About" ><Nav.Link className='ms-5 link ' href="#link">ABOUT</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#Services"><Nav.Link className='ms-5 link ' href="#link">SERVICES</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#Gallery"><Nav.Link className='ms-5 link ' href="#link">GALLERY</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#Testimonials"><Nav.Link className='ms-5 link ' href="#link">TESTIMONIALS</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#Team"><Nav.Link className='ms-5 link ' href="#link">TEAM</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to="#Contact"><Nav.Link className='ms-5 link ' href="#link">CONTACT</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Bnavbar
