import React from 'react';

const Banner = (props) => {
    return(
        <div className="bg-black text-white py-[3.12rem] px-[0.62rem]">
            <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                <div className="flex flex-col gap-[1.25rem] pr-[27.5rem]">
                    <div className="heading-name-catgory flex gap-[1.25rem] items-center">
                        <div className="px-[0.75rem] py-[0.5rem] bg-gray-600 font-medium text-sm capitalize rounded-[0.5rem]">
                            Photography
                        </div>
                        <div className="text-base font-normal text-white">by Determined-Poitras</div>
                    </div>
                    <div className="title-detail-course">
                        <h1 className="text-[2.25rem]">The Ultimate Guide to the best WordPress LMS Plugin</h1>
                    </div>
                    <div className="flex gap-[1.5rem]">
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
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;