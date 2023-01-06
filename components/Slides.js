import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Navigation, Pagination} from "swiper";
import Image from "mui-image";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/kyle.jpg" height={400} width={400}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/profile.jpeg" height={400} width={400}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
