import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AuthService from "academy/service/AuthService";
import {toast} from "react-toastify";
import {getTokens} from "academy/helpers/utils";

const Verify = (props) => {
    const {id, token} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        AuthService.SignupActive(responese, error ,id, token)
    },[])

    function responese(res) {
        if(res.data.status == 200){
            toast.success('Xác nhận thành công');
            navigate('/login')
        }else {
            toast.warn(res.data.message);
        }
    }

    function error(){
        if(!email || !password){
            toast.warn('Bạn chưa nhập tài khoản hoặc mật khẩu !!!')
            return;
        }
    }

    return (
        <div>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className='flex justify-center flex-col items-center gap-[1.88rem]'>
                        <h2 className='text-4xl font-bold'>Xác nhận email thành công</h2>
                        <h6>
                            {/*Vui lòng kiểm tra email xác nhận trong hộp thư đến của bạn. Nhấp vào liên kết trong email để*/}
                            {/*xác nhận địa chỉ email của bạn.*/}
                        </h6>
                        <button className="bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full text-base font-medium text-white">Quay lại đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify;