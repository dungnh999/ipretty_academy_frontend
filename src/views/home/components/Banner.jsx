import React from 'react';
import banner from "assets/banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'academy/assets/css/swiperCustom.css'


const Banner = (props) => {
    return (
        <div className='mx-auto w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div
                        className="py-20 bg-cover bg-no-repeat h-[43.75rem]"
                        style={{
                            backgroundImage: `url(${ banner })`
                        }}
                    >
                        <div className="flex flex-col justify-center mx-auto max-w-screen-xl h-full">
                            <div className="max-w-2xl">
                                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Beautifully crafted UI components, ready for your next project.
                                </p>
                            </div>
                            <div className="max-w-xl">
                                x            <p className="mt-4 text-base leading-7 text-slate-700">Over 500+
                                professionally designed, fully responsive, expertly crafted component examples you can drop
                                into
                                your Tailwind projects and customize to your heart’s content.
                            </p>
                            </div>
                            <div className="max-w-xl">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="py-20 bg-cover bg-no-repeat h-[43.75rem]"
                        style={{
                            backgroundImage: `url(${ banner })`
                        }}
                    >
                        <div className="flex flex-col justify-center mx-auto max-w-screen-xl h-full">
                            <div className="max-w-2xl">
                                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Beautifully crafted UI components, ready for your next project.
                                </p>
                            </div>
                            <div className="max-w-xl">
                                x            <p className="mt-4 text-base leading-7 text-slate-700">Over 500+
                                professionally designed, fully responsive, expertly crafted component examples you can drop
                                into
                                your Tailwind projects and customize to your heart’s content.
                            </p>
                            </div>
                            <div className="max-w-xl">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="py-20 bg-cover bg-no-repeat h-[43.75rem]"
                        style={{
                            backgroundImage: `url(${ banner })`
                        }}
                    >
                        <div className="flex flex-col justify-center mx-auto max-w-screen-xl h-full">
                            <div className="max-w-2xl">
                                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Beautifully crafted UI components, ready for your next project.
                                </p>
                            </div>
                            <div className="max-w-xl">
                                x            <p className="mt-4 text-base leading-7 text-slate-700">Over 500+
                                professionally designed, fully responsive, expertly crafted component examples you can drop
                                into
                                your Tailwind projects and customize to your heart’s content.
                            </p>
                            </div>
                            <div className="max-w-xl">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="py-20 bg-cover bg-no-repeat h-[43.75rem]"
                        style={{
                            backgroundImage: `url(${ banner })`
                        }}
                    >
                        <div className="flex flex-col justify-center mx-auto max-w-screen-xl h-full">
                            <div className="max-w-2xl">
                                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Beautifully crafted UI components, ready for your next project.
                                </p>
                            </div>
                            <div className="max-w-xl">
                                x            <p className="mt-4 text-base leading-7 text-slate-700">Over 500+
                                professionally designed, fully responsive, expertly crafted component examples you can drop
                                into
                                your Tailwind projects and customize to your heart’s content.
                            </p>
                            </div>
                            <div className="max-w-xl">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Thêm các SwiperSlide khác nếu cần */}
            </Swiper>
        </div>
    )
};

export default Banner;