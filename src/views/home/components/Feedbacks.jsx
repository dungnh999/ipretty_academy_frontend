import React from 'react';
import comcoma from 'assets/comcoma/comcoma'
const Feedbacks = (props) => {
    return (
        <div>
            <div className="text-center mb-[3.12rem]">
                <h2 className="mb-[0.75rem] text-2xl font-semibold">Student feedbacks</h2>
                <p className="text-subColor font-medium text-base">What Students Say About Academy LMS</p>
            </div>
            <div className="grid grid-cols-4 gap-[1.88rem]">
                <div className="py-[2.5rem] px-[1.88rem] border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma}/>
                    </div>
                    <div className='mt-[1.25rem]'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-[1.88rem]'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-[0.5rem]'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-[2.5rem] px-[1.88rem] border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma}/>
                    </div>
                    <div className='mt-[1.25rem]'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-[1.88rem]'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-[0.5rem]'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-[2.5rem] px-[1.88rem] border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma}/>
                    </div>
                    <div className='mt-[1.25rem]'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-[1.88rem]'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-[0.5rem]'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-[2.5rem] px-[1.88rem] border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma}/>
                    </div>
                    <div className='mt-[1.25rem]'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-[1.88rem]'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-[0.5rem]'>Roe Smith</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Feedbacks;