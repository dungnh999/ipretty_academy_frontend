import React, {useEffect, useState} from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import Banner from "academy/views/detail/components/banner";
import TabsCourse from "academy/views/detail/components/TabsCourse";
import Sidebar from "academy/views/detail/components/Sidebar";
import FormComment from "academy/components/UI/FormComment";
import {useParams} from "react-router-dom";
import CourseService from "academy/service/CourseService";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
const Detail = (props) => {
    const { slug } = useParams();
    const {updateDataDetailCourse} = useDetailCourseContext();
    useEffect(() => {
        getDetailCourseBySlug()
    },[slug])

    async function getDetailCourseBySlug(){
        CourseService.getDetailCourseBySlug(handleResponeseDetailCourse,handleErrorDetailCourse , slug);
    }


    function handleResponeseDetailCourse(res){
        console.log(res);
        const courseData = res.data.data;
        updateDataDetailCourse(courseData);
    }

    function handleErrorDetailCourse(e){

    }


    return(
        <div>
            <Banner/>
            <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col mt-[3.12rem] relative">
                <div className='flex flex-row gap-[30px]'>
                    <TabsCourse/>
                    <Sidebar/>
                </div>
                {/*<FormComment/>*/}
            </div>
        </div>
    );
};

export default Detail;