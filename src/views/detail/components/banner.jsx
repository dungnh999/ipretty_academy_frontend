import React from 'react';
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import BreadCrumb from "academy/components/UI/BreadCrumb";
import {Link} from "react-router-dom";

const Banner = (props) => {
    const {dataCourse} = useDetailCourseContext();
    return(
        <div className="bg-black text-white py-[2rem] px-[0.62rem]">
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                <div className="flex flex-col gap-[1.25rem] pr-[27.5rem]">
                    <div className="title-detail-course">
                        <h1 className="text-[2.25rem]">{dataCourse['courseInfo']['name']}</h1>
                    </div>
                    <div className="heading-name-catgory flex gap-[1.25rem] items-center">
                        <Link to={'/course/category/' + dataCourse['courseInfo']['category_id']}>
                            <div className="px-[0.5rem] py-[0.2rem] bg-gray-600 font-medium text-sm capitalize rounded-[0.5rem]">
                                { dataCourse['courseInfo']['category_name'] }
                            </div>
                        </Link>
                        <a href='#' className="text-sm font-normal underline hover:no-underline text-primaryColor">by {dataCourse['courseInfo']['teacher_name']}</a>
                    </div>
                    <div className="flex gap-[1.5rem]">
                        <div className="item-detail flex justify-center items-center">
                            <span className="material-symbols-outlined">
                                release_alert
                            </span>
                            <span className="ml-[0.5rem] ">Cập nhật lần cuối  {dataCourse['courseInfo']['updated_at']}</span>
                        </div>
                    </div>
                    {/* <div className="flex gap-[1.5rem]">
                        <div className="item-detail flex justify-center items-center">
                            <i className="material-symbols-outlined text-primaryColor">
                                schedule
                            </i>
                            <span className="ml-[0.5rem] ">2 Weeks</span>
                        </div>
                        <div className="item-detail flex justify-center items-center">
                            <i className="material-symbols-outlined text-primaryColor">
                                schedule
                            </i>
                            <span className="ml-[0.5rem] ">2 Weeks</span>
                        </div>
                        <div className="item-detail flex justify-center items-center">
                            <i className="material-symbols-outlined text-primaryColor">
                                schedule
                            </i>
                            <span className="ml-[0.5rem] ">2 Weeks</span>
                        </div>
                        <div className="item-detail flex justify-center items-center">
                            <i className="material-symbols-outlined text-primaryColor">
                                schedule
                            </i>
                            <span className="ml-[0.5rem] ">2 Weeks</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default Banner;