import React from 'react';
import img1 from '../../assets/airbnb.png'
import img2 from '../../assets/binance.png'
import img3 from '../../assets/coinbase.png'
import img4 from '../../assets/dropbox.png'
import "./boxs.css";

function Boxs(){

    return (
        <section className='boxs container grid'>
            <div className="boxs__box">
                <div>
                    <img className='boxs__img' src={img1} alt="" />
                </div>
                <div>
                    <img className='boxs__img' src={img2} alt="" />
                </div>
                <div>
                    <img className='boxs__img' src={img3} alt="" />
                </div>
                <div>
                    <img className='boxs__img' src={img4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Boxs;