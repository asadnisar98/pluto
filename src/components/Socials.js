import React from 'react'
import { FaFacebookF, FaTwitter, FaTelegram, FaInstagram, FaDiscord } from 'react-icons/fa';


function Socials() {
    return (
        <div id="socials">
            <section className="socials_Section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex text-start flex-column justify-content-center">
                            <h2 className="main_text_socials">Follow Our Socials!</h2>
                            <div className="socials_links">
                                <ul className="ps-0">
                                    <li>
                                        <a href="#" target="_blank"><FaFacebookF className="icons_social" /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><FaTwitter className="icons_social" /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><FaTelegram className="icons_social" /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><FaInstagram className="icons_social" /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><FaDiscord className="icons_social" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start">
                            <p className="text_social_right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Socials
