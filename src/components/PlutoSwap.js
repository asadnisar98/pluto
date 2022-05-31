import React from 'react'
import exchange from '../assets/images/pluto_exchange.png'

function PlutoSwap() {
    return (
        <div>
            <section className="pluto_swap_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <div className="pluto_swap_text text-start">
                                <h2>PlutoSwap</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="pluto_para">
               
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>

                                    <a class="button_box" href="#">Visit Now</a>
                
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 order-1 order-lg-2 pb-5 pb-lg-0">
                            <div className="exchange_img_wrapper position-relative">
                                <img className="w-100" src={exchange} alt="" />
                                <div class="img_overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PlutoSwap
