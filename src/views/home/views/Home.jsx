import React from 'react';
import Banner from "academy/views/home/components/Banner";
import CategoryCourse from "academy/views/home/components/CategoryCourse";

const Home = (props) => {
    return (
        <div>
            <Banner/>
            <CategoryCourse/>
        </div>
    )
};

export default Home;