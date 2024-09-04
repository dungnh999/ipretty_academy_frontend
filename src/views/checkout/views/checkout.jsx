import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import LogoVnpay from "academy/assets/logo/vnpay"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {formartCurrencyVNĐ} from "academy/helpers/utils";
import PaymentService from "academy/service/PaymentService";
import OrderService from "academy/service/OrderService";

const Checkout = (props) => {

    const items = useSelector((state) => state.cart.itemCarts);
    const totalCount = useSelector((state) => state.cart.totalCount);
    const navigate = useNavigate();
    const totalAmount = items.reduce((sum, item) => {
        return sum + item.course_sale_price;
    }, 0);

    const paymentCourse = () => {
        OrderService.createOrderCourse(responesCb,errorsCb, {
            data : items
        })
    };

    const responesCb = (res) => {
        console.log(res);
        let data = new FormData();
        data.append('amount', totalAmount)
        data.append('order_id', res.data.data.order_id)
        PaymentService.getPaymentCourse(responesVnpay, errorsCb, data)
    }

    const responesVnpay = (res) => {
        window.location.href = res.data.vnp_Url
    }

    const errorsCb = (e) => (
        console.log(e)
    )

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
                                {/*<li>*/}
                                {/*    <input type="radio" id="Momo-small" name="payment" value="Momo-small" className="hidden peer" required checked/>*/}
                                {/*    <label htmlFor="Momo-small"*/}
                                {/*           className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-primaryColor peer-checked:border-2 peer-checked:text-primaryColor hover:text-gray-600 hover:bg-gray-100 h-full ">*/}
                                {/*        <div className="block">*/}
                                {/*            <div className="w-full text-lg font-semibold h-[72px]">*/}
                                {/*                <img src={LogoMomo} alt='Lỗi' className='h-full w-full'/>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </label>*/}
                                {/*</li>*/}
                                <li>
                                    <input type="radio" id="vnpay-big" name="payment" value="vnpay-big"
                                           className="hidden peer"/>
                                    <label htmlFor="vnpay-big"
                                           className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-primaryColor peer-checked:border-2 peer-checked:text-primaryColor hover:text-gray-600 hover:bg-gray-100 h-full ">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold h-[72px]">
                                                <img src={LogoVnpay} alt='Lỗi' className='h-full w-full'/>
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
                                {items.length > 0 ?
                                    items.map(( itemCourse) => (
                                        <div className='item-course'>
                                            <a href='/detail'>
                                                <div
                                                    className="item-course flex rounded-lg overflow-hidden border-bgLigthGrey border w-full  shadow-lg cursor-pointer hover:-translate-y-5 hover:shadow-gray-300">
                                                    <div className="w-[10.625rem] overflow-hidden relative">
                                                        <img className="object-cover object-top w-full h-full"
                                                             src={itemCourse['course_feature_image']}
                                                             alt='Mountain'/>
                                                    </div>
                                                    <div className="p-[1.25rem] flex justify-between w-full items-center">
                                                        <div>
                                                            <h1 className="text-base font-semibold capitalize mt-[0.75rem]">{itemCourse['name']}</h1>
                                                            <p className="font-normal text-sm text-subColor">by
                                                                Determined-Poitras
                                                            </p>
                                                        </div>
                                                        <div className='price-course'>
                                                            {items['itemCourse']}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                :
                                ''}
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
                                <h4 className='text-subColor font-normal'>Giảm giá: </h4>
                                <span className='text-base font-normal'>{formartCurrencyVNĐ(0)}</span>
                            </div>
                            <div className='flex justify-between'>
                                <h4 className='text-subColor font-normal'>VAT (10%) : </h4>
                                <span className='text-base font-normal'>{formartCurrencyVNĐ(0)}</span>
                            </div>
                            <div className='border-b'></div>
                            <div className='flex justify-between'>
                                <h4 className='text-black font-normal text-base'>Tổng cộng : </h4>
                                <span className='text-xl text-primaryColor font-semibold'>{formartCurrencyVNĐ(totalAmount)}</span>
                            </div>
                            <div className='action-checkout'>
                                <button className='capitalize bg-primaryColor text-base font-semibold text-white p-[1rem] w-full rounded-2xl' onClick={paymentCourse}>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checkout;

// http://localhost:8000/api/vnpay/callback?vnp_Amount=1299900&vnp_BankCode=NCB&vnp_BankTranNo=VNP14568190&vnp_CardType=ATM&vnp_OrderInfo=Thanh+toan+GD%3A10&vnp_PayDate=20240827001531&vnp_ResponseCode=00&vnp_TmnCode=1HE05QET&vnp_TransactionNo=14568190&vnp_TransactionStatus=00&vnp_TxnRef=10&vnp_SecureHash=37c49b9da18644bb234893b8d2eaf25625ece6eb7d8136fe5f7e0aaa9036bb868b26a5c2c47bab6a4317febbb0e38b5189d53e493f245b3a81f4d76746b83bc4