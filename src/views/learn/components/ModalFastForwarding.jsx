import React from 'react';

const ModalFastForwarding = ({ isFastForwarding, handleSeek }) => {
    let className = 'fixed inset-0 bg-[#cfd2d8cc] opacity-90 z-[99999] hidden';
    if(isFastForwarding){
        className='fixed inset-0 bg-[#cfd2d8cc] opacity-90 z-[99999]'
    }

    return(
        <>
            <div>
                <div className={className} >
                    <div className='flex justify-center items-center  h-full'>
                        <div className='container bg-[#fff] flex flex-col items-start gap-8 max-w-[500px] min-w-[500px] rounded-lg p-6	mx-4	'>
                            <div className="title text-base font-semibold">Cảnh báo</div>
                            <div className="body text-sm">Bạn đang học nhanh hơn bình thường, vui lòng không tua quá
                                nhiều khi học!
                            </div>
                            <div className="footer flex w-full justify-end">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full min-w-[148px]' onClick={handleSeek}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModalFastForwarding;