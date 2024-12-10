import React, {useEffect, useRef, useState} from 'react';
import comcoma from 'assets/comcoma/comcoma'
import CommentService from "academy/service/Comment";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import {formartCurrencyVNĐ} from "academy/helpers/utils";
const Feedbacks = (props) => {

    const [ dataComment , setDataComment] = useState([]);
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);


    useEffect(() =>{
        CommentService.getListComment(handleResponses,handlError, '')
    },dataComment)

    function handleResponses(res) {
        setDataComment(res.data.data);
    }

    function handlError(res) {
        // setDataCourse(res.data.data);
        console.log(res)
    }

    console.log(dataComment);

    return (
        <div className="">
            <div className="text-center mb-12">
                <h2 className="mb-3 text-2xl font-semibold">Cảm nhận học viên</h2>
                <p className="text-subColor font-medium text-base">Học viên nói gì về IPRETTY ACADEMY</p>
            </div>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    cssMode={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    Pagination={true}
                    modules={[ Pagination, Mousewheel, Keyboard]}
                    className="mySwiper grid grid-cols-auto max-content grid-flow-col "
                >
                    {dataComment ? dataComment.map((item, key) => (
                        <SwiperSlide className='!h-auto'>
                            <div className="py-8 px-6 border border-bgLigthGrey rounded-lg flex flex-col h-full">
                                <div>
                                    <img src={comcoma} alt="Comment" />
                                </div>
                                <div className='mt-4 flex-grow'>
                                    <p className='font-medium text-base line-clamp-4'>
                                        {item.comment}
                                    </p>
                                </div>
                                <div className='mt-6'>
                                    <p className='text-xl font-semibold'> {item.user_name}</p>
                                    <p className='text-base font-normal mt-1'>{item.user_email}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))    : <p className="text-center text-subColor">Không có đánhg giá.</p>}
                </Swiper>
            </div>
        </div>

    )
};

export default Feedbacks;