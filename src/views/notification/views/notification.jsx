import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";

const Notification = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <h1 className='text-3xl font-semibold capitalize py-[3.75rem]'>FAQs</h1>
                <div className='flex flex-col gap-[1.88rem]'>
                    <div className='grid grid-cols-2 gap-[1.88rem]'>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[1.88rem]'>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[1.88rem]'>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[1.88rem]'>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className='bg-bgGray rounded-lg item-lessons py-[1.25rem] px-[1.88rem]'>
                            <details className="group marker:content-['']">
                                <summary
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                    Lessons with video content
                                    <svg
                                        className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg>
                                </summary>
                                <div className="">
                                    <div className='mt-[1.25rem] text-base font-normal text-secondaryColor'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Notification;