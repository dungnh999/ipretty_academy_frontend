import React from 'react';
import logo from "assets/logo/logo-header.png";

const Course = (props) => {
    return (
        <div className="course-list">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className="text-2xl font-semibold">Khoá học</h2>
                    <p className="text-base text-subColor">Khoá học nỗi bật</p>
                </div>
                <div className="">
                    <button className="border-borderButtonColor border-2 py-[0.62rem] px-[1.5rem] font-medium text-base rounded-full shadow-lg hover:shadow-primaryColor">Xem Tất Cả</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[1.88rem] mt-[2.12rem]">
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="group border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <a href='/detail'>
                        <div className="h-[15.625rem] overflow-hidden relative">
                            <img className="object-cover object-top w-full"
                                 src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                 alt='Mountain'/>
                            <p className="absolute top-5 left-5 bg-black text-white p-[0.75rem] font-medium text-sm rounded-lg">
                                Photograghy
                            </p>
                        </div>
                        <div className="p-[1.25rem]">
                            <p className="text-subColor text-sm pb-[0.75rem]">
                                <span>by: </span>
                                <span className="font-medium">Bác Sĩ</span>
                            </p>
                            <div className="name-title-course">
                                <p className="capitalize font-semibold text-base group-hover:text-primaryColor">Bài học mới</p>
                            </div>
                            <div className="py-[1rem] flex gap-[1.5rem]">
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor block">
                                        nest_clock_farsight_analog
                                    </p>
                                    <p className="text-sm font-normal text-subColor">2 ngày</p>
                                </div>
                                <div className="flex gap-[0.5rem] items-center justify-center">
                                    <p className="material-symbols-outlined text-primaryColor">
                                        person
                                    </p>
                                    <p className="text-sm font-normal text-subColor">156 Học sinh</p>
                                </div>
                            </div>
                            <hr className="text-subColor"/>
                            <div className="pt-[1rem]">
                                <div className="flex justify-between">
                                    <div className="text-base">
                                        <del className="pr-[0.5rem] font-normal text-subColor">2.000.000đ</del>
                                        <span className="font-medium capitalize text-primaryColor">Free</span>
                                    </div>
                                    <div className="text-base text-thirdColor font-medium capitalize">
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Course;