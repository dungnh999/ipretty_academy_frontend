import React from 'react';
import reply from "assets/icons/reply";
import Pagination from "academy/components/UI/Pagination";

const Comment = (props) => {
    return (
        <div className='comment-blog'>
            <div className='title-comment'>
                <h1 className='font-semibold text-xl mb-[0.75rem]'>
                    Bình luận
                </h1>
                <p className='text-subColor font-normal text-base'>0 Bình luận</p>
            </div>
            <div className='list-comment'>
                <div className='flex flex-col gap-[1.25rem]'>
                    <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                        <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                            <img
                                src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev"
                                alt=""/>
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
                                    Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur
                                    lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus
                                    bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed
                                    volutpat feugiat vel.
                                </p>
                            </div>
                            <div className='flex gap-[0.5rem] items-center'>
                                <img src={reply} alt='Lỗi ảnh'/>
                                <span className='text-sm font-normal'>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </div>
        </div>
    );
};

export default Comment;