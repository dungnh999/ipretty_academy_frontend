import React from 'react';
import ImageError404 from "academy/assets/page/img.png";
import BreadCrumb from "academy/components/UI/BreadCrumb";

const Error404 = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <h1 className='text-3xl font-semibold capitalize py-[3.75rem]'>Error</h1>
                <div className='w-[80.1875rem] h-[49.125rem]'>
                    <img src={ImageError404} alt='Lỗi' className='h-full w-full' />
                </div>
            </div>
        </div>
    )
};

export default Error404;