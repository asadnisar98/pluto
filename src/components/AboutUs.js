import React from 'react'
import BoxAnimate from './BoxAnimate'

function AboutUs() {
    return (
        <div>
              <section className="aboutus_section">
        <div className="container">
          <div className="row">

          <div className="col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center pb-5 pb-lg-0">
              <div className="left_about_us">
                <BoxAnimate />
              </div>
            </div>

            <div className="col-12 col-lg-6 me-auto text-start">
              <div className="main_aboutus_heading">
                <h2>A human-centric blockchain Evolution</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="aboutus_para">
               
              <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
               
              </div>
            </div>
         
          </div>
        </div>
      </section>
        </div>
    )
}

export default AboutUs
