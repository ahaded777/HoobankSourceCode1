import React from 'react';
import img1 from '../../assets/logo.svg'
import "./footer.css";

function Footer(){

    return (
        <section className='footer section container grid'>
            <div className="footer__content">
                <div className="footer__image">
                    <img className='footer__img' src={img1} />
                    <p className="footer__text-p">A new way to moke the paymants 
                        <br /> easy, reliable and secure.
                    </p>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Useful Link</h1>
                    <a href="#"><h3>Content</h3></a>
                    <a href="#"><h3>How it Warks</h3></a>
                    <a href="#"><h3>Create</h3></a>
                    <a href="#"><h3>Explore</h3></a>
                    <a href="#"><h3>Terms & Services</h3></a>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Community</h1>
                    <a href="#"><h3>Help Center</h3></a>
                    <a href="#"><h3>Partners</h3></a>
                    <a href="#"><h3>Suggestions</h3></a>
                    <a href="#"><h3>Blog</h3></a>
                    <a href="#"><h3>Newsletters</h3></a>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Partner</h1>
                    <a href="#"><h3>Our Partner</h3></a>
                    <a href="#"><h3>Become a Partner</h3></a>
                </div>
            </div>
            <div className="footer__all">
                <h1 className='footer__all-h1'>2023 HooBank. All Rights Reserved.</h1>
                <div className='footer__icon'>
                    <a href="#"><i class='bx bxl-instagram footer__icon-link'></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle footer__icon-link' ></i></a>
                    <a href="#"><i class='bx bxl-twitter footer__icon-link' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square footer__icon-link' ></i></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;