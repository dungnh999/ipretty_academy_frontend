import React from 'react';

const Counter = (props) => {
    return (
        <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">17+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">Thương hiệu</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">14+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">NĂM HOẠT ĐỘNG</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">15.000+</p>
                    <p className="name-counter text-base font-normal text-thirdColor">ĐẠI LÝ KHẮP CẢ NƯỚC</p>
                </div>
                <div className="flex justify-center flex-col items-center py-8 bg-bgGray rounded-lg">
                    <p className="number-counter pb-2 text-2xl text-primaryColor font-semibold">32</p>
                    <p className="name-counter text-base font-normal text-thirdColor">BỆNH VIỆN HÀNG ĐẦU</p>
                </div>
            </div>
        </div>
    )
};

export default Counter;