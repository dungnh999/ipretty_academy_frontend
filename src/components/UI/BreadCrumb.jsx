import React from 'react';

const BreadCrumb = (props) => {
    return(
        <div className='bg-bgGray'>
            <div className="container max-w-screen-xl mx-auto flex p-[0.625rem] items-center">
                <p>Homepage</p>
                <span className="material-symbols-outlined text-sm px-[0.5rem]">
                    arrow_forward_ios
                </span>
                <p>Homepage</p>
                <span className="material-symbols-outlined  text-sm px-[0.5rem]">
                    arrow_forward_ios
                </span>
                <p>Homepage</p>
                <span className="material-symbols-outlined  text-sm px-[0.5rem]">
                    arrow_forward_ios
                </span>
                <p>Homepage</p>
            </div>
        </div>
    )
};

export default BreadCrumb;