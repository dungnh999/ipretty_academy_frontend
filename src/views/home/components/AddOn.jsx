import React from 'react';
import background from "assets/add_on/background";

const AddOn = (props) => {
    return(
        <div
            className="py-[3.41rem] px-4 sm:px-6 md:px-8 lg:px-12 rounded-lg"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover', // Đảm bảo hình nền bao phủ toàn bộ khu vực
                backgroundPosition: 'center', // Căn giữa hình nền
                backgroundRepeat: 'no-repeat' // Không lặp lại hình nền
            }}
        >
            <div className="max-w-[28.125rem]">
                <p className="font-semibold text-sm capitalize text-subColor">GET MORE POWER FONT</p>
                <p className="title-addOn capitalize font-semibold text-2xl">LearnPress Add-On</p>
                <p className="font-normal text-subColor">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aliquid architecto asperiores assumenda beatae consectetur culpa dolorem eligendi ex in, iusto minus natus provident quo, sint temporibus voluptates voluptatibus!
                </p>
            </div>
        </div>

    )
};

export default AddOn;