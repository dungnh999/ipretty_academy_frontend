import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import LogoMomo from "academy/assets/logo/momo"
const Checkout = (props) => {
    return (
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <h1 className='text-2xl font-semibold my-[3.75rem]'>THANH TOÁN</h1>
                <div className='grid grid-cols-3 gap-[1.88rem]'>
                    <div className='col-span-2 flex flex-col gap-[1.5rem]'>
                        <div className='item-payment'>
                            <h1 className='text-xl font-semibold '>Phương thức thanh toán</h1>
                            <ul className="grid w-full gap-6 grid-cols-4">
                                <li>
                                    <input type="radio" id="Momo-small" name="payment" value="Momo-small" className="hidden peer" required checked/>
                                    <label htmlFor="Momo-small"
                                           className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-primaryColor peer-checked:border-2 peer-checked:text-primaryColor hover:text-gray-600 hover:bg-gray-100 h-full ">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold h-[72px]">
                                                <img src={LogoMomo} alt='Lỗi' className='h-full w-full'/>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="vnpay-big" name="payment" value="vnpay-big"
                                           className="hidden peer"/>
                                        <label htmlFor="vnpay-big"
                                               className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-primaryColor peer-checked:border-2 peer-checked:text-primaryColor hover:text-gray-600 hover:bg-gray-100 h-full ">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold h-[72px]">
                                                    <img src={LogoMomo} alt='Lỗi' className='h-full w-full'/>
                                                </div>
                                            </div>
                                        </label>
                                </li>
                            </ul>
                        </div>
                        <div className='item-list'>
                            <h1 className='text-xl font-semibold '>Danh sách khoá học</h1>
                            <p>Bạn có 4 khoá học trong giỏ hàng</p>
                            <div className='list-course flex gap-[1.88rem] flex-col mt-[1.5rem]'>
                                <div className='item-course'>
                                    <a href='/detail'>
                                        <div
                                            className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                            <div className="w-[10.625rem] overflow-hidden relative">
                                                <img className="object-cover object-top w-full h-full"
                                                     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                                     alt='Mountain'/>
                                            </div>
                                            <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                <div>
                                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">Create
                                                        an LMS Website with LearnPress</h1>
                                                    <p className="font-normal text-sm text-subColor">by
                                                        Determined-Poitras</p>
                                                </div>
                                                <div className='price-course'>
                                                    2.000.000đ
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='item-course'>
                                    <a href='/detail'>
                                        <div
                                            className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                            <div className="w-[10.625rem] overflow-hidden relative">
                                                <img className="object-cover object-top w-full h-full"
                                                     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                                     alt='Mountain'/>
                                            </div>
                                            <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                <div>
                                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">Create
                                                        an LMS Website with LearnPress</h1>
                                                    <p className="font-normal text-sm text-subColor">by
                                                        Determined-Poitras</p>
                                                </div>
                                                <div className='price-course'>
                                                    2.000.000đ
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='item-course'>
                                    <a href='/detail'>
                                        <div
                                            className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                            <div className="w-[10.625rem] overflow-hidden relative">
                                                <img className="object-cover object-top w-full h-full"
                                                     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                                     alt='Mountain'/>
                                            </div>
                                            <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                <div>
                                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">Create
                                                        an LMS Website with LearnPress</h1>
                                                    <p className="font-normal text-sm text-subColor">by
                                                        Determined-Poitras</p>
                                                </div>
                                                <div className='price-course'>
                                                    2.000.000đ
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='item-course'>
                                    <a href='/detail'>
                                        <div
                                            className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                            <div className="w-[10.625rem] overflow-hidden relative">
                                                <img className="object-cover object-top w-full h-full"
                                                     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                                     alt='Mountain'/>
                                            </div>
                                            <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                <div>
                                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">Create
                                                        an LMS Website with LearnPress</h1>
                                                    <p className="font-normal text-sm text-subColor">by
                                                        Determined-Poitras</p>
                                                </div>
                                                <div className='price-course'>
                                                    2.000.000đ
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='item-course'>
                                    <a href='/detail'>
                                        <div
                                            className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                            <div className="w-[10.625rem] overflow-hidden relative">
                                                <img className="object-cover object-top w-full h-full"
                                                     src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                                     alt='Mountain'/>
                                            </div>
                                            <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                <div>
                                                    <h1 className="text-base font-semibold capitalize mt-[0.75rem]">Create
                                                        an LMS Website with LearnPress</h1>
                                                    <p className="font-normal text-sm text-subColor">by
                                                        Determined-Poitras</p>
                                                </div>
                                                <div className='price-course'>
                                                    2.000.000đ
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='sticky top-[20px] bg-bgGray p-[20px] rounded-2xl flex flex-col gap-[1rem]'>
                            <h1 className='text-xl font-semibold'>Thông tin đơn hàng</h1>
                            <div className='flex justify-between'>
                                <h4 className='text-subColor font-normal'>Tạm tính (1 sản phẩm) : </h4>
                                <span className='text-base font-normal'>2.000.000đ</span>
                            </div>
                            <div className='flex justify-between'>
                                <h4 className='text-subColor font-normal'>VAT (10%) : </h4>
                                <span className='text-base font-normal'>2.000.000đ</span>
                            </div>
                            <div className='border-b'></div>
                            <div className='flex justify-between'>
                                <h4 className='text-black font-normal text-base'>Tổng cộng : </h4>
                                <span className='text-xl text-primaryColor font-semibold'>2.000.000đ</span>
                            </div>
                            <div className='action-checkout'>
                                <button className='capitalize bg-primaryColor text-base font-semibold text-white p-[1rem] w-full rounded-2xl'>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checkout;