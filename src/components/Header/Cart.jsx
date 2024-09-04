import React, {useContext, useState} from 'react';
import cart from 'academy/assets/icons/cart'
import {useTranslation} from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import {Dropdown, Flowbite} from "flowbite-react";
import {formartCurrencyVNĐ} from "academy/helpers/utils";
import {useNavigate} from "react-router-dom";
import Empty from "academy/assets/icons/empty"

const customTheme = {
    Dropdown: {
        floating: {
            header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
        },
    },
};

const Cart = (props) => {

    const {t} = useTranslation()
    const items = useSelector((state) => state.cart.itemCarts);
    const totalCount = useSelector((state) => state.cart.totalCount);
    const navigate = useNavigate();

    function getAllCart() {
        navigate('/cart');
    }

    return(
        <div className='group-cart'>
            <Flowbite theme={{ theme: customTheme }}>
                <Dropdown
                    label={
                        <button type="button"
                                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none">
                            <img src={cart} alt='lỗi' className='w-full'/>
                            <span className="sr-only">Giỏ hàng</span>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[12px] text-white bg-red-500 border-2 border-white rounded-full -top-[0.05rem] -end-[0.2rem]">
                                {totalCount}
                            </div>
                        </button>
                    }
                    inline
                    arrowIcon=''
                >
                    <Dropdown.Header className="block px-4 py-2 font-medium text-center text-xl text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        Giỏ hàng
                    </Dropdown.Header>
                    {
                        (items.length > 0
                            ? items.map((item) => (
                                <>
                                    <Dropdown.Item className='item-cart'>
                                        <a href="#" className="w-full p-[0.8rem] flex hover:bg-gray-100 dark:hover:bg-gray-700 justify-center items-center">
                                            <div className="flex-shrink-0 w-[64px] h-[64px]">
                                                <img className="w-auto h-full object-cover"
                                                     width="100"
                                                     height="100"
                                                     src={item['course_feature_image']} alt="Jese image" />
                                            </div>
                                            <div className="w-full ps-3 w-full flex justify-start flex-col items-start">
                                                <h1 className='text-sm font-semibold capitalize truncate w-64 text-left'>{item['name']}</h1>
                                                <span className='text-sm text-borderButtonColor font-normal truncate w-64'>{item['description']}</span>
                                                <p className='text-sm'>{ formartCurrencyVNĐ(item['course_sale_price']) }</p>
                                            </div>
                                        </a>
                                    </Dropdown.Item>
                                </>

                            ))
                            :   <>
                                    <Dropdown.Item as='button' href='javascript:void(0)' className='item-cart w-[300px] flex justify-center'>
                                        <img src={Empty} className='w-[150px]' />
                                    </Dropdown.Item>
                                </>
                        )
                    }
                    <Dropdown.Divider />
                    <div className='py-[0.5rem] px-[1rem] flex justify-between items-center'>
                        <span className='font-normal text-base'>Tổng tiền: </span>
                        <h1 className='text-right font-semibold text-xl leading-none'>0</h1>
                    </div>
                    <a onClick={getAllCart}
                       className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                        <div className="inline-flex items-center ">
                            { t("component.view_all")}
                        </div>
                    </a>
                </Dropdown>
            </Flowbite>
        </div>
    )
};

export default Cart;