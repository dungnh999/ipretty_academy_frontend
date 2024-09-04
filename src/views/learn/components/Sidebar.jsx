import React, {useEffect, useState} from 'react';
import {convertToMinutesAndSeconds} from "academy/helpers/utils";
import CourseService from "academy/service/CourseService";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import {useNavigate, useParams} from "react-router-dom";

const Sidebar = (props) => {
    let chapterIndex = 0;
    let chapterItemIndex = 0;
    const {dataCourse, updateDataDetailCourse ,getLessonById} = useDetailCourseContext();
    const {slug, id} = useParams();
    const navigate = useNavigate();
    const [openCompleted, setOpenCompleted] = useState({
        open: false,
        course_name: "",
    })
    const changeVideoCourse = async (item, event) => {
        const dataPurpose = event.currentTarget.getAttribute('data-purpose');
        const matches = dataPurpose.match(/curriculum-item-(\d+)-(\d+)/);
        CourseService.checkJoinCourse(
            (res) => {
                if (matches) {
                    const [, firstValue, secondValue] = matches;
                    chapterIndex = firstValue;
                    chapterItemIndex = secondValue;
                }
                navigate(`/course/${slug}/learn/lecture/${item['lesson_id']}`);
                getLessonByIdFollowItem(chapterIndex, chapterItemIndex);
            }, (e) => {
                console.log(e)
            }
            , dataCourse['courseInfo']['course_id']);
    }

    useEffect(() => {
        if (slug) {
            getDetailMyCourse();
        }
    }, []);

    function handleResponeseDetail(res) {
        setOpenCompleted({
            ...openCompleted,
            open: res.data.data.isCompletedCourse && !res.data.data.isConfirmNotice,
            course_name: res.data.data.course_name,
        })
        updateDataDetailCourse(res.data.data);
        if (chapterIndex && chapterItemIndex) {
            getLessonByIdFollowItem(+chapterIndex, +chapterItemIndex);
        }
    }

    function handleErrorDetail(res) {

    }

    function getDetailMyCourse() {
        CourseService.getDetailCourseBySlug(handleResponeseDetail, handleErrorDetail, slug);
    }

    function getLessonByIdFollowItem(chapterIndex, chapterItemIndex) {
        getLessonById({chapterIndex, chapterItemIndex});
    }

    return(
        <div className='sidebar overflow-auto relative flex-none w-[475px] shadow-customShadow'>
            <form className="search-course flex h-[70px] flex bg-bgLigthGrey justify-center flex-1">
                <input type="text" name="s" autoComplete="off" placeholder="Tìm kiếm bài giảng"
                       className='w-full block my-[6px] mx-0 pl-[20px] border-0 bg-transparent focus:outline-0 focus:text-black'/>
            </form>
            <div id="learn-course-curriculum">
                <div className='overflow-auto absolute top-[70px] bottom-0 w-[475px] text-black'>
                    <div className='curriculum-scrollable'>
                        <ul className='relative z-[499] m-0 p-0'>
                            {dataCourse['listChapterLesson'].map((item, index) => (
                                <li key={item['id']} className='px-[20px] mb-[12px] relative bg-bgGray'>
                                    <details className="group marker:content-['']" open>
                                        <summary
                                            className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">
                                            <div className='flex flex-col'>
                                                {item['chapter_name']}
                                                <span
                                                    className='text-sm font-normal'>0 / {item['lessons'].length}</span>
                                            </div>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                        </summary>
                                        <div className="">
                                            {item['lessons'].map((itemLesson, key) => (
                                                <div key={key}
                                                     className='px-[20px] hover:text-primaryColor cursor-pointer'
                                                     data-purpose={"curriculum-item-" + index + "-" + key}
                                                     onClick={(event) => changeVideoCourse(itemLesson, event)}>
                                                    <div
                                                        className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div
                                                            className="flex gap-[0.5rem] items-center font-normal ">
                                                                    <span className="material-symbols-outlined">
                                                                        live_tv
                                                                    </span>
                                                            <div
                                                                className="font-medium">{itemLesson['lesson_name']}</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                                    <span
                                                                        className="leading-none text-sm font-normal text-sm text-borderButtonColor">{convertToMinutesAndSeconds(itemLesson['timer'])}</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            {itemLesson.isPassed ? '' : <span
                                                                className="material-symbols-outlined">lock</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;