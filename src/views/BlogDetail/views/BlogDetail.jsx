import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";

import SidebarBlog from "academy/components/Blog/sidebarBlog";
import FormComment from "academy/components/UI/FormComment";
import ContentBlog from "academy/views/BlogDetail/components/ContentBlog";

const BlogDetail = (props) => {


    return (
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className="flex justify-between gap-[1.87rem]">
                        <div className="basis-10/12">
                            <ContentBlog/>
                            <FormComment/>
                        </div>
                        <SidebarBlog/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogDetail;