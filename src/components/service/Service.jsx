import React from 'react';
import "./service.css";

function Service(){

    return (
        <section className='service section'>
            <div className="service__content container grid">
                <div className="service__text">
                    <h1 className='service__text-h1'>Let's try our service now!</h1>
                    <p className="service__text-p">Everything you need to accept 
                        card payment and <br /> grow your business anywhere on the planet.
                    </p>
                </div>
                <div className="service__btn">
                    <button className='button button--flex'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Service;