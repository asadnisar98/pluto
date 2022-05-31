import React from 'react'
import { GiInternalOrgan, GiEnergyShield, GiBulb } from 'react-icons/gi';
import { AiOutlineCodepenCircle } from 'react-icons/ai';
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa';
import { SiFsecure } from 'react-icons/si';




function Specialities() {
    return (
        <div id="about">
            <section className="specialities_section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 text-center mb-5">
                            <h2 className="section_main_heading">Learn more about PlutoMaker's technology</h2>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start ">
                                <GiInternalOrgan className="icon_speci" />
                                <h2 className="my-3">True interoperability</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start">
                                <AiOutlineCodepenCircle className="icon_speci" />
                                <h2 className="my-3">Transactional scalability</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start">
                                <FaCreativeCommonsSamplingPlus className="icon_speci" />
                                <h2 className="my-3">blockchain innovation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start">
                                <GiEnergyShield className="icon_speci" />
                                <h2 className="my-3">User-driven governance</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start">
                                <SiFsecure className="icon_speci" />
                                <h2 className="my-3">Security for everyone</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="speci_single text-center text-md-start">
                                <GiBulb className="icon_speci" />
                                <h2 className="my-3">High energy efficiency</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Specialities
