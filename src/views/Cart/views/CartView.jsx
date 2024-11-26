import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import {useTranslation} from "react-i18next";
import {formartCurrencyVNĐ} from "academy/helpers/utils";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Empty from "academy/assets/icons/empty"
import {ADD_TO_CART} from "academy/constant/Cart/CartAction";

const CartView = (props) => {
    const {t} = useTranslation()
    const totalCount = useSelector((state) => state.cart.totalCount);
    const navigate = useNavigate();
    const items = useSelector((state) => state.cart.itemCarts);
    const totalAmount = items.reduce((sum, item) => {
        return sum + item.course_sale_price;
    }, 0);

    function checkOutCourse() {
        navigate(`/checkout`);
    }
    return(
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <h1 className='text-2xl font-semibold my-[3.75rem]'>
                    { t('cart.title') }
                </h1>
                {(items && items.length > 0)
                    ? <div className='grid grid-cols-3 gap-[1.88rem]'>
                        <div className='col-span-2 flex flex-col'>
                            <div className='item-list'>
                                <div className='list-course flex gap-[1.88rem] flex-col'>
                                    {items.map((itemCart) => (
                                        <div className='item-course'>
                                            <div className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                                <div className="w-auto h-[195px] overflow-hidden relative">
                                                    <img className="object-cover object-top w-full h-full"
                                                         src={process.env.API_URL + itemCart['course_feature_image']}
                                                         alt='Mountain'/>

                                                </div>
                                                <div className="p-[1.25rem] flex flex-col justify-between w-full gap-[1rem]">
                                                    <div>
                                                        <p className="font-normal text-sm text-subColor">
                                                            by {itemCart['teacher_name']}
                                                        </p>
                                                        <h1 className="text-base font-semibold capitalize mt-[0.75rem]">{itemCart['name']}</h1>
                                                        {/*<div className="mt-[0.5rem]">*/}
                                                        {/*    <ul className="flex gap-[1rem]">*/}
                                                        {/*        <li className="flex items-center gap-[0.5rem]"><span*/}
                                                        {/*            className="material-symbols-outlined text-sm text-primaryColor">schedule</span><span>2 Tuần</span>*/}
                                                        {/*        </li>*/}
                                                        {/*        <li className="flex items-center gap-[0.5rem]"><span*/}
                                                        {/*            className="material-symbols-outlined  text-sm  text-primaryColor">schedule</span><span>2 Tuần</span>*/}
                                                        {/*        </li>*/}
                                                        {/*        <li className="flex items-center gap-[0.5rem]"><span*/}
                                                        {/*            className="material-symbols-outlined text-sm text-primaryColor">schedule</span><span>2 Tuần</span>*/}
                                                        {/*        </li>*/}
                                                        {/*        <li className="flex items-center gap-[0.5rem]"><span*/}
                                                        {/*            className="material-symbols-outlined  text-sm text-primaryColor">schedule</span><span>2 Tuần</span>*/}
                                                        {/*        </li>*/}
                                                        {/*    </ul>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    <div className="border-t-bgLigthGrey border-t pt-[1rem] flex items-center justify-between">
                                                        <div className="flex">
                                                            <p className="price text-base text-borderButtonColor line-through">
                                                                {formartCurrencyVNĐ(itemCart['course_price'])}
                                                            </p>
                                                            <span className="text-primaryColor font-normal text-base pl-[0.5rem]">
                                                             {formartCurrencyVNĐ(itemCart['course_sale_price'])}
                                                        </span>
                                                        </div>
                                                        <div>
                                                            <button className="text-base text-black font-medium">Xoá
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='sticky top-[20px] bg-bgGray p-[20px] rounded-2xl flex flex-col gap-[1rem]'>
                                <h1 className='text-xl font-semibold'>Thông tin đơn hàng</h1>
                                <div className='flex justify-between'>
                                    <h4 className='text-subColor font-normal'>Tạm tính (1 sản phẩm) : </h4>
                                    <span className='text-base font-normal'>{formartCurrencyVNĐ(totalAmount)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <h4 className='text-subColor font-normal'>Giảm giá : </h4>
                                    <span className='text-base font-normal'>0</span>
                                </div>
                                <div className='flex justify-between'>
                                    <h4 className='text-subColor font-normal'>VAT (10%) : </h4>
                                    <span className='text-base font-normal'>0</span>
                                </div>
                                <div className='border-b'></div>
                                <div className='flex justify-between'>
                                    <h4 className='text-black font-normal text-base'>Tổng cộng : </h4>
                                    <span className='text-xl text-primaryColor font-semibold'>{formartCurrencyVNĐ(totalAmount)}</span>
                                </div>
                                <div className='action-checkout'>
                                    <button className='capitalize bg-primaryColor text-base font-semibold text-white p-[1rem] w-full rounded-2xl' onClick={checkOutCourse}>Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className='flex items-center justify-center flex-col'>
                        <img width="240" height='180' src={Empty} />
                        <button className='capitalize bg-primaryColor text-base font-semibold text-white p-[1rem] rounded-2xl' onClick={() => navigate('/')}>Tiếp tục mua sắm</button>
                      </div>
                }
            </div>
        </div>
    )
};

export default CartView;