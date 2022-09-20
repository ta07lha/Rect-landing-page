import React from "react";
import "./Testimonials.css";
import bg7 from "./images/bg2.jpg";
import bg8 from "./images/bg1.jpg";
import bg9 from "./images/bg3.jpg";
import bg10 from "./images/bg4.jpg";
// import bg11 from "./images/bg.jpg";
import bg12 from "./images/bg6.jpg";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="container-fluid mt-5 custom-cnt1">
      <div className="row text-center mt-5">
        <div className="col-12 custom-column3 mt-5">
          <h2 className="mt-5">WHAT OUR CLIENTS SAY</h2>
        </div>
      </div>
      <div className="row justify-content-evenly mt-5">
        <div className="col-md-3  d-flex mt-5">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg9} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi"
              </i>
            </p>
            <h6>-John Doe</h6>
          </div>
        </div>
        <div className="col-md-3  d-flex mt-5">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg7} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi"
              </i>
            </p>
            <h6>-Jonathan Doe</h6>
          </div>
        </div>
        <div className="col-md-3  d-flex mt-5">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg8} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi"
              </i>
            </p>
            <h6>-John Doe</h6>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly ">
        <div className="col-md-3  d-flex ">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg12} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi natus distinctio"
              </i>
            </p>
            <h6>-John Doe</h6>
          </div>
        </div>
        <div className="col-md-3  d-flex ">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg8} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi"
              </i>
            </p>
            <h6>-Jonathan Doe</h6>
          </div>
        </div>
        <div className="col-md-3  d-flex">
          <img className="img-fluid w-50 h-50 custom-img1 " src={bg10} alt="" />
          <div className="content-1 ms-4">
            <p>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere excepturi natus distinctio laboriosam adipisci, non
                minima repellat! Molestias, maiores commodi natus distinctio"
              </i>
            </p>
            <h6>-John Doe</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
