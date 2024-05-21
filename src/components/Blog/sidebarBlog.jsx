import React from 'react';

const SidebarBlog = (props) => {
    return (
        <div className="w-[25%] flex flex-col gap-[1.88rem] sticky">
            <div className="item-sort">
                <h1 className="text-xl font-semibold capitalize text-black">Danh mục bài viết</h1>
                <ul className="mt-[1.25rem] flex flex-col gap-[0.62rem]">
                    <li className="flex justify-between items-center">
                        <div className="group-name">
                            <div className="flex items-center space-x-3">
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
                <h1 className="text-xl font-semibold capitalize text-black">Recent posts</h1>
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
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free
                    </li>
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free
                    </li>
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free
                    </li>
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free couses
                    </li>
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free couses
                    </li>
                    <li className='px-[1.25rem] py-[0.5rem] max-w-max border rounded-lg cursor-pointer hover:bg-primaryColor'>
                        Free couses
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SidebarBlog;