import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";

const Auth = (props) => {
    return(
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className='flex gap-[1.88rem] items-center'>
                        <div className='flex-1'>
                            <div className='p-[1.88rem] border rounded-xl w-1/2'>
                                <h1 className='text-2xl text-black font-semibold mb-[1.88rem]'>Quên Mật khẩu</h1>
                                <div className='flex gap-[1.25rem] flex-col'>
                                    <input type="text"
                                           id="email-login"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                                           placeholder="Email or username*"
                                    />
                                    <button
                                        className='w-full bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full text-base font-medium text-white'
                                    > Quên mật khẩu </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Auth;