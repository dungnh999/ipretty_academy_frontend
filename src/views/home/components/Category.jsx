import React from 'react';

const Category = (props) => {
    return (
        <div className="category-list">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className="text-2xl font-semibold">Danh Mục</h2>
                    <p className="text-base text-subColor">Danh mục được tìm kiếm nhiều nhất</p>
                </div>
                <div className="">
                    <button className="border-borderButtonColor border-2 py-[0.62rem] px-[1.5rem] font-medium text-base rounded-full shadow-lg hover:shadow-primaryColor">Xem Tất Cả</button>
                </div>
            </div>
            <div className="pt-[3.12rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem]">
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-xl p-[3.6rem] shadow-xl hover:-translate-y-3 hover:shadow-gray-500/40 cursor-pointer">
                    <div className="icon-category text-primaryColor">
                            <span className="material-symbols-outlined text-2xl">
                                weather_hail
                            </span>
                    </div>
                    <div className="name-category pt-[1.5rem] font-semibold">Design</div>
                    <div className="number-course pt-[0.75rem] text-subColor font-normal">38 Khoá học</div>
                </div>
            </div>
        </div>
    )
};

export default Category;