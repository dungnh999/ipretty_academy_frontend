import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'academy/assets/css/swiperCustom.css'
import BannerService from "academy/service/BannerService";


const Banner = (props) => {
    const [dataBanner, setDataBanner] = useState([]);

    useEffect(() => {
        getBanner();
    }, [])

    function getBanner() {
        BannerService.getBanner(handleResponses, handlError);
    }

    function handleResponses(res) {
        setDataBanner(res.data.data);
    }

    function handlError(res) {
        // setDataCourse(res.data.data);
    }

    return (
        <div className='mx-auto w-full'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay]}
            >
                {
                    dataBanner.map((item, key) => (
                        <SwiperSlide>
                            <div
                                className="py-10 sm:py-20 bg-cover bg-center bg-no-repeat h-[25rem] sm:h-[43.75rem] relative"
                                style={{
                                    backgroundImage: `url(${ process.env.API_URL + item.bannerUrl})`,
                                }}
                            >
                                {/*<div*/}
                                {/*    className="flex flex-col justify-center mx-auto max-w-screen-xl h-full px-4 sm:px-6">*/}
                                {/*    <div className="max-w-2xl mb-4 sm:mb-6">*/}
                                {/*        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">*/}
                                {/*            Beautifully crafted UI components, ready for your next project.*/}
                                {/*        </p>*/}
                                {/*    </div>*/}
                                {/*    <div className="max-w-xl mb-6 sm:mb-8">*/}
                                {/*        <p className="text-sm sm:text-lg leading-5 sm:leading-7 text-slate-700">*/}
                                {/*            Over 500+ professionally designed, fully responsive, expertly crafted*/}
                                {/*            component examples you can drop into your Tailwind projects and customize to*/}
                                {/*            your heart’s content.*/}
                                {/*        </p>*/}
                                {/*    </div>*/}
                                {/*    <div className="max-w-xl">*/}
                                {/*        <button*/}
                                {/*            className="bg-primaryColor hover:bg-primaryHoverColor text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300">*/}
                                {/*            Get Started*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    )
};

export default Banner;