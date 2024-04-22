import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import TitleCourse from "academy/views/course/components/TitleCourse";
import ListCourse from "academy/views/course/components/ListCourse";
const Home = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className="flex justify-between gap-[1.87rem]">
                        <div className="basis-10/12">
                            <TitleCourse/>
                            <ListCourse/>
                        </div>
                        <div className="basis-2/12 flex flex-col gap-[1.88rem] sticky">
                            <div className="item-sort">
                                <h1 className="text-xl font-semibold capitalize text-black">Danh mục khoá học</h1>
                                <ul className="mt-[1.25rem] flex flex-col gap-[0.62rem]">
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Commercial</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Office</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                         <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Shop</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Educate</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Academy</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Studio</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">University</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-sort">
                                <h1 className="text-xl font-semibold capitalize text-black">Giá</h1>
                                <ul className="mt-[1.25rem] flex flex-col gap-[0.62rem]">
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Miễn Phí</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">Có phí</h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-sort">
                                <h1 className="text-xl font-semibold capitalize text-black">Đánh giá</h1>
                                <ul className="mt-[1.25rem] flex flex-col gap-[0.62rem]">
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                                <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                                <h1 className="text-base font-normal leading-none capitalize">
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                            <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                            <h1 className="text-base font-normal leading-none capitalize">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </div>
                                            </h1>
                                        </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                            <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                            <h1 className="text-base font-normal leading-none capitalize">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </div>
                                            </h1>
                                        </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                            <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                            <h1 className="text-base font-normal leading-none capitalize">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </div>
                                            </h1>
                                        </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="group-name">
                                            <div className="flex items-center space-x-3">
                                            <input type="checkbox" className="border-gray-300 rounded h-4 w-4"/>
                                            <h1 className="text-base font-normal leading-none capitalize">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </div>
                                            </h1>
                                        </div>
                                        </div>
                                        <div className="count-course">
                                            <p className="font-normal text-subColor text-base">0</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;