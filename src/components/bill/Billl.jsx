import React from 'react';
import bill from '../../assets/bill.png'
import App from '../../assets/apple.svg'
import Play from '../../assets/play.svg'
import "./bill.css";

function Bill(){

    return (
        <section className='bill container grid'>
            <div className="bill__image">
                <img className='bill__image-img' src={bill} alt="" />
            </div>
            <div className="bill__text">
                <h1 className='bill__text-h1'>Easily control your <br /> billing & invoicing.</h1>
                <p className="bill__text-p">Elit enim sed massa. 
                    Mauris eu adipiscing ultrices ametodio aenean 
                    neque. Fusce ipsum orci rhoncus aliporttitor integer
                    plater placerat.
                </p>
                <div className="bill__text-image">
                    <img  src={App} alt="" />
                    <img  src={Play} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Bill;