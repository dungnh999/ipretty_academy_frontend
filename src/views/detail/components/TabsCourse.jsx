import React, { useState } from 'react';
import start from 'academy/assets/icons/start'
import start_full from 'academy/assets/icons/start_full'
import reply from 'academy/assets/icons/reply'
import previous from 'academy/assets/icons/previous'
import next from 'academy/assets/icons/next'
import Pagination from "academy/components/UI/Pagination";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import {convertToMinutesAndSeconds} from "academy/helpers/utils";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
const TabsCourse = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const {dataCourse} = useDetailCourseContext();

    const tabs = [
        {
            name: 'Tổng quan',
            content: dataCourse['courseInfo']['description'],
        },
        {
            name: 'Nội dung',
            content: <div>
                {/* <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p> */}
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
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>{itemLesson['lesson_name']}</div>
                                            </div>
                                            <div className='flex gap-[1rem] items-center'>
                                                <span className="leading-none text-sm font-normal">{convertToMinutesAndSeconds(itemLesson['timer'])}</span>
                                                <button className="bg-primaryColor py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Học thử</button>
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
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
        {
            name: 'FAQs',
            content: <div className='flex flex-col gap-[1.25rem]'>
                <div className="list-lessons flex flex-col gap-[0.75rem]">
                    {/* Lesson Item 1 */}
                    <div className='bg-white rounded-lg item-lessons shadow-md'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]" open>
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>

                    {/* Lesson Item 2 */}
                    <div className='bg-white rounded-lg item-lessons shadow-md'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>

                    {/* Lesson Item 3 */}
                    <div className='bg-white rounded-lg item-lessons shadow-md'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>

                    {/* Lesson Item 4 */}
                    <div className='bg-white rounded-lg item-lessons shadow-md'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]">
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>
                </div>
            </div>,
        },
        {
            name: 'Đánh giá',
            content: <div className="flex flex-col gap-[1.25rem] px-4 md:px-8 lg:px-16">
                <div>
                    <p className='font-semibold capitalize text-xl'>comments</p>
                </div>
                <div className='flex gap-[0.75rem] items-center'>
                    <p className='text-3xl font-semibold'>5.0</p>
                    <div className='flex flex-col'>
                        <div className='flex gap-[0.25rem]'>
                            <img src={start_full} className='h-[1.25rem] w-[1.25rem]' />
                            <img src={start_full} className='h-[1.25rem] w-[1.25rem]' />
                            <img src={start_full} className='h-[1.25rem] w-[1.25rem]' />
                            <img src={start_full} className='h-[1.25rem] w-[1.25rem]' />
                            <img src={start_full} className='h-[1.25rem] w-[1.25rem]' />
                        </div>
                        <p className='text-subColor font-normal text-sm'>based on 146,951 ratings</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem]'>
                    {[
                        { percentage: 90, stars: [true, true, true, true, true] },
                        { percentage: 50, stars: [true, true, true, true, false] },
                        { percentage: 20, stars: [true, true, true, false, false] },
                        { percentage: 10, stars: [true, true, false, false, false] },
                        { percentage: 45, stars: [false, false, false, false, false] },
                    ].map((item, index) => (
                        <div className='flex gap-[1.25rem] items-center' key={index}>
                            <div className='flex gap-[0.5rem] items-center'>
                                <div className='flex gap-[0.25rem]'>
                                    {item.stars.map((filled, starIndex) => (
                                        <img
                                            src={filled ? start_full : start}
                                            className='h-[1rem] w-[1rem]'
                                            key={starIndex}
                                        />
                                    ))}
                                </div>
                                <div>{item.percentage}%</div>
                            </div>
                            <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                <div className="bg-yellowColor h-[0.54769rem]" style={{ width: `${item.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='list-comment'>
                    <div className='flex flex-col gap-[1.25rem]'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div className='flex gap-[1.25rem] border-t pt-[1.25rem]' key={index}>
                                <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                    <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt="" />
                                </div>
                                <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                    <div className='flex-1'>
                                        <div className='flex justify-between'>
                                            <h1 className='text-sm font-semibold'>Laura Hipster</h1>
                                            <p className='text-sm font-normal text-subColor'>October 03, 2022</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-base text-subColor font-normal'>
                                            Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                                        </p>
                                    </div>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <img src={reply} alt='Lỗi ảnh' />
                                        <span className='text-sm font-normal'>Reply</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>,
        },
    ];
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
        </div>
    )
};

export default TabsCourse;