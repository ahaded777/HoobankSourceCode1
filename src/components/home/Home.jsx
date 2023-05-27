import React from 'react';
import robot from "../../assets/robot.png"
import Discount from "../../assets/Discount.svg"
import "./home.css";
import Number from "./Number";

function Home(){

    return (
        <section className='home section' id='home'>
            <div className="home__content container grid">
                <div className="home__box">
                    <div className="home__text">
                        <h4 className='home__text-h4'>
                            <img src={Discount} alt="" />
                            <span>20%</span>
                            Discount For 
                            <span>1Month</span>
                            Account
                        </h4>
                        <h1 className="home__title">
                            The Next <br />
                            <span>Generation</span> <br />
                            Payment Method. 
                        </h1>
                        <p className="home__text-p">Our team of experts uses a methodology to identify
                         the credit cards most likely to fit your needs. 
                         We examine annual percentage rates, annual fees.
                        </p>
                    </div>
                    <div className="home__buill"></div>
                    <div className="home__image">
                        <img src={robot} className="home__img" />
                    </div>
                </div>
                <Number/>
            </div>
        </section>
    )
}

export default Home;