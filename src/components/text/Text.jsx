import React from 'react';
import "./text.css";

function Text(){

    return (
        <section className='text container grid'>
            <div className="text__box">
                <div className="text__box-title">
                    <h1 className="text__box-h1">What people are <br /> saying about us</h1>
                </div>
                <div>
                    <p className="text__box-p">Everything you need to accept card
                        payments and grow your business anywhere in the planet.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Text;