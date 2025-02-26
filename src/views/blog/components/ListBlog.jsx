import React, {useEffect, useState} from 'react';
import Pagination from "academy/components/UI/Pagination";
import PostService from "academy/service/PostService";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import {Link, useParams} from "react-router-dom";

const ListBlog = (props) => {


    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        PostService.getListPost(handleResponses, handlError, '')
    }, dataPosts)

    function handleResponses(res) {
        setDataPosts(res.data.data);
    }

    function handlError(res) {
        console.log(res)
    }

    return (
        <div className="mt-[2.5rem] grid grid-cols-1 gap-[1.88rem]">
            {
                (dataPosts) ? dataPosts.map((item, key) => (
                    <Link to={'/blog/' + item.slug} className='item-course' key={key}>
                        <div
                            className="flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300 hover:bg-bgLigthGrey">
                            <div className="w-[25.625rem] overflow-hidden relative">
                                {/*<img className="object-cover object-top w-full h-full"*/}
                                {/*     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'*/}
                                {/*     alt='Mountain'/>*/}
                                <ImageBannerWithFallback
                                    className="object-cover object-top w-full h-full"
                                    width="500" height="40"
                                     src={process.env.API_URL + item['bannerUrl']}
                                     alt="image 1"></ImageBannerWithFallback>
                            </div>
                            <div className="p-[1.25rem] flex flex-col justify-center it w-full gap-[1rem]">
                                <h1 className="text-base font-semibold capitalize mt-[0.75rem]">{item.title}</h1>
                                <div className="flex gap-[0.5rem] items-center">
                        <span className="material-symbols-outlined text-primaryColor">
                            calendar_today
                        </span>
                                    <span>{item.created_at}</span>
                                </div>
                                <p className="font-normal text-base text-subColor leading-[1.6875rem]">
                                    Looking for an amazing & well-functional LearnPress WordPress Theme? Online
                                    education...
                                </p>
                            </div>
                        </div>
                    </Link>
                )) : ''
            }
            {/*<Pagination/>*/}
        </div>
    )
};

export default ListBlog;