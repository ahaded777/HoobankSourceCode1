import React from 'react';
import Star from "../../assets/Star.svg"
import Secured from "../../assets/Shield.svg"
import Send from "../../assets/Send.svg"
import "./money.css";

function Money(){

    return (
        <section className='money container grid'>
            <div className="money__all">
                <div className="money__text">
                    <h1 className='money__text-title'>You do the business, <br /> we'll handle the money.</h1>
                    <p className='money__text-p'>With the right credit card, you can improve your financial
                     life by building credit, earning rewards and saving money. 
                     But with hundreds of credit cards on the market.
                    </p>
                    <button className='button--flex button'>Get Started</button>
                </div>
                <div className="money__start">
                    <div className="money__rewards">
                        <img className='money__rewards-img' src={Star}/>
                        <div>
                            <h1 className='money__rewards-text'>Rewards</h1>
                            <p className='money__rewards-p'>The best credit cards offes some tantalizing
                                combinations of promotions and prizes
                            </p>
                        </div>
                    </div>

                    <div className="money__rewards">
                        <img className='money__rewards-img' src={Secured}/>
                        <div>
                            <h1 className='money__rewards-text'>Rewards</h1>
                            <p className='money__rewards-p'>The best credit cards offes some tantalizing
                                combinations of promotions and prizes
                            </p>
                        </div>
                    </div>

                    <div className="money__rewards">
                        <img className='money__rewards-img' src={Send}/>
                        <div>
                            <h1 className='money__rewards-text'>Rewards</h1>
                            <p className='money__rewards-p'>The best credit cards offes some tantalizing
                                combinations of promotions and prizes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Money;