import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {fomartTimeString, formartCurrencyVNĐ} from "academy/helpers/utils";
import TransactionService from "academy/service/TransactionService";
import OrderService from "academy/service/OrderService";

const PaymentSuccessful = (props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const amount =formartCurrencyVNĐ(parseFloat(searchParams.get('vnp_Amount')));
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        OrderService.getOrderDetail(responesOrder,errorsOrder,{
            id : searchParams.get('vnp_OrderInfo')
        })
    },[location.search])

    const responesOrder = (res) => {
        setOrderDetails(res.data.data);
    }

    const errorsOrder = (e) => (
        console.log(e)
    )

    if(searchParams.get('vnp_ResponseCode') == "00"){
        TransactionService.createOrderTransactionsCourse('responesVnpay', 'errorsCb', {
            order_id: searchParams.get('vnp_OrderInfo'),
            payment_method : 'vnpay',
        })
    }
    const responesVnpay = (res) => {
        console.log(res)
    }

    const errorsCb = (e) => (
        console.log(e)
    )

    if(orderDetails.courses){
        return (
            <div>
                <div className="pt-[3.75rem]">
                    <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                        <div
                            className="max-w-[8mx-auto p-4 text-base leading-6 font-sans text-gray-700 flex flex-col gap-6">
                            <table className="w-full h-auto text-center border-0 border-spacing-0">
                                <thead className="bg-gray-100 p-2">
                                <tr className="text-xl">
                                    <td colSpan="4" className="p-5 text-left">THANK YOU</td>
                                </tr>
                                </thead>
                                <tbody className="bg-white p-5">
                                <tr>
                                    <td colSpan="4" className="pt-5 pl-5 text-left text-lg font-bold text-black">Hello,
                                        Rita
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="text-left p-3 text-sm">Your order details</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="w-full h-auto bg-white text-center p-2 bg-gray-100">
                                <tbody>
                                <tr className="text-gray-600 text-xl">
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 text-sm font-bold py-2 bg-gray-100">
                                        Ngày Đặt
                                    </td>
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 text-sm font-bold py-2 bg-gray-100">
                                        Mã Đơn Hàng
                                    </td>
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 text-sm font-bold py-2 bg-gray-100">Phương thức thanh toán</td>
                                    <td className="w-1/4 text-sm font-bold py-2 bg-gray-100">Shipping Address</td>
                                </tr>
                                <tr className="bg-white text-sm text-gray-800">
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 font-bold bg-gray-100">{fomartTimeString(searchParams.get('vnp_PayDate'))}</td>
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 font-bold bg-gray-100">ĐH{searchParams.get('vnp_OrderInfo')}</td>
                                    <td className="border-r-[1.5px] border-dashed border-gray-300 w-1/4 font-bold bg-gray-100">{searchParams.get('vnp_CardType')}</td>
                                    <td className="w-1/4 font-bold bg-gray-100">Kosovo, Prishtina</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="w-full h-auto bg-white mt-0 pt-5 pl-5 text-sm ">
                                <thead>
                                <tr className="text-gray-600 font-bold p-1">
                                    <td className="text-left">Tên Khoá học</td>
                                    <td className="text-center">Giá tiền</td>
                                    <td className="text-center">Khuyến mãi</td>
                                    <td className="text-right px-2">Thanh toán</td>
                                </tr>
                                </thead>
                                <tbody>
                                {orderDetails.courses.map((item, index) => (
                                    <tr>
                                        <td className="w-1/10">
                                            {item['course_name']}
                                        </td>
                                        <td className="w-1/5 px-2 text-center">
                                            {formartCurrencyVNĐ(item['course_price'])}
                                        </td>
                                        <td className="w-1/5 px-2 text-center">2</td>
                                        <td className="w-3/10 font-bold text-lg text-right">
                                            {formartCurrencyVNĐ(item['course_price'])}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <table className="w-full h-auto bg-white p-5 text-sm ">
                                <tbody>
                                <tr className="p-5 text-black text-lg">
                                    <td className="font-bold py-1">Total</td>
                                    <td className="text-right py-1 font-bold text-xl">20 &euro;</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="font-bold"><span
                                        className="text-red-700 font-bold">THANK YOU</span> for shopping with us!
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="font-bold text-left pt-5 text-lg">THRED<span>+</span> team
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot className="pt-5 font-bold">
                                <tr>
                                    <td className="pt-5">Need help? Contact us <span
                                        className="text-red-700"> info@thred-plus.shop </span></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default PaymentSuccessful;