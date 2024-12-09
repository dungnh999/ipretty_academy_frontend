import React, {useState} from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import TitleCourse from "academy/views/course/components/TitleCourse";
import ListCourse from "academy/views/course-category/components/ListCourse";
import CategoryCourse from "academy/views/course/components/CategoryCourse"

const CourseCategory = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className="flex justify-between gap-[1.87rem]">
                        <div className="basis-10/12">
                            <TitleCourse/>
                            <ListCourse/>
                        </div>
                        <div className="basis-2/12 flex flex-col gap-[1.88rem] sticky">
                            <div className="item-sort">
                                {/*<CategoryCourse onChangeCategory={handleCategoryChange}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseCategory;