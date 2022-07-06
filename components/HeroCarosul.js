
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const HeroCarosul = () => {

    var setting = {
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };


    return (
        <>
            <div className="w-full h-full absolute  overflow-hidden ">

                <Slider {...setting}>

                    <div className="w-full h-[80vh] relative ">

                        <Image
                            quality={100}
                            src="/assets/cover4.webp"
                            alt="hero"
                            layout="fill"

                            objectFit="cover" />

                    </div>


                    <div className="w-full h-[80vh] relative">

                        <Image
                            quality={100}
                            src="/assets/cover3.webp"
                            alt="hero"
                            layout="fill"

                            objectFit="cover" />
                    </div>

                    <div className="w-full h-[80vh] relative">

                        <Image
                            quality={100}
                            src="/assets/cover5.webp"
                            alt="hero"
                            layout="fill"
                            objectFit="cover" />

                    </div>

                    <div className="w-full h-[80vh] relative">

                        <Image
                            quality={100}
                            src="/assets/cover2.webp"
                            alt="hero"
                            layout="fill"

                            objectFit="cover" />
                    </div>

                </Slider>
            </div>


        </>
    );
}

export default HeroCarosul;