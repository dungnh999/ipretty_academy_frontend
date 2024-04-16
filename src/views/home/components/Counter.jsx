import React from 'react';

const Counter = (props) => {
    return (
        <div className="grid grid-cols-4 gap-[1.88rem]">
            <div className="flex justify-center flex-col items-center py-[3.12rem] bg-bgGray rounded-lg">
                <p className="number-counter pb-[1rem] text-2xl text-primaryColor font-semibold">25K+</p>
                <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
            </div>
            <div className="flex justify-center flex-col items-center py-[3.12rem] bg-bgGray rounded-lg">
                <p className="number-counter pb-[1rem] text-2xl text-primaryColor font-semibold">25K+</p>
                <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
            </div>
            <div className="flex justify-center flex-col items-center py-[3.12rem] bg-bgGray rounded-lg">
                <p className="number-counter pb-[1rem] text-2xl text-primaryColor font-semibold">25K+</p>
                <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
            </div>
            <div className="flex justify-center flex-col items-center py-[3.12rem] bg-bgGray rounded-lg">
                <p className="number-counter pb-[1rem] text-2xl text-primaryColor font-semibold">25K+</p>
                <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
            </div>
        </div>
    )
};

export default Counter;