import React from 'react';
import cart from 'academy/assets/icons/cart'
import {useTranslation} from "react-i18next";
import {DrawerItems} from "flowbite-react";
const Cart = (props) => {
    const {t} = useTranslation()
    return(
        <div className='group-cart'>
            <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownCart"
                    className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                    type="button">
                <img src={cart} alt='lỗi' className='w-full'/>
            </button>
            <div id="dropdownCart"
                 className="z-20 hidden max-w-[28.8rem] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
                 aria-labelledby="dropdownCartButton">
                <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Giỏ hàng
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-[25rem] overflow-y-auto">
                    <div className='item-cart'>
                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                <img className="w-auto h-full"
                                     width="100"
                                     height="100"
                                     src="https://img-c.udemycdn.com/course/240x135/5289502_c54a_2.jpg" alt="Jese image" />
                            </div>
                            <div className="w-full ps-3 w-full">
                                <h1 className='text-sm font-semibold capitalize truncate w-64'>Create an LMS Website with LearnPress</h1>
                                <span className='text-sm text-borderButtonColor font-normal'>sạdksakdkạdjska</span>
                                <p className='text-sm'>2.000.000đ</p>
                            </div>
                        </a>
                    </div>
                    <div className='item-cart'>
                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                <img className="w-auto h-full"
                                     width="100"
                                     height="100"
                                     src="https://img-c.udemycdn.com/course/240x135/5289502_c54a_2.jpg" alt="Jese image" />
                            </div>
                            <div className="w-full ps-3 w-full">
                                <h1 className='text-sm font-semibold capitalize truncate w-64'>Create an LMS Website with LearnPress</h1>
                                <span className='text-sm text-borderButtonColor font-normal'>sạdksakdkạdjska</span>
                                <p className='text-sm'>2.000.000đ</p>
                            </div>
                        </a>
                    </div>
                    <div className='item-cart'>
                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                <img className="w-auto h-full"
                                     width="100"
                                     height="100"
                                     src="https://img-c.udemycdn.com/course/240x135/5289502_c54a_2.jpg" alt="Jese image" />
                            </div>
                            <div className="w-full ps-3 w-full">
                                <h1 className='text-sm font-semibold capitalize truncate w-64'>Create an LMS Website with LearnPress</h1>
                                <span className='text-sm text-borderButtonColor font-normal'>sạdksakdkạdjska</span>
                                <p className='text-sm'>2.000.000đ</p>
                            </div>
                        </a>
                    </div>
                    <div className='item-cart'>
                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                <img className="w-auto h-full"
                                     width="100"
                                     height="100"
                                     src="https://img-c.udemycdn.com/course/240x135/5289502_c54a_2.jpg" alt="Jese image" />
                            </div>
                            <div className="w-full ps-3 w-full">
                                <h1 className='text-sm font-semibold capitalize truncate w-64'>Create an LMS Website with LearnPress</h1>
                                <span className='text-sm text-borderButtonColor font-normal'>sạdksakdkạdjska</span>
                                <p className='text-sm'>2.000.000đ</p>
                            </div>
                        </a>
                    </div>
                    <div className='item-cart'>
                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                <img className="w-auto h-full"
                                     width="100"
                                     height="100"
                                     src="https://img-c.udemycdn.com/course/240x135/5289502_c54a_2.jpg" alt="Jese image" />
                            </div>
                            <div className="w-full ps-3 w-full">
                                <h1 className='text-sm font-semibold capitalize truncate w-64'>Create an LMS Website with LearnPress</h1>
                                <span className='text-sm text-borderButtonColor font-normal'>sạdksakdkạdjska</span>
                                <p className='text-sm'>2.000.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='py-[0.5rem] px-[1rem] flex justify-between items-center'>
                    <span className='font-normal text-base'>Tổng tiền: </span>
                    <h1 className='text-right font-semibold text-xl leading-none'>2.200.000đ</h1>
                </div>
                <a href="#"
                   className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div className="inline-flex items-center ">
                        { t("component.view_all")}
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Cart;