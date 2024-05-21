import React from 'react';
import previous from "assets/icons/previous";
import next from "assets/icons/next";

const Pagination = (props) => {
    return (
        <div className='pagination mt-[1.25rem]'>
            <div className='flex justify-center gap-[0.75rem]'>
                <div className='bg-white border w-[3rem] h-[3rem] text-black p-[0.62rem] text-center hover:bg-subColor rounded-full flex justify-center items-baseline cursor-pointer'>
                    <a href='#' className='flex justify-center items-center h-full'>
                        <img src={previous} alt='Lỗi' />
                    </a>
                </div>
                <div className='bg-black border w-[3rem] h-[3rem] text-white p-[0.62rem] text-center hover:bg-subColor rounded-full flex justify-center items-baseline cursor-pointer'>
                    <a aria-current="page"  href='#'>1</a>
                </div>
                <div className='bg-white border w-[3rem] h-[3rem] text-black p-[0.62rem] text-center hover:bg-subColor rounded-full flex justify-center items-baseline cursor-pointer'>
                    <a href='#'>2</a>
                </div>
                <div className='bg-white border w-[3rem] h-[3rem] text-black p-[0.62rem] text-center hover:bg-subColor rounded-full flex justify-center items-baseline cursor-pointer'>
                    <a href='#'>3</a>
                </div>
                <div className='bg-white border w-[3rem] h-[3rem] text-black p-[0.62rem] text-center hover:bg-subColor rounded-full flex justify-center items-baseline cursor-pointer'>
                    <a href='#' className='flex justify-center items-center h-full'>
                        <img src={next} alt='Lỗi' />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Pagination;