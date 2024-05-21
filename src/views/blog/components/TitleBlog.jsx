import Search from "assets/icons/search";
import React from "react";

const TitleBlog = (props) => {
    return (
        <div className="title-all-course flex justify-between items-center">
            <div className="title-course">
                <h1 className="text-3xl font-semibold capitalize">Tất cả bài viết</h1>
            </div>
            <div className="box-search flex gap-[1.25rem] items-center">
                <div className="relative text-gray-600 w-[16.875rem]">
                    <input type="search" name="serch" placeholder="Tìm kiếm"
                           className="bg-white h-10  text-sm focus:outline-none border-b-2 border-black w-full"/>
                    <button type="submit" className="absolute right-0 top-0 mt-3 ">
                        <img src={Search} className="h-full w-full"/>
                    </button>
                </div>
                <div className="action-icon">
                    <button>
                            <span className="material-symbols-outlined align-middle	">
                                category
                            </span>
                    </button>
                </div>
                <div className="action-icon">
                    <button>
                            <span className="material-symbols-outlined">
                                list
                            </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TitleBlog;