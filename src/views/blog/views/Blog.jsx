import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import TitleBlog from "academy/views/blog/components/TitleBlog";
import ListBlog from "academy/views/blog/components/ListBlog";
import SidebarBlog from "academy/components/Blog/sidebarBlog";

const Home = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className="flex justify-between gap-[1.87rem]">
                        <div className="basis-10/12">
                            <TitleBlog/>
                            <ListBlog/>
                        </div>
                       <SidebarBlog/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;