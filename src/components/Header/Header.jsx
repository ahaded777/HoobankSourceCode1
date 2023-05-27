import React, { useState } from 'react';
import img1 from "../../assets/logo.svg"
import "./header.css";

function Heaader(){
    
    const [Toggle , showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className="nav container">

                <a href="index.html" className='nav_logo'><img src={img1}/></a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                
                    <ul className="nav__list grid">

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                Features
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                Product
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                Clients
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav-close" onClick={() => showMenu (!Toggle)}></i>
                    
                </div>
                <div className="nav_toggle" onClick={() => showMenu (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Heaader;