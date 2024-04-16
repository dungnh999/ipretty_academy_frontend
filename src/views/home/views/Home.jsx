import React from 'react';
import Banner from "academy/views/home/components/Banner";
import Category from "academy/views/home/components/Category";
import Course from "academy/views/home/components/Course";
import AddOn from "academy/views/home/components/AddOn";
import Counter from "academy/views/home/components/Counter";

const Home = (props) => {
    return (
        <div>
            <Banner/>
            <div className="pt-elementPadding">
                <div className="container max-w-screen-xl mx-auto gap-[5.625rem] flex flex-col">
                    <Category/>
                    <Course/>
                    <AddOn/>
                    <Counter/>
                </div>
            </div>
        </div>
    )
};

export default Home;