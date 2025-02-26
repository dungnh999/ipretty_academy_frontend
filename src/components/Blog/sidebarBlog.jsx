import React, {useEffect, useState} from 'react';
import PostCategoryService from "academy/service/PostCategoryService";

const SidebarBlog = (props) => {

    const [dataPostCategory, setDataPostCategory] = useState([])

    useEffect(() => {
        PostCategoryService.getListPostCategory(handleResponses, handlError, {
            status: 1
        })
    }, dataPostCategory)

    function handleResponses(res) {
        console.log(res.data.data)
        setDataPostCategory(res.data.data);
    }

    function handlError(res) {
        console.log(res)
    }


    return (
        <div className="w-[25%] flex flex-col gap-[1.88rem] sticky h-full top-[100px]">
            <div className="item-sort">
                <h1 className="text-xl font-semibold capitalize text-black">Bài viết gần đây</h1>
                <ul className="mt-[1.25rem] flex flex-col gap-[1rem]">
                    <li className="flex justify-between items-start gap-[1rem] hover:bg-bgLigthGrey cursor-pointer rounded-lg">
                        <div className="image-thumb-blog min-w-[5.625rem] h-[5.625rem] rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" className='h-full w-full' alt='lỗi'/>
                        </div>
                        <div className="">
                            <p className='break-words font-medium text-sm'>
                                Best LearnPress WordPress Theme Collection for 2023
                            </p>
                        </div>
                    </li>
                    <li className="flex justify-between items-start gap-[1rem] hover:bg-bgLigthGrey cursor-pointer rounded-lg">
                        <div className="image-thumb-blog min-w-[5.625rem] h-[5.625rem] rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" className='h-full w-full' alt='lỗi'/>
                        </div>
                        <div className="">
                            <p className='break-words font-medium text-sm'>
                                Best LearnPress WordPress Theme Collection for 2023
                            </p>
                        </div>
                    </li>
                    <li className="flex justify-between items-start gap-[1rem] hover:bg-bgLigthGrey cursor-pointer rounded-lg">
                        <div className="image-thumb-blog min-w-[5.625rem] h-[5.625rem] rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" className='h-full w-full' alt='lỗi'/>
                        </div>
                        <div className="">
                            <p className='break-words font-medium text-sm'>
                                Best LearnPress WordPress Theme Collection for 2023
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="item-sort">
                <h1 className="text-xl font-semibold capitalize text-black">Danh mục bài viết</h1>
                <ul className="mt-[1.25rem] flex flex-wrap gap-[0.62rem]">
                    {
                        (dataPostCategory) ? dataPostCategory.map((item , key) => (
                            <li key={key} className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                                {item.category_name}
                            </li>
                        )) : 'Không có bài viết'
                    }
                </ul>
            </div>
        </div>
    )
};

export default SidebarBlog;