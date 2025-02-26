import React from 'react';

const Form = (props) => {
    return (
        <div className='w-full'>
            <div className="text-center mb-12">
                <h2 className="mb-3 text-2xl font-semibold">Liên hệ để được tư vấn miễn phí</h2>
                <p className="text-subColor font-medium text-base">Hãy để lại thông tin của bạn, các chuyên viên sẽ liên hệ và tư vấn cho bạn miễn phí trong 24H</p>
            </div>
            <form className="max-w-md mx-auto">
                <div className="mb-5">
                    <input type="text" id="name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Họ và tên"
                       required/>
                </div>
                <div className="mb-5 grid md:grid-cols-2 md:gap-6">
                    <div className="">
                        <input type="number" id="phone"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Số điện thoại" required/>
                    </div>
                    <div className="m">
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@flowbite.com" required/>
                    </div>
                </div>
                <div className="mb-5">
                    <select id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value='' disabled selected>Chọn ngày học</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 bg-primaryColor focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng ký ngay
                </button>
            </form>

        </div>
    )
};

export default Form;