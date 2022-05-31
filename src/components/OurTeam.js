import React from 'react'
import ceo from '../assets/images/team/ceo.jpeg'
import uiux from '../assets/images/team/ui.jpeg'
import solidity from '../assets/images/team/solidity.jpeg'
import frontend from '../assets/images/team/frontend.jpeg'



function OurTeam() {
    return (
        <div id="ourteam">
                <section className="ourteam_section">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-12 mb-2 mb-lg-5">
                                <h2 className="main_section_heading"> Our Team</h2>
                            </div>
                            <div className="col-6 col-lg-3  d-flex justify-content-center">
                                <div className="team_single_wrap">
                                    <div className="image_wrap">
                                         <img className="w-100" src={ceo} alt='ceo images' />
                                         <div className="img_overlay"></div>
                                    </div>
                                    <h2 className="mb-0">Emilia Josephene</h2>
                                    <p className="position_title">CEO/Founder</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3  d-flex justify-content-center">
                                <div className="team_single_wrap">
                                    <div className="image_wrap">
                                         <img className="w-100" src={uiux} alt='ceo images' />
                                         <div className="img_overlay"></div>
                                    </div>
                                    <h2 className="mb-0">Doreen Mila</h2>
                                    <p className="position_title">UI/UX</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3  d-flex justify-content-center">
                                <div className="team_single_wrap">
                                    <div className="image_wrap">
                                         <img className="w-100" src={solidity} alt='ceo images' />
                                         <div className="img_overlay"></div>
                                    </div>
                                    <h2 className="mb-0">Maria kofi</h2>
                                    <p className="position_title">Solidity Developer</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3  d-flex justify-content-center">
                                <div className="team_single_wrap">
                                    <div className="image_wrap">
                                         <img className="w-100" src={frontend} alt='ceo images' />
                                         <div className="img_overlay"></div>
                                    </div>
                                    <h2 className="mb-0">Emma lisa</h2>
                                    <p className="position_title">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default OurTeam
