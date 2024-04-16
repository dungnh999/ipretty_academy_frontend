import React from 'react';
import background from "assets/add_on/background";

const AddOn = (props) => {
    return(
        <div className="py-[3.41rem] px-[3.12rem] rounded-lg" style={{backgroundImage: `url(${background})`}}>
            <div className=" max-w-[28.125rem]">
                <p className="font-semibold text-sm capitalize text-subColor">GET MORE POWER FONT</p>
                <p className="title-addOn capitalize font-semibold text-2xl">LearnPress Add-On </p>
                <p className="font-normal text-subColor"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aliquid architecto asperiores assumenda beatae consectetur culpa dolorem eligendi ex in, iusto minus natus provident quo, sint temporibus voluptates voluptatibus!</p>
            </div>
        </div>
    )
};

export default AddOn;