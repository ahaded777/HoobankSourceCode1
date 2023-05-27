import React, { useRef, useState } from "react";
import "./testimonials.css";
import { Data } from "./Data"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Testimonials(){

    return (
        <section className="testimonials container section">

            <Swiper className="testimonials__container"
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    876: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({id , image , title , description}) => {
                    return (
                        <SwiperSlide className="testimonials__card" key={id}>
                            <img src={image} alt="" className='testimonials__img' />
                            <div className="testimonials__check">
                                <h3 className="testimonials__name">{title}</h3>
                                <i class='bx bx-check-circle testimonials__check__icon' ></i>
                            </div>
                            <p className="testimonials__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;