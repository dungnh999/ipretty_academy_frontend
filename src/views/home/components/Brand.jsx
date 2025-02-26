import React, {useRef} from 'react';
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import brand1 from "academy/assets/Image/brand/6.-Honest-Beauty.png"
import {HiArrowSmLeft, HiArrowSmRight} from "react-icons/hi";
import Icon from 'academy/assets/Image/brand/6.-Honest-Beauty.png'
import Icon2 from 'academy/assets/Image/brand/2.-Ultra-V-2.png'
import Icon3 from 'academy/assets/Image/brand/Bio.png'
import Icon4 from 'academy/assets/Image/brand/9.-SkinClinic.png'
import Icon5 from 'academy/assets/Image/brand/11.-Woman-Essentials.png'
import Icon6 from 'academy/assets/Image/brand/13.-mango-drop.png'
import Icon7 from 'academy/assets/Image/brand/anne.png'
import Icon8 from 'academy/assets/Image/brand/Dermadrop-1.png'
import Icon9 from 'academy/assets/Image/brand/Dermedic-8.png'

const Brand = (props) => {


    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    cssMode={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Mousewheel, Keyboard]}
                    className="mySwiper relative"
                >
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon2}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon3}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon4}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon5}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon6}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon7}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon8}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group  rounded-lg overflow-hidden ">
                            <ImageBannerWithFallback
                                className="object-cover w-full h-full"
                                src={Icon9}
                                alt='Course Thumbnail'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
};

export default Brand;