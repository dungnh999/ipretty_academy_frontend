import React, {useEffect, useState} from 'react';
import CourseCategoryService from "academy/service/CourseCategoryService"

const CategoryCourse = ({ onChangeCategory}) => {
    const [dataCourseCategory , setDataCourseCategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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
    }

    // Xử lý khi chọn checkbox
    const handleCheckboxChange = (category) => {        
        let updatedCategories;
        if (selectedCategories.includes(category)) {
            // Nếu đã chọn, bỏ category khỏi danh sách
            updatedCategories = selectedCategories.filter((item) => item !== category);
        } else {
            // Nếu chưa chọn, thêm category vào danh sách
            updatedCategories = [...selectedCategories, category];
        }

        setSelectedCategories(updatedCategories);
        onChangeCategory(updatedCategories); // Gửi danh mục được chọn lên file cha
    };


    return (
        <>
            <h1 className="text-xl font-semibold capitalize text-black">Danh mục khoá học</h1>
            <ul className="mt-[1.25rem] flex flex-col gap-[0.62rem]">
                {dataCourseCategory.map((item, index) => (
                    <li className="flex justify-between items-center">
                        <div className="group-name">
                            <div className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    className="border-gray-300 rounded h-4 w-4"
                                    checked={selectedCategories.includes(item['category_name'])}
                                    onChange={() => handleCheckboxChange(item['category_name'])}
                                />
                                <h1 className="text-base font-normal leading-none capitalize">{ item['category_name'] }</h1>
                            </div>
                        </div>
                        <div className="count-course">
                            <p className="font-normal text-subColor text-base">{ item['total_course'] }</p>
                        </div>
                    </li>


                ))}
            </ul>
        </>
    )
};

export default CategoryCourse;






























