import React, {useState} from 'react';

const LearnLayout = ({ children }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const tabs = [
        {
            name: 'Overview',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        },{
            name: 'Ghi chú',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        },
        {
            name: 'Tài liệu',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        }
    ]
    return (
        <>
            <div className='flex fixed bottom-0 right-0 left-0 top-0'>
                <div className='header flex fixed right-0 left-[475px] bg-borderGray p-0 transition-all border-b-borderButtonColor'>
                    <div className='text-white leading-[70px] px-[30px]'>
                        <a href='#'>
                            Quay Lại
                        </a>
                    </div>
                    <div className='w-[850px] m-auto flex justify-between items-center px-[15px]'>
                        <h1 className='font-semibold text-base text-white'>
                            <a href='#' className="">Introduction to LearnPress: Building your Learning Management System</a>
                        </h1>
                    </div>
                </div>
                <div className='sidebar overflow-auto relative flex-none w-[475px] shadow-customShadow'>
                    <form className="search-course flex h-[70px] flex bg-bgLigthGrey">
                        <input type="text" name="s" autoComplete="off" placeholder="Search for course content" className='w-full block my-[6px] mx-0 pl-[20px] border-0 bg-transparent focus:outline-0 focus:text-black'/>
                    </form>
                    <div id="learn-course-curriculum">
                        <div className='overflow-auto absolute top-[70px] bottom-0 w-[475px] text-black'>
                            <div className='curriculum-scrollable'>
                                <ul className='relative z-[499] m-0 p-0'>
                                    <li className='px-[20px] mb-[12px] relative bg-bgGray'>
                                        <details className="group marker:content-['']" open>
                                            <summary
                                                className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">
                                                Bài học số 1
                                                <svg
                                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M18 12H6"></path>
                                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                                </svg>
                                            </summary>
                                            <div className="">
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </details>
                                    </li>
                                    <li className='px-[20px] mb-[12px] relative bg-bgGray'>
                                        <details className="group marker:content-['']" open>
                                            <summary
                                                className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">
                                               Bài học số 2
                                                <svg
                                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M18 12H6"></path>
                                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                                </svg>
                                            </summary>
                                            <div className="">
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </details>
                                    </li>
                                    <li className='px-[20px] mb-[12px] relative bg-bgGray'>
                                        <details className="group marker:content-['']" open>
                                            <summary
                                                className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">
                                                Bài học số 3
                                                <svg
                                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M18 12H6"></path>
                                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                                </svg>
                                            </summary>
                                            <div className="">
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </details>
                                    </li>
                                    <li className='px-[20px] mb-[12px] relative bg-bgGray'>
                                        <details className="group marker:content-['']" open>
                                            <summary
                                                className="px-[20px] py-[24px] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 hover:text-primaryColor [&amp;::-webkit-details-marker]:hidden sticky z-[1000] top-0 bg-bgGray">
                                                Bài học số 4
                                                <svg
                                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M18 12H6"></path>
                                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                                </svg>
                                            </summary>
                                            <div className="">
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='px-[20px] hover:text-primaryColor'>
                                                    <a href='#' className='flex gap-[0.5rem] justify-between py-[16px]'>
                                                        <div className="flex gap-[0.5rem] items-center font-normal ">
                                                            <span className="material-symbols-outlined">file_copy</span>
                                                            <div className="font-medium">Lessons with video content</div>
                                                        </div>
                                                        <div className='flex gap-[1.25rem] items-center'>
                                                            <span className="leading-none text-sm font-normal text-sm text-borderButtonColor">20 minutes</span>
                                                            {/*<span className="material-symbols-outlined">done</span>*/}
                                                            <span className="material-symbols-outlined">lock</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content flex-1 overflow-auto relative mt-[70px]'>
                    <div id="learn-content-item">
                        <div className="content-item-scrollable">
                            <div className="max-w-full pb-[80px]">
                                <div className='video-player'>
                                    <div className='bg-black flex w-full text-white min-h-[40rem] max-h-heightVideo overflow-hidden h-full relative'>
                                        <video src='https://media.istockphoto.com/id/1455772765/vi/video/th%C3%A1c-n%C6%B0%E1%BB%9Bc-v%E1%BB%9Bi-l%C3%A0n-n%C6%B0%E1%BB%9Bc-ng%E1%BB%8Dt-trong-khu-r%E1%BB%ABng-nhi%E1%BB%87t-%C4%91%E1%BB%9Bi-nhi%E1%BB%87t-%C4%91%E1%BB%9Bi-l%C3%A3ng-m%E1%BA%A1n-v%C3%A0-b%C3%ACnh-d%E1%BB%8B-v%C6%B0%E1%BB%9Dn-qu%E1%BB%91c.mp4?s=mp4-640x640-is&k=20&c=4n7Bf8Xx_mySen62asVoLRqtDMZtBFSc3QlSYs1OE30=' controls autoPlay className='w-full'></video>
                                    </div>
                                </div>
                                <div className='tab-detail'>
                                    <div className="flex flex-col">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LearnLayout;