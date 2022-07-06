import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";

const FacebookFeeds = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                speed={3000}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}

                className="!h-full w-full"
            >
                <SwiperSlide className="relative overflow-hidden">


                    <div className="w-full h-full bg-slate-300 absolute bottom-0  duration-500 cursor-pointer flex justify-center items-center ">

                        <span className="text-4xl font-medium  text-[#3C4858]  ">NEWS1</span>

                    </div>


                </SwiperSlide>
                <SwiperSlide className="relative overflow-hidden">


                    <div className="w-full h-full bg-slate-300 absolute bottom-0 duration-500 cursor-pointer flex justify-center items-center">

                        <p className="text-4xl font-medium  text-[#3C4858]  ">NEWS2</p>

                    </div>


                </SwiperSlide>
                <SwiperSlide className="relative overflow-hidden">

                    <div className="w-full h-full bg-slate-300 absolute bottom-0 duration-500 cursor-pointer flex justify-center items-center">

                        <p className="text-4xl font-medium text-[#3C4858]  ">NEWS3</p>

                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default FacebookFeeds;