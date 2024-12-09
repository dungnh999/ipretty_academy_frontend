import React, {useState, useEffect} from 'react';
import Pagination from "academy/components/UI/Pagination";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import {Link, useParams} from 'react-router-dom';
import {formartCurrencyVNĐ} from 'academy/helpers/utils'
import CourseCategoryService from "academy/service/CourseCategoryService";
const ListCourse = ({filteredData}) => {
    const [dataCourse , setDataCourse] = useState([]);
    const { category_id } = useParams();
    useEffect(() => {
        getDataCourseCategory();
    },[])

    function getDataCourseCategory(){
        CourseCategoryService.getListCourseCategory(handleResponses, handlError, {category_id : category_id});
    }

    function handleResponses(res){
        console.log(res);
        setDataCourse(res.data.data);
    }

    function handlError(res){
        console.log(res);
        // setDataCourse(res.data.data);
    }

    console.log(dataCourse);

    return(
        <div className="mt-[2.5rem] grid grid-cols-1 gap-[1.88rem]">
            {
                (dataCourse) ? dataCourse.map((item, key) => (
                    <Link to={`/course/${item['slug_course']}`}>
                        <div className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                            <div className="h-[15.625rem] w-[25.625rem] overflow-hidden relative">
                                <ImageBannerWithFallback
                                    className="object-cover object-top w-full h-full"
                                    src={process.env.API_URL + item['course_feature_image']}
                                    alt='Course Thumbnail'
                                />
                            </div>
                            <div className="p-[1.25rem] flex flex-col justify-between w-full">
                                <div>
                                    <p className="font-normal text-sm text-subColor">by {item['teacher_name']}</p>
                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">{item['course_name']}</h1>
                                    <div className="mt-[1rem]">
                                        <ul className="flex gap-[1.5rem]">
                                            <li className="flex items-center gap-[0.5rem]">
                                        <span className="material-symbols-outlined text-primaryColor">
                                            schedule
                                        </span>
                                                <span>
                                            2 Tuần
                                        </span>
                                            </li>
                                            <li className="flex items-center gap-[0.5rem]">
                                        <span className="material-symbols-outlined text-primaryColor">
                                            schedule
                                        </span>
                                                <span>
                                            2 Tuần
                                        </span>
                                            </li>
                                            <li className="flex items-center gap-[0.5rem]">
                                        <span className="material-symbols-outlined text-primaryColor">
                                            schedule
                                        </span>
                                                <span>
                                            2 Tuần
                                        </span>
                                            </li>
                                            <li className="flex items-center gap-[0.5rem]">
                                        <span className="material-symbols-outlined text-primaryColor">
                                            schedule
                                        </span>
                                                <span>
                                            2 Tuần
                                        </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="border-t-bgLigthGrey border-t pt-[1rem] flex items-center justify-between">
                                    <div>
                                        <p className="price text-base text-borderButtonColor ">
                                            {formartCurrencyVNĐ(item['course_price'])}
                                            <span className="text-primaryColor font-normal text-base pl-[0.5rem]">{formartCurrencyVNĐ(item['course_sale_price'])}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <button className="text-base text-black font-medium">Xem thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) : ''
            }
        </div>
    )
};

export default ListCourse;