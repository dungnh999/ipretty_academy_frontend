import React from 'react';

const Counter = (props) => {
    return (
        <div className="px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">25K+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">25K+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">25K+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">25K+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">Active Students</p>
                </div>
            </div>
        </div>
    )
};

export default Counter;