import React, {useEffect, useState} from 'react';
import CourseCategoryService from "academy/service/CourseCategoryService"

const Category = (props) => {
    const [dataCourseCategory , setDataCourseCategory] = useState([]);

    useEffect(() => {
        getDataCourse();
    },[])

    function getDataCourse(){
        CourseCategoryService.getListCategoryCourse(handleResponses, handlError, {
            'status' : 1
        });
    }

    function handleResponses(res){
        setDataCourseCategory(res.data.data);
    }

    function handlError(res){
        console.log('Lỗi Res: ' , res)
        // setDataCourse(res.data.data);
    }


    return (
        <div className="category-list px-4 md:px-8 lg:px-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Danh Mục</h2>
                    <p className="text-base text-subColor">Danh mục khoá học</p>
                </div>
                <div>
                    <button className="border-borderButtonColor border-2 py-2 px-4 font-medium text-base rounded-full shadow-lg hover:shadow-primaryColor">
                        Xem Tất Cả
                    </button>
                </div>
            </div>
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {dataCourseCategory.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center border-2 rounded-xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                        <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">weather_hail</span>
                        </div>
                        <div className="name-category pt-4 font-semibold">{ item['category_name'] }</div>
                        <div className="number-course pt-2 text-subColor font-normal">{item['total_course']} Khoá học</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Category;