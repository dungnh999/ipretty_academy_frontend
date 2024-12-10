import React, { useState, useEffect } from 'react';
import { Rating, Pagination } from "flowbite-react";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import {convertToHourMinuteCourse, convertToMinutesAndSeconds} from "academy/helpers/utils";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import ModalReview from './ModalReview';
import CommentService from "academy/service/Comment";
const TabsCourse = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalReco, setTotalReco] = useState(0);
    const [ratingPersen, setRatingPersen] = useState({});
    const [totalRating, setTotalRating] = useState(0);
    const {dataCourse} = useDetailCourseContext();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataComment, setDataComment] = useState(false);
    const [lesson, setLesson] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = async (lesson) => {
        setIsOpen(true);
        setLesson(lesson)
    }

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const customTheme = {
        "base": "flex items-center",
        "label": "text-sm font-medium text-primaryColor ",
        "progress": {
            "base": "mx-4 h-5 w-2/4 rounded bg-gray-200 ",
            "fill": "h-5 rounded bg-yellow-400",
            "label": "text-sm font-medium text-primaryColor "
        }
    }

    const tabs = [
        {
            name: 'Tổng quan',
            content: (
                <div dangerouslySetInnerHTML={{ __html: dataCourse['courseInfo']['description'] }} />
            ),
        },
        {
            name: 'Nội dung',
            content: <div>
                {/* <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p> */}
                <div className="font-normal">Tổng thời gian : {convertToHourMinuteCourse(dataCourse['courseInfo']['total_duration'])}</div>
                <div className="list-lessons flex flex-col gap-[1rem] mt-[1.25rem]">
                    {dataCourse['listChapterLesson'].map((item, key) => (
                        <div key={item['id']} className='bg-white rounded-lg item-lessons shadow-md'>
                            <details className="group" open={key === 0}>
                                <summary
                                    className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor">
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <svg
                                            className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 12H6"></path>
                                            <path className="group-open:hidden" d="M12 6v12"></path>
                                        </svg>
                                        {item['chapter_name']}
                                    </div>
                                    <div className='box-time flex gap-[1rem] mr-[0.5rem] font-normal leading-normal'>
                                        <div>{item['number_lesson']} Bài học</div>
                                        <div>45 Mins</div>
                                    </div>
                                </summary>
                                <div className="flex flex-col">
                                    {item['lessons'].map((itemLesson) => (
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between items-center border-b last:border-0'>
                                            {itemLesson['is_demo'] ?    
                                                <>
                                                    <div className="flex gap-[0.5rem] items-center text-primaryColor font-normal">
                                                        <span class="material-symbols-outlined">live_tv</span>
                                                        <div>{itemLesson['lesson_name']}</div>
                                                    </div>
                                                    <div className='flex gap-[1rem] items-center'>
                                                        <button className="bg-primaryColor py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal" onClick={() => openModal(itemLesson['main_attachment'])}>Học thử</button>
                                                        <span className="leading-none text-sm font-normal">{convertToHourMinuteCourse(itemLesson['lesson_duration'])}</span>
                                                        <span class="material-symbols-outlined">visibility</span>
                                                    </div> 
                                                </>
                                            :   
                                                <>
                                                    <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                        <span class="material-symbols-outlined">live_tv</span>
                                                        <div>{itemLesson['lesson_name']}</div>
                                                    </div>
                                                    <div className='flex gap-[1rem] items-center'>
                                                        <span className="leading-none text-sm font-normal">{convertToHourMinuteCourse(itemLesson['lesson_duration'])}</span>
                                                        <span className="material-symbols-outlined">lock</span>
                                                    </div>
                                                </>

                                            }
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>,
        },
        {
            name: 'Giảng viên',
            content: <div className='flex flex-col gap-[1.25rem]'>
                <div className='flex flex-col md:flex-row gap-[1.5rem] items-center'>
                    <div className='box-image w-full md:w-[11.25rem] h-[11.25rem] bg-black rounded-2xl overflow-hidden'>
                        <ImageBannerWithFallback
                            src={dataCourse['teacherInfo']['avatar']}
                            className='h-full w-full object-contain'
                        />
                    </div>
                    <div className='flex flex-col gap-[0.75rem] flex-1'>
                        <h1 className="text-2xl">{dataCourse['teacherInfo']['name']}</h1>
                        <p>{dataCourse['teacherInfo']['about']}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-[0.75rem]">
                    <div>Follow: </div>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index}>
                            <a href="#" className="text-blue-500 hover:underline">
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </div>,
        },
        // {
        //     name: 'FAQs',
        //     content: <div className='flex flex-col gap-[1.25rem]'>
        //         <div className="list-lessons flex flex-col gap-[0.75rem]">
        //             {/* Lesson Item 1 */}
        //             <div className='bg-white rounded-lg item-lessons shadow-md'>
        //                 <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]" open>
        //                     <summary
        //                         className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
        //                         <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
        //                         <svg
        //                             className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
        //                             fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
        //                             strokeLinecap="round" strokeLinejoin="round">
        //                             <path d="M18 12H6"></path>
        //                             <path className="group-open:hidden" d="M12 6v12"></path>
        //                         </svg>
        //                     </summary>
        //                     <div className="mt-[1.25rem] text-base font-normal text-subColor">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
        //                     </div>
        //                 </details>
        //             </div>
        //
        //             {/* Lesson Item 2 */}
        //             <div className='bg-white rounded-lg item-lessons shadow-md'>
        //                 <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
        //                     <summary
        //                         className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
        //                         <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
        //                         <svg
        //                             className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
        //                             fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
        //                             strokeLinecap="round" strokeLinejoin="round">
        //                             <path d="M18 12H6"></path>
        //                             <path className="group-open:hidden" d="M12 6v12"></path>
        //                         </svg>
        //                     </summary>
        //                     <div className="mt-[1.25rem] text-base font-normal text-subColor">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
        //                     </div>
        //                 </details>
        //             </div>
        //
        //             {/* Lesson Item 3 */}
        //             <div className='bg-white rounded-lg item-lessons shadow-md'>
        //                 <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
        //                     <summary
        //                         className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
        //                         <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
        //                         <svg
        //                             className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
        //                             fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
        //                             strokeLinecap="round" strokeLinejoin="round">
        //                             <path d="M18 12H6"></path>
        //                             <path className="group-open:hidden" d="M12 6v12"></path>
        //                         </svg>
        //                     </summary>
        //                     <div className="mt-[1.25rem] text-base font-normal text-subColor">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
        //                     </div>
        //                 </details>
        //             </div>
        //
        //             {/* Lesson Item 4 */}
        //             <div className='bg-white rounded-lg item-lessons shadow-md'>
        //                 <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
        //                     <summary
        //                         className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
        //                         <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
        //                         <svg
        //                             className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
        //                             fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
        //                             strokeLinecap="round" strokeLinejoin="round">
        //                             <path d="M18 12H6"></path>
        //                             <path className="group-open:hidden" d="M12 6v12"></path>
        //                         </svg>
        //                     </summary>
        //                     <div className="mt-[1.25rem] text-base font-normal text-subColor">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
        //                     </div>
        //                 </details>
        //             </div>
        //         </div>
        //     </div>,
        // },
        {
            name: 'Đánh giá',
            content: <div className="flex flex-col gap-[1.25rem] px-4">
                <div>
                    <p className='font-semibold capitalize text-xl'>Đánh giá</p>
                </div>
                {(totalReco > 0)
                    ?   <div>
                            <Rating theme={customTheme} className="mb-2">
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 trên 5</p>
                            </Rating>
                            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">{totalRating} lượt đánh giá</p>
                            <Rating.Advanced  theme={customTheme} percentFilled={ratingPersen.start_1} className="mb-2">
                                5 sao
                            </Rating.Advanced>
                            <Rating.Advanced  theme={customTheme} percentFilled={ratingPersen.start_2} className="mb-2">
                                4 sao
                            </Rating.Advanced>
                            <Rating.Advanced  theme={customTheme} percentFilled={ratingPersen.start_3} className="mb-2">
                                3 sao
                            </Rating.Advanced>
                            <Rating.Advanced  theme={customTheme} percentFilled={ratingPersen.start_4} className="mb-2">
                                2 sao
                            </Rating.Advanced>
                            <Rating.Advanced  theme={customTheme} percentFilled={ratingPersen.start_5}>1 sao</Rating.Advanced>
                        </div>
                    : ''
                }
                <div className='list-comment'>
                    <div className='flex flex-col gap-[1.25rem]'>
                        {(dataComment || dataComment.length > 0)
                            ?  dataComment.map(function (item , index) {
                                return <div className='flex gap-[1.25rem] border-t pt-[1.25rem]' key={index}>
                                            <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full overflow-hidden'>
                                                <ImageBannerWithFallback src="">{item.user_avatar}</ImageBannerWithFallback>
                                            </div>
                                            <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                                <div className='flex-1'>
                                                    <div className='flex justify-between'>
                                                        <h1 className='text-sm font-semibold'>{item.user_name}</h1>
                                                        {/*<p className='text-sm font-normal text-subColor'>October 03, 2022</p>*/}
                                                    </div>
                                                </div>
                                                <div>
                                                    <Rating>
                                                        {Array.from({ length: 5 }).map((_, index) => (
                                                            <Rating.Star key={index} filled={index < item.rating} />
                                                        ))}
                                                    </Rating>
                                                </div>
                                                <div>
                                                    <p className='text-base text-subColor font-normal'>
                                                        {item.comment}
                                                    </p>
                                                </div>
                                                {/*<div className='flex gap-[0.5rem] items-center'>*/}
                                                {/*    <img src={reply} alt='Lỗi ảnh' />*/}
                                                {/*    <span className='text-sm font-normal'>Reply</span>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                            })
                            :   <div className='text-center'> Không có bình luận </div>
                        }
                    </div>
                    {(totalReco  > 0)
                        ?   <div className="flex overflow-x-auto sm:justify-center mt-3">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    previousLabel="Trước"
                                    nextLabel="Sau"
                                    onPageChange={onPageChange}
                                />
                            </div>
                        : ''
                    }
                </div>
            </div>,
        },
    ];

    useEffect(() => {
        CommentService.getListCommentByCourse(handleResponses,handlError, {course_id : dataCourse['courseInfo']['course_id'] , page: currentPage })
    }, [currentPage])

    function handleResponses(res) {
        setDataComment(res.data.data.comment.data);
        setTotalPages(res.data.data.comment.total / res.data.data.comment.per_page)
        setRatingPersen(res.data.data.rating_persen)
        setTotalRating(res.data.data.total_rating)
        setTotalReco(res.data.data.comment.total)
    }

    function handlError(res) {
        // setDataCourse(res.data.data);
        console.log(res)
    }

    console.log(totalPages)

    return (
        <div className="flex flex-col max-w-full w-width-tab-course">
            {/* Tạo các tab */}
            <div className="flex border-gray-200 overflow-hidden self-stretch rounded-t-xl border">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-[1.25rem] px-[1.88rem] text-base font-semibold flex-1 flex-shrink-0 basis-0 border-r last:border-r-0 ${
                            currentTab === index ? 'bg-bgGray text-primaryColor' : ''
                        }`}
                        onClick={() => setCurrentTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Hiển thị nội dung của tab hiện tại */}
            <div className="p-[1.88rem] bg-bgGray rounded-b-xl text-base">
                {tabs[currentTab].content}
            </div>

            <ModalReview 
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                lesson={lesson}
            />
        </div>

    )
};

export default TabsCourse;