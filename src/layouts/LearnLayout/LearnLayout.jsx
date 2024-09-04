import React, {useState, useEffect} from 'react';
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import CourseService from "academy/service/CourseService";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import ReactPlayer from "react-player";
import {convertToMinutesAndSeconds} from "academy/helpers/utils";
import LessonService from "academy/service/LessonService";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LearnLayout = ({children}) => {
    // const [currentTab, setCurrentTab] = useState(0);
    // const [selected, setSelected] = useState('text-primaryColor');
    // const {dataCourse, updateDataDetailCourse, getLessonById, listChapterLesson} = useDetailCourseContext();
    // const {slug, id} = useParams();
    // const navigate = useNavigate();
    // const {course, dataLessonById} = dataCourse;
    // const [openCompleted, setOpenCompleted] = useState({
    //     open: false,
    //     course_name: "",
    // })
    // const [lastTime, setLastTime] = useState(0);
    // const [isFastForwarding, setIsFastForwarding] = useState(false);
    //
    // let chapterIndex = 0;
    // let chapterItemIndex = 0;
    //
    // useEffect(() => {
    //     if (slug) {
    //         getDetailMyCourse();
    //     }
    // }, []);
    //
    // const handleProgress = (state) => {
    //     const currentTime = state.playedSeconds;
    //     const timeDifference = currentTime - lastTime;
    //
    //     // Giới hạn tua nhanh (ví dụ: 2 giây)
    //     const fastForwardThreshold = 2;
    //
    //     if (timeDifference > fastForwardThreshold) {
    //         setIsFastForwarding(true);
    //         console.log('Student is fast-forwarding!');
    //         // Thực hiện các hành động cần thiết khi phát hiện tua nhanh
    //     } else {
    //         setIsFastForwarding(false);
    //     }
    //     setLastTime(currentTime);
    // };
    //
    // const changeVideoCourse = async (item, event) => {
    //     const dataPurpose = event.currentTarget.getAttribute('data-purpose');
    //     const matches = dataPurpose.match(/curriculum-item-(\d+)-(\d+)/);
    //     CourseService.checkJoinCourse(
    //         (res) => {
    //             if (matches) {
    //                 const [, firstValue, secondValue] = matches;
    //                 chapterIndex = firstValue;
    //                 chapterItemIndex = secondValue;
    //             }
    //             navigate(`/course/${slug}/learn/lecture/${item['lesson_id']}`);
    //             getLessonByIdFollowItem(chapterIndex, chapterItemIndex);
    //         }, (e) => {
    //             console.log(e)
    //         }
    //         , dataCourse['courseInfo']['course_id']);
    // }
    //
    // const onEnded = () => {
    //     if (!dataLessonById.isPassed) {
    //         updateProcessLesson();
    //     }
    // };
    //
    // const updateProcessLesson = () => {
    //     const data = new FormData()
    //     data.append('course_id', course.course_id)
    //     data.append('lesson_id', dataLessonById.id)
    //     data.append('view_duration', dataLessonById.lesson_duration)
    //     LessonService.updateProcessLesson(data,
    //         (res) => {
    //             if (res.data && res.data.data && res.data.data.lesson_id) {
    //                 const dataCheckLesson = res.data.data
    //                 console.log(dataCheckLesson);
    //                 // updateLessonLearned({ chapterIndex, chapterItemIndex, dataCheckLesson })
    //                 // if (dataCheckLesson.isCompletedCourse && !dataCheckLesson.isConfirmNotice) {
    //                 //     finishLesson(dataCheckLesson.course_name);
    //                 // }
    //             }
    //         },
    //         (err) => {
    //             console.log(err)
    //         }
    //     )
    // };
    //
    // function handleResponeseDetail(res) {
    //     setOpenCompleted({
    //         ...openCompleted,
    //         open: res.data.data.isCompletedCourse && !res.data.data.isConfirmNotice,
    //         course_name: res.data.data.course_name,
    //     })
    //     updateDataDetailCourse(res.data.data);
    //     if (chapterIndex && chapterItemIndex) {
    //         getLessonByIdFollowItem(+chapterIndex, +chapterItemIndex);
    //     }
    // }
    //
    // function handleErrorDetail(res) {
    //
    // }
    //
    // function getDetailMyCourse() {
    //     CourseService.getDetailCourseBySlug(handleResponeseDetail, handleErrorDetail, slug);
    // }
    //
    // function getLessonByIdFollowItem(chapterIndex, chapterItemIndex) {
    //     getLessonById({chapterIndex, chapterItemIndex});
    // }
    //
    // const tabs = [
    //     {
    //         name: 'Tổng quan',
    //         content: dataCourse['courseInfo']['description'],
    //     }, {
    //         name: 'Ghi chú',
    //         content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
    //                   LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
    //                   No comments yet! You be the first to comment.`,
    //     },
    //     {
    //         name: 'Tài liệu',
    //         content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
    //                   LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
    //                   No comments yet! You be the first to comment.`,
    //     }
    // ]
    return (
        <>
            { children }
            {/*<div className='flex fixed bottom-0 right-0 left-0 top-0'>*/}
            {/*    <div*/}
            {/*        className='header flex fixed right-0 left-[475px] bg-borderGray p-0 transition-all border-b-borderButtonColor h-[70px]'>*/}
            {/*        <div className='flex items-center justify-between px-[15px] h-full gap-5 w-full'>*/}
            {/*            <h1 className='font-semibold text-base text-white text-center'>*/}
            {/*                <a href='#' className="">{dataCourse['courseInfo']['name']}</a>*/}
            {/*            </h1>*/}
            {/*            <div className='flex justify-center items-center gap-5 max-w-[30%] gap-4'>*/}
            {/*                <div className="flex gap-3 items-center">*/}
            {/*                    <div className='w-[40px] h-[40px]'>*/}
            {/*                        <CircularProgressbar*/}
            {/*                            value={dataCourse['courseInfo']['percent_done']}*/}
            {/*                            text={dataCourse['courseInfo']['percent_done'] + '%'}*/}
            {/*                            styles={buildStyles({*/}
            {/*                                // Rotation of path and trail, in number of turns (0-1)*/}
            {/*                                rotation: 0.25,*/}
            {/*                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'*/}
            {/*                                strokeLinecap: 'butt',*/}
            {/*                                // Text size*/}
            {/*                                textSize: '25px',*/}
            {/*                                // How long animation takes to go from one percentage to another, in seconds*/}
            {/*                                pathTransitionDuration: 0.5,*/}
            {/*                                // Can specify path transition in more detail, or remove it entirely*/}
            {/*                                // pathTransition: 'none',*/}
            {/*                                // Colors*/}
            {/*                                pathColor: '#147B65',*/}
            {/*                                textColor: '#fff',*/}
            {/*                            })}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className='text-sm	 text-white'>*/}
            {/*                        Tiến độ*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <button className='btn-link text-white text-sm	 flex gap-1 align-items-center'>*/}
            {/*                    <span className="material-symbols-outlined mx-auto">draft</span>*/}
            {/*                    <span> Ghi chú</span>*/}
            {/*                </button>*/}
            {/*                <button className='btn-link text-white text-sm	 flex gap-1 align-items-center'>*/}
            {/*                    <span className="material-symbols-outlined mx-auto">question_exchange</span>*/}
            {/*                    <span> Hướng dẫn</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='sidebar overflow-auto relative flex-none w-[475px] shadow-customShadow'>*/}
            {/*        <form className="search-course flex h-[70px] flex bg-bgLigthGrey justify-center flex-1">*/}
            {/*            <input type="text" name="s" autoComplete="off" placeholder="Tìm kiếm bài giảng"*/}
            {/*                   className='w-full block my-[6px] mx-0 pl-[20px] border-0 bg-transparent focus:outline-0 focus:text-black'/>*/}
            {/*        </form>*/}
            {/*        <div id="learn-course-curriculum">*/}
            {/*            <div className='overflow-auto absolute top-[70px] bottom-0 w-[475px] text-black'>*/}
            {/*                <div className='curriculum-scrollable'>*/}
            {/*                    <ul className='relative z-[499] m-0 p-0'>*/}
            {/*                        {dataCourse['listChapterLesson'].map((item, index) => (*/}
            {/*                            <li key={item['id']} className='px-[20px] mb-[12px] relative bg-bgGray'>*/}
            {/*                                <details className="group marker:content-['']" open>*/}
            {/*                                    <summary*/}
            {/*                                        className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">*/}
            {/*                                        <div className='flex flex-col'>*/}
            {/*                                            {item['chapter_name']}*/}
            {/*                                            <span*/}
            {/*                                                className='text-sm font-normal'>0 / {item['lessons'].length}</span>*/}
            {/*                                        </div>*/}
            {/*                                        <svg*/}
            {/*                                            className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"*/}
            {/*                                            fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"*/}
            {/*                                            strokeLinecap="round" strokeLinejoin="round">*/}
            {/*                                            <path d="M18 12H6"></path>*/}
            {/*                                            <path className="group-open:hidden" d="M12 6v12"></path>*/}
            {/*                                        </svg>*/}
            {/*                                    </summary>*/}
            {/*                                    <div className="">*/}
            {/*                                        {item['lessons'].map((itemLesson, key) => (*/}
            {/*                                            <div key={key}*/}
            {/*                                                 className='px-[20px] hover:text-primaryColor cursor-pointer'*/}
            {/*                                                 data-purpose={"curriculum-item-" + index + "-" + key}*/}
            {/*                                                 onClick={(event) => changeVideoCourse(itemLesson, event)}>*/}
            {/*                                                <div*/}
            {/*                                                    className='flex gap-[0.5rem] justify-between py-[16px]'>*/}
            {/*                                                    <div*/}
            {/*                                                        className="flex gap-[0.5rem] items-center font-normal ">*/}
            {/*                                                        <span className="material-symbols-outlined">*/}
            {/*                                                            live_tv*/}
            {/*                                                        </span>*/}
            {/*                                                        <div*/}
            {/*                                                            className="font-medium">{itemLesson['lesson_name']}</div>*/}
            {/*                                                    </div>*/}
            {/*                                                    <div className='flex gap-[1.25rem] items-center'>*/}
            {/*                                                        <span*/}
            {/*                                                            className="leading-none text-sm font-normal text-sm text-borderButtonColor">{convertToMinutesAndSeconds(itemLesson['timer'])}</span>*/}
            {/*                                                        /!*<span className="material-symbols-outlined">done</span>*!/*/}
            {/*                                                        {itemLesson.isPassed ? '' : <span*/}
            {/*                                                            className="material-symbols-outlined">lock</span>}*/}
            {/*                                                    </div>*/}
            {/*                                                </div>*/}
            {/*                                            </div>*/}
            {/*                                        ))}*/}
            {/*                                    </div>*/}
            {/*                                </details>*/}
            {/*                            </li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='content flex-1 overflow-auto relative mt-[70px]'>*/}
            {/*        <div id="learn-content-item">*/}
            {/*            <div className="content-item-scrollable">*/}
            {/*                <div className="max-w-full pb-[80px]">*/}
            {/*                    <div className='video-player'>*/}
            {/*                        <div*/}
            {/*                            className='bg-black flex w-full text-white min-h-[40rem] max-h-heightVideo h-[100vh] overflow-hidden relative'>*/}
            {/*                            <ReactPlayer*/}
            {/*                                controls={true}*/}
            {/*                                url={"https://www.youtube.com/watch?v=" + dataLessonById['main_attachment']}*/}
            {/*                                width='100%'*/}
            {/*                                height='100%'*/}
            {/*                                playing={false}*/}
            {/*                                onEnded={onEnded}*/}
            {/*                                onProgress={handleProgress}*/}
            {/*                            >*/}
            {/*                            </ReactPlayer>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className='tab-detail'>*/}
            {/*                        <div className="flex flex-col">*/}
            {/*                            /!* Tạo các tab *!/*/}
            {/*                            <div*/}
            {/*                                className="flex border-gray-200 overflow-hidden self-stretch rounded-t-xl border">*/}
            {/*                                {tabs.map((tab, index) => (*/}
            {/*                                    <button*/}
            {/*                                        key={index}*/}
            {/*                                        className={`py-[1.25rem] px-[1.88rem] text-base font-semibold flex-1 flex-shrink-0 basis-0 border-r last:border-r-0 ${*/}
            {/*                                            currentTab === index ? 'bg-bgGray text-primaryColor' : ''*/}
            {/*                                        }`}*/}
            {/*                                        onClick={() => setCurrentTab(index)}*/}
            {/*                                    >*/}
            {/*                                        {tab.name}*/}
            {/*                                    </button>*/}
            {/*                                ))}*/}
            {/*                            </div>*/}

            {/*                            /!* Hiển thị nội dung của tab hiện tại *!/*/}
            {/*                            <div className="p-[1.88rem] bg-bgGray rounded-b-xl text-base"*/}
            {/*                                 dangerouslySetInnerHTML={{__html: tabs[currentTab].content}}></div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
};

export default LearnLayout;