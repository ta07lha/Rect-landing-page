import React from "react";
import "./About.css";
import bg from "./images/about.jpg";
import DoneIcon from '@mui/icons-material/Done';

const About = () => {
  return (
    <div id='About' className="container-fluid">
      <div className="row justify-content-evenly">
        <div className="col-md-5 mb-5 d-none d-lg-block">
          <img src={bg} alt="" className="img-fluid mt-5" />
        </div>
        <div className="col-md-5 custom-col1">
            <h2>ABOUT US</h2>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, earum harum. Accusamus cumque repudiandae, culpa nulla officiis molestias, exercitationem sunt, obcaecati modi porro harum! Libero quos mollitia blanditiis corrupti illo nam reiciendis aspernatur dignissimos. Odio dolorum atque officia possimus illo.</p>
            <h4 className="mt-5">Why Choose Us?</h4>
            <div className="row justify-content-evenly">
                <div className="col-6 custom-col2">
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}} />Lorem, ipsum dolor.</p>
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}} />Temper, insiduent .</p>
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}} />Lorem, ipsum dolor.</p>
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}} />Insiduent, ur labor.</p>
                </div>
                <div className="col-6 custom-col2">
                <p><DoneIcon className="iccn1" style={{fontSize:'20px'}}/>Alequipiue coso.</p>
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}}/>Lorem, ipsum dolor.</p>
                    <p><DoneIcon  className="iccn1"style={{fontSize:'20px'}}/>Extlatration, comodo.</p>
                    <p><DoneIcon className="iccn1" style={{fontSize:'20px'}}/>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
