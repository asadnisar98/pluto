import React from 'react'
import AboutAnimate from './AboutAnimate'


function AboutToken() {
  return (
    <div id="tokanomics">
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 me-auto text-start order-2 order-lg-1">
              <div className="main_about_heading">
                <h2>A human-centric blockchain Evolution</h2>
                <p>
                  Decentralised marketplace for selling templates and creative
                  assets built by creative people.
                </p>
              </div>
              <div className="list_reflections">
                <ul className="ps-5">
                  <li>
                    <div className="single_reflection">
                      <h2>Reflections</h2>
                      <p>5% is Redistributed to all existing holders</p>
                    </div>
                  </li>
                  <li>
                    <div className="single_reflection">
                      <h2>LP Acquisition</h2>
                      <p>1% is added to liquidity</p>
                    </div>
                  </li>
                  <li>
                    <div className="single_reflection">
                      <h2>Token Burn</h2>
                      <p>2% of tokens are burned</p>
                    </div>
                  </li>
                  <li>
                    <div className="single_reflection">
                      <h2>Marketing Fund</h2>
                      <p>1% is added to the PlutoMaker Marketing Fund</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center pb-5 py-lg-0  order-1 order-lg-2">
              <div className="left_about_token">
                <AboutAnimate />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutToken
