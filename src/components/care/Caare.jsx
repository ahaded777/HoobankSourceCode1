import React from 'react';
import card from '../../assets/card.png'
import "./care.css";

function Bill(){

    return (
        <section className='bill container grid'>
            <div className="bill__text">
                <h1 className='bill__text-h1'>Find a better card deal <br /> in few easy steps.</h1>
                <p className="bill__text-p">Arcu tortor,purus in mattis at 
                    sed integer faucibus.
                    Aliquet quis qliquet eget
                    mauris tortor.c Aliquet ultrices
                    ac, ametau
                </p>
                <button className='button--flex button'>Get Started</button>
            </div>
            <div className="bill__image">
                <img className='bill__image-img' src={card} alt="" />
            </div>
        </section>
    )
}

export default Bill;