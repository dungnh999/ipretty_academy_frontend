import React, {useEffect, useState} from 'react';
import CourseService from "academy/service/CourseService"
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import {Link } from 'react-router-dom';
import {formartCurrencyVNĐ} from 'academy/helpers/utils'
const Course = (props) => {
    const [dataCourse , setDataCourse] = useState([]);
    useEffect(() => {
        getDataCourse();
    },[])

    function getDataCourse(){
         CourseService.getCourse(handleResponses, handlError);

    }

    function handleResponses(res){
        setDataCourse(res.data.data);
    }

    function handlError(res){
        // setDataCourse(res.data.data);
    }
    // function handleResponses();

    return (
        <div className="course-list">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className="text-2xl font-semibold">Khoá học</h2>
                    <p className="text-base text-subColor">Khoá học nỗi bật</p>
                </div>
                <div className="">
                    <button className="border-borderButtonColor border-2 py-[0.62rem] px-[1.5rem] font-medium text-base rounded-full shadow-lg hover:shadow-primaryColor">Xem Tất Cả</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[1.88rem] mt-[2.12rem]">
                { (dataCourse) ? dataCourse.map((item, key) => (
                    <div key={key} className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                        <Link to={`/course/${item['slug_course']}`}>
                            <div className="h-[15.625rem] overflow-hidden relative">
                                <ImageBannerWithFallback className="object-cover w-full h-full"
                                                         src={item['course_feature_image']}
                                                         alt='Mountain'/>
                                <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                    Photograghy
                                </p>
                            </div>
                            <div className="p-[1.25rem]">
                                <p className="text-subColor text-sm pb-[0.75rem]">
                                    <span>by : </span>
                                    <span className="font-medium">{item['teacher_name']}</span>
                                </p>
                                <div className="name-title-course">
                                    <p className="capitalize font-semibold text-base group-hover:text-primaryColor truncate">{item['course_name']}</p>
                                </div>
                                <div className="py-[1rem] flex gap-[1.5rem]">
                                    <div className="flex gap-[0.5rem] items-center justify-center">
                                        <p className="material-symbols-outlined text-primaryColor block">
                                            nest_clock_farsight_analog
                                        </p>
                                        <p className="text-sm font-normal text-subColor">2 ngày</p>
                                    </div>
                                    <div className="flex gap-[0.5rem] items-center justify-center">
                                        <p className="material-symbols-outlined text-primaryColor">
                                            person
                                        </p>
                                        <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                    </div>
                                </div>
                                <hr className="text-subColor"/>
                                <div className="pt-[1rem]">
                                    <div className="flex justify-between">
                                        <div className="text-base">
                                            {
                                                (item['course_sale_price'] == 0)
                                                    ? <span className="font-medium capitalize text-primaryColor">Miễn Phí</span>
                                                    : (item['course_price'] == 0)
                                                        ? <span className="font-medium capitalize text-primaryColor">{formartCurrencyVNĐ(item['course_price'])}</span>
                                                        : <>
                                                            <del className="pr-[0.5rem] font-normal text-subColor">{ formartCurrencyVNĐ(item['course_price'])}</del>
                                                            <span className="font-medium capitalize text-primaryColor">{formartCurrencyVNĐ(item['course_sale_price'])}</span>
                                                        </>
                                            }

                                        </div>
                                        <div className="text-base text-thirdColor font-medium capitalize">
                                            Xem thêm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )) : '' }
            </div>
        </div>
    );
};

export default Course;