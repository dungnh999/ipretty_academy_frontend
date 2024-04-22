import React from 'react';

const Blog = (props) => {
    return(
        <div className="title-blog">
            <div>
                <h1 className="text-2xl font-semibold capitalize">Latest articles</h1>
                <p className="text-base font-normal text-subColor">Explore our Free Acticles</p>
            </div>
            <div className="mt-[2.12rem] grid grid-cols-3 gap-[1.88rem]">
                <div className="border rounded-lg overflow-auto shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <div className="h-[15.625rem] overflow-hidden">
                        <img className="object-cover object-top w-full overflow-hidden" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'/>
                    </div>
                    <div className="p-[1.25rem] flex flex-col gap-[0.75rem]">
                        <h2 className="text-xl font-semibold">Best LearnPress WordPress Theme Collection for 2023</h2>
                        <p className="flex items-center">
                            <span className="material-symbols-outlined text-primaryColor">
                                calendar_month
                            </span>
                            <p className="h-full text-sm text-subColor">
                                Jan 24, 22023
                            </p>
                        </p>
                        <p className="font-normal text-base">Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </div>
                </div>
                <div className="border rounded-lg overflow-auto shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <div className="h-[15.625rem] overflow-hidden">
                        <img className="object-cover object-top w-full overflow-hidden" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'/>
                    </div>
                    <div className="p-[1.25rem] flex flex-col gap-[0.75rem]">
                        <h2 className="text-xl font-semibold">Best LearnPress WordPress Theme Collection for 2023</h2>
                        <p className="flex items-center">
                            <span className="material-symbols-outlined text-primaryColor">
                                calendar_month
                            </span>
                            <p className="h-full text-sm text-subColor">
                                Jan 24, 22023
                            </p>
                        </p>
                        <p className="font-normal text-base">Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </div>
                </div>
                <div className="border rounded-lg overflow-auto shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                    <div className="h-[15.625rem] overflow-hidden">
                        <img className="object-cover object-top w-full overflow-hidden" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'/>
                    </div>
                    <div className="p-[1.25rem] flex flex-col gap-[0.75rem]">
                        <h2 className="text-xl font-semibold">Best LearnPress WordPress Theme Collection for 2023</h2>
                        <p className="flex items-center">
                            <span className="material-symbols-outlined text-primaryColor">
                                calendar_month
                            </span>
                            <p className="h-full text-sm text-subColor">
                                Jan 24, 22023
                            </p>
                        </p>
                        <p className="font-normal text-base">Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;