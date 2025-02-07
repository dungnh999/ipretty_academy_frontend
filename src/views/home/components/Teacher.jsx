import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {HiArrowSmLeft, HiArrowSmRight, HiClock, HiEye} from "react-icons/hi";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import {Avatar, Rating} from "flowbite-react";
import {convertToHourMinuteCourse, formartCurrencyVNĐ} from "academy/helpers/utils";

const Teacher = (props) => {

    const [dataCourse , setDataCourse] = useState([
        {
            id: 1,
            name : 'BS Nguyễn Thế Vỹ',
            avatar : 'https://ipretty.vn/wp-content/uploads/1.-BS-Nguyen-The-Vy.png',
            mota : 'Học hàm, học vị: Tiến sĩ, Bác sĩ\n' +
                'Chuyên khoa: Da liễu, Thẩm mỹ da\n' +
                'Trưởng Khoa Phẫu Thuật Laser Chăm sóc da, Bv Da liễu Hà Nội\n' +
                'Phụ trách chuyên môn...'
        },
        {
            id: 2,
            name : 'BS Trần Đức Phương',
            avatar : 'https://ipretty.vn/wp-content/uploads/3.-BS-Tran-Duc-Phuong.png',
            mota : 'Bác sĩ là một trong những Bác sĩ đầu ngành trong lĩnh vực Thẩm mỹ làm đẹp tại Việt Nam, với hơn 14 năm tu nghiệp và hành nghề phẫu thuật thẩm mỹ tại Mỹ...'
        },
        {
            id: 3,
            name : 'BS Vũ Ngọc Quý',
            avatar : 'https://ipretty.vn/wp-content/uploads/4.-BS-Vu-Ngoc-Quy.png',
            mota : 'Thạc sĩ, Bác sĩ Vũ Ngọc Quý - Bác sĩ/Thành viên ban cố vấn chuyên môn của Ipretty Group đã có nhiều năm kinh nghiệm trong lĩnh vực Da liễu - Thẩm mỹ...'
        },
        {
            id: 4,
            name : ' BS Vũ Thái Hà',
            avatar : 'https://ipretty.vn/wp-content/uploads/5.-BS-Vu-Thai-Ha.png',
            mota : 'Học hàm, học vị: Tiến sĩ, Bác sĩ 16 năm kinh nghiệm trong chuyên ngành da liễu và laser – phẫu thuật trong da liễu...'
        }, {
            id: 5,
            name : 'BS Nguyễn Thị Lan Hương',
            avatar : 'https://ipretty.vn/wp-content/uploads/6.-BS-Lan-Huong.png',
            mota : 'Bác sĩ là Cố vấn chuyên môn cấp cao của Ipretty Group có nhiều năm kinh nghiệm trong lĩnh vực Thẩm mỹ, nguyên Trưởng khoa Bệnh viện da liễu Hà Nội từ 2009 - 2019...'
        },{
            id: 6,
            name : 'PGS TS Trần Thị Trung Chiến',
            avatar : 'https://ipretty.vn/wp-content/uploads/7.-PGS-TS-Tran-Thi-Trung-Chien.png',
            mota : 'Bộ Trưởng Bộ Y tế Việt Nam (2002-2007). Cố vấn cấp cao của Ipretty Group - Đơn vị phân phối độc quyền chỉ Ultra V Lift tại Việt Nam...'
        }
    ]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div>
            <div className="flex justify-between items-center mb-[2.12rem]">
                <div>
                    <h2 className="text-2xl font-semibold capitalize">Đội ngũ chuyên gia</h2>
                    <p className="text-base text-subColor">tại Việt Nam</p>
                </div>
            </div>

            <div className="relative">
                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute top-1/2 -left-[25px] h-[50px] w-[50px]  z-10 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full bg-primaryColor disabled:hidden"
                >
                    <HiArrowSmLeft className='w-full h-full'/>
                </button>
                <button
                    ref={nextRef}
                    className="absolute top-1/2 -right-[25px] z-10 h-[50px] w-[50px] -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full bg-primaryColor disabled:hidden disabled:cursor-not-allowed"
                >
                    <HiArrowSmRight className='w-full h-full'/>
                </button>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    cssMode={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
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
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper relative"
                >
                    {dataCourse ? dataCourse.map((item, key) => (
                        <SwiperSlide>
                            <div key={key} className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                <Link to='#'>
                                    <div
                                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <ImageBannerWithFallback
                                                className="object-cover w-full h-60"
                                                src={item['avatar']}
                                                alt='Course Thumbnail'
                                            />
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item['name']}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item['mota']}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )) : <p className="text-center text-subColor">Không có khóa học nào.</p>}
                </Swiper>
            </div>

        </div>

    )
};

export default Teacher;