import React from 'react';
import banner from "assets/banner";

const Banner = (props) => {
    return (
        <div className='mx-auto w-full'>
            <div
                className="py-20 bg-cover bg-no-repeat h-[43rem]"
                style={{
                    backgroundImage: `url(${ banner })`
                }}
            >
                <div className="flex flex-col justify-center mx-auto max-w-screen-xl h-full">
                    <div className="max-w-2xl">
                        <p className="mt-4 tracking-tight font-semibold text-4xl">
                            Build Skills with <br/> Online Course
                        </p>
                    </div>
                    <div className="max-w-xl">
                        <p className="mt-4 text-base leading-7 font-normal">Over 500+
                            We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                        </p>
                    </div>
                    <div className="max-w-xl">
                        <button>ádsadgsadgshdgahsđshj</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;