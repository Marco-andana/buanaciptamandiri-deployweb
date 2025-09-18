// src/components/Testimonial.js

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from "./TestimonialCard"; // Impor komponen kartu yang baru

// Impor Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = ({ testi }) => {
    return (
        <div id="testi" className="py-16 sm:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                
                {/* Judul Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Apa Kata Mereka
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Testimoni asli dari pelanggan setia kami.
                    </p>
                </div>
                
                {/* Padding tambahan di luar Swiper agar bayangan tidak terpotong */}
                <div className="px-4 py-8">
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {testi.map((item, index) => (
                            <SwiperSlide key={index} className="pb-10">
                                {/* Gunakan komponen TestimonialCard yang baru */}
                                <TestimonialCard 
                                    img={item.img}
                                    name={item.name}
                                    from={item.from}
                                    desc={item.desc}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;