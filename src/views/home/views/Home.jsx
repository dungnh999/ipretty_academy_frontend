import React from 'react';
import Banner from "academy/views/home/components/Banner";
import Category from "academy/views/home/components/Category";
import Course from "academy/views/home/components/Course";
import AddOn from "academy/views/home/components/AddOn";
import Counter from "academy/views/home/components/Counter";
import Skill from "academy/views/home/components/Skill";
import Feedbacks from "academy/views/home/components/Feedbacks";
import Blog from "academy/views/home/components/Blog";
import Teacher from "academy/views/home/components/Teacher";
import Offline from "academy/views/home/components/Offline";
import Service from "academy/views/home/components/Service";
import Facilities from "academy/views/home/components/Facilities";
import Form from "academy/views/home/components/Form";
import Why from "academy/views/home/components/Why";
import Brand from "academy/views/home/components/Brand";

const Home = (props) => {
    return (
        <div>
            <Banner/>
            <div className="pt-elementPadding">
                <div className="container max-w-screen-xl mx-auto gap-[5.625rem] flex flex-col">
                    <Category/>
                    <Course/>
                    <Course/>
                    <Teacher/>
                    <Offline/>
                    <Service/>
                    <Facilities/>
                    <AddOn/>
                    <Why/>
                    <Counter/>
                    <Brand/>
                    <Feedbacks/>
                    <Form/>
                    {/*<Blog/>*/}
                </div>
            </div>
        </div>
    )
};

export default Home;