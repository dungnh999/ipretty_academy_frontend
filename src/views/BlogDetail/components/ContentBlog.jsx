import React, {useEffect, useState} from 'react';
import TagsBlog from "academy/views/BlogDetail/components/TagsBlog";
import reply from "assets/icons/reply";
import Pagination from "academy/components/UI/Pagination";
import {useParams} from "react-router-dom";
import PostService from "academy/service/PostService";
import Comment from "academy/views/BlogDetail/components/Comment";

const ContentBlog = (props) => {
    const [dataDetailPosts, setDataDetailPosts] = useState({});

    const {slug} = useParams();


    useEffect(() => {
        PostService.getDetailPost(handleResponses, handlError, {
            slug: slug
        })
    }, dataDetailPosts)

    function handleResponses(res) {
        console.log(res.data.data)
        setDataDetailPosts(res.data.data);
    }

    function handlError(res) {
        console.log(res)
    }


    return (<div className='flex flex-col gap-[2.5rem] mb-[2.5rem]'>
        <div className='heading-blog'>
            <h1 className='text-3xl font-semibold mb-[1.25rem]'>{dataDetailPosts.title}</h1>
            <div className='flex gap-[1.5rem]'>
                <div className='flex items-center gap-[0.25rem]'>
                    <span className="material-symbols-outlined text-primaryColor">
                        person
                    </span>
                    <p className='leading-[0rem]'>Người quản trị</p>
                </div>
            </div>
        </div>
        <div className='banner-blog'>
            <div className='w-[61.875rem] h-[37.6875rem] bg-black rounded-xl overflow-hidden'>
                <img src={process.env.API_URL + dataDetailPosts.bannerUrl} alt='lỗi'/>
            </div>
        </div>
        <div className='content-blog text-base font-normal text-subColor break-words' dangerouslySetInnerHTML={{ __html: dataDetailPosts.content }}></div>
        <TagsBlog/>
        <Comment/>
    </div>)
};

export default ContentBlog;