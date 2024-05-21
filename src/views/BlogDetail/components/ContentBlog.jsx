import React from 'react';
import TagsBlog from "academy/views/BlogDetail/components/TagsBlog";
import Previous from 'academy/assets/icons/previous';
import Next from 'academy/assets/icons/next';
import reply from "assets/icons/reply";
import Pagination from "academy/components/UI/Pagination";

const ContentBlog = (props) => {
    return (
        <div className='flex flex-col gap-[2.5rem] mb-[2.5rem]'>
            <div className='heading-blog'>
                <h1 className='text-3xl font-semibold mb-[1.25rem]'>Best LearnPress WordPress Theme Collection for 2023</h1>
                <div className='flex gap-[1.5rem]'>
                    <div className='flex items-center gap-[0.25rem]'>
                    <span className="material-symbols-outlined text-primaryColor">
                        person
                    </span>
                        <p className='leading-[0rem]'>Determined-poitras</p>
                    </div>
                    <div className='flex items-center gap-[0.25rem]'>
                    <span className="material-symbols-outlined text-primaryColor">
                        person
                    </span>
                        <p className='leading-[0rem]'>Determined-poitras</p>
                    </div>
                    <div className='flex items-center gap-[0.25rem]'>
                    <span className="material-symbols-outlined text-primaryColor">
                        person
                    </span>
                        <p className='leading-[0rem]'>Determined-poitras</p>
                    </div>
                </div>
            </div>
            <div className='banner-blog'>
                <div className='w-[61.875rem] h-[37.6875rem] bg-black rounded-xl overflow-hidden'>
                    <img src='' alt='lỗi'/>
                </div>
            </div>
            <div className='content-blog text-base font-normal text-subColor break-words'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim
                    sed volutpat feugiat vel enim eu turpis imperdiet.
                    <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim
                    sed volutpat feugiat vel enim eu turpis imperdiet.

                </p>
            </div>
            <TagsBlog/>
            <div className='py-[3.75rem]'>
                <div className='flex gap-[1.88rem]'>
                    <div className='flex-1 p-[1.88rem] border rounded-lg'>
                        <div className='flex gap-[1.5rem] items-center'>
                            <svg
                                className='bg-bgGray w-[2.75rem] h-[2.75rem]'
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_2480_332)">
                                    <path d="M12.842 6.175L11.667 5L6.66699 10L11.667 15L12.842 13.825L9.02533 10L12.842 6.175Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2480_332">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='flex gap-[0.75rem] flex-col'>
                                <p>Prev Articles</p>
                                <h1 className='font-semibold text-xl'>Best LearnPress WordPress Theme Collection for 2023</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 p-[1.88rem] border rounded-lg'>
                        <div className='flex gap-[1.5rem] items-center text-right'>
                            <div className='flex gap-[0.75rem] flex-col'>
                                <p>Prev Articles</p>
                                <h1 className='font-semibold text-xl'>Best LearnPress WordPress Theme Collection for 2023</h1>
                            </div>
                            <svg  className='bg-bgGray w-[2.75rem] h-[2.75rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.3332 5L7.1582 6.175L10.9749 10L7.1582 13.825L8.3332 15L13.3332 10L8.3332 5Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comment-blog'>
                <div className='title-comment'>
                    <h1 className='font-semibold text-xl mb-[0.75rem]'>
                        Comments
                    </h1>
                    <p className='text-subColor font-normal text-base'>20 Comments</p>
                </div>
                <div className='list-comment'>
                    <div className='flex flex-col gap-[1.25rem]'>
                        <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                            <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
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
                        <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                            <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
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
                        <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                            <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
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
                        <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                            <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
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
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    )
};

export default ContentBlog;