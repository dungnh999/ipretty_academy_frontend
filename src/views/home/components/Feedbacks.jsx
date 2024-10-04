import React from 'react';
import comcoma from 'assets/comcoma/comcoma'
const Feedbacks = (props) => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="mb-3 text-2xl font-semibold">Student feedbacks</h2>
                <p className="text-subColor font-medium text-base">What Students Say About Academy LMS</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="py-8 px-6 border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma} alt="Comment" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-1'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-8 px-6 border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma} alt="Comment" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-1'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-8 px-6 border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma} alt="Comment" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-1'>Roe Smith</p>
                    </div>
                </div>
                <div className="py-8 px-6 border border-bgLigthGrey rounded-lg">
                    <div>
                        <img src={comcoma} alt="Comment" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-medium text-base'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl font-semibold'>Roe Smith</p>
                        <p className='text-base font-normal mt-1'>Roe Smith</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Feedbacks;