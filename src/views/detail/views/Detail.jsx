import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import Banner from "academy/views/detail/components/banner";
import TabsCourse from "academy/views/detail/components/TabsCourse";
import Sidebar from "academy/views/detail/components/Sidebar";
import FormComment from "academy/components/UI/FormComment";

const Detail = (props) => {
    return(
        <div>
            <BreadCrumb/>
            <Banner/>
            <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col mt-[3.12rem] relative pr-[27.5rem]">
                <TabsCourse/>
                <Sidebar/>
                <FormComment/>
            </div>
        </div>
    );
};

export default Detail;