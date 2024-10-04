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
        <div className="course-list px-4 md:px-8 lg:px-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Khoá học</h2>
                    <p className="text-base text-subColor">Khoá học nổi bật</p>
                </div>
                <div>
                    <button className="border-borderButtonColor border-2 py-2 px-4 font-medium text-base rounded-full shadow-lg hover:shadow-primaryColor">
                        Xem Tất Cả
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {dataCourse ? dataCourse.map((item, key) => (
                    <div key={key} className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                        <Link to={`/course/${item['slug_course']}`}>
                            <div className="h-60 overflow-hidden relative">
                                <ImageBannerWithFallback
                                    className="object-cover w-full h-full"
                                    src={item['course_feature_image']}
                                    alt='Course Thumbnail'
                                />
                                <p className="absolute top-5 left-5 bg-black text-white p-2 font-medium text-sm rounded-lg">
                                    {item['category_name']}
                                </p>
                            </div>
                            <div className="p-5">
                                <p className="text-subColor text-sm pb-2">
                                    <span>by: </span>
                                    <span className="font-medium">{item['teacher_name']}</span>
                                </p>
                                <div className="name-title-course">
                                    <p className="capitalize font-semibold text-base group-hover:text-primaryColor truncate">{item['course_name']}</p>
                                </div>
                                <div className="py-4 flex gap-4">
                                    <div className="flex gap-1 items-center justify-center">
                                        <p className="material-symbols-outlined text-primaryColor block">nest_clock_farsight_analog</p>
                                        <p className="text-sm font-normal text-subColor">2 ngày</p>
                                    </div>
                                    <div className="flex gap-1 items-center justify-center">
                                        <p className="material-symbols-outlined text-primaryColor">person</p>
                                        <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                    </div>
                                </div>
                                <hr className="text-subColor"/>
                                <div className="pt-4">
                                    <div className="flex justify-between">
                                        <div className="text-base">
                                            {item['course_sale_price'] === 0 ? (
                                                <span className="font-medium capitalize text-primaryColor">Miễn Phí</span>
                                            ) : item['course_price'] === 0 ? (
                                                <span className="font-medium capitalize text-primaryColor">{formartCurrencyVNĐ(item['course_price'])}</span>
                                            ) : (
                                                <>
                                                    <del className="pr-2 font-normal text-subColor">{formartCurrencyVNĐ(item['course_price'])}</del>
                                                    <span className="font-medium capitalize text-primaryColor">{formartCurrencyVNĐ(item['course_sale_price'])}</span>
                                                </>
                                            )}
                                        </div>
                                        <div className="text-base text-thirdColor font-medium capitalize">Xem thêm</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )) : <p className="text-center text-subColor">Không có khóa học nào.</p>}
            </div>
        </div>

    );
};

export default Course;