import React from 'react';
import thumb from 'academy/assets/thumb.png'
const Sidebar = (props) => {
    return(
        <div className='absolute right-0 top-[-19.5rem] text-white rounded-3xl overflow-hidden border-bgLigthGrey border gap-0'>
            <div className='w-[25.625rem] h-[15.625rem]'>
                <img src={thumb} className='w-full h-full border-none'/>
            </div>
            <div className='flex justify-center py-[1.88rem] items-center gap-[1.88rem] bg-whiteColor'>
                <div className='price flex gap-[0.5rem] items-center'>
                    <span className='line-through text-subColor text-sm'>1.000.000đ</span>
                    <span className='font-semibold text-redColor capitalize leading-normal text-base'>2.000.000đ</span>
                </div>
                <div className='btn-start'>
                    <button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full'>Start Now</button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;