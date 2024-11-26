import React from 'react';

const Blog = (props) => {

    const articles = [
        {
            id: 1,
            title: "Best LearnPress WordPress Theme Collection for 2023",
            date: "Jan 24, 2023",
            imgSrc: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        },
        {
            id: 2,
            title: "Best LearnPress WordPress Theme Collection for 2023",
            date: "Jan 24, 2023",
            imgSrc: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        },
        {
            id: 3,
            title: "Best LearnPress WordPress Theme Collection for 2023",
            date: "Jan 24, 2023",
            imgSrc: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        },
    ];

    return(
        <div className="title-blog lg:px-4 md:px-8 lg:px-12">
            <div>
                <h1 className="text-2xl font-semibold capitalize">Bài viết nổi bật</h1>
                <p className="text-base font-normal text-subColor">Explore our Free Articles</p>
            </div>
            <div className="mt-[2.12rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.88rem]">
                {articles.map(({ id, title, date, imgSrc, description }) => (
                    <div key={id} className="border rounded-lg overflow-auto shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                        <div className="h-[15.625rem] overflow-hidden">
                            <img className="object-cover object-top w-full overflow-hidden" src={imgSrc} alt={title} />
                        </div>
                        <div className="p-[1.25rem] flex flex-col gap-[0.75rem]">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <div className="flex items-center">
                                <span className="material-symbols-outlined text-primaryColor">calendar_month</span>
                                <p className="h-full text-sm text-subColor">{date}</p>
                            </div>
                            <p className="font-normal text-base">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Blog;