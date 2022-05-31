import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import Copyclipboard from './Copyclipboard';

function Nav() {
 const [isShow, setIsShow] = useState(true);
 const [isClass, setisClass] = useState('');

    const handleClick = () => {
        if(isClass === 'show'){
            setisClass('');
        }
        if(isClass === ''){
            setisClass('show');
        }
    };
   

    return (

        <div>
                    <nav className="navbar nav_fullscreen">
                        <div className="container">
                            <a className="navbar-brand" href="/">PlutoMaker</a>

                        <div className="d-flex">
                            <Copyclipboard />
                            <button onClick={handleClick} className="navbar-toggler ms-2 ms-lg-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><AiOutlineMenu className="hamburger_menu" /></span>
                            </button>
                            {isShow &&
                            <div className={`navbar-collapse nav_collapse ${isClass}`} id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a onClick={handleClick} className="nav-link active" aria-current="page" href="/">Home</a>
                                    <a onClick={handleClick} className="nav-link" href="#tokanomics">Tokanomics</a>
                                    <a onClick={handleClick} className="nav-link" href="#about">About</a>
                                    <a onClick={handleClick} className="nav-link" href="#ourteam">Our Team</a>
                                    <a onClick={handleClick} className="nav-link" href="#socials">Socials</a>
                                    <a onClick={handleClick} className="nav-link" href="#Listings">Listings</a>
                                </div>
                                <button onClick={handleClick} className="close_nav_fullscreen"><AiFillCloseCircle className="icon_close" /></button>
                            </div>  
                            }
                        </div>

                    </div>

                </nav>
        </div>
    )
}

export default Nav
