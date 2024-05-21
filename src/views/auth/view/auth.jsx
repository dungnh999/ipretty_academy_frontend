import React from 'react';
import Login from "academy/views/auth/components/Login";
import BreadCrumb from "academy/components/UI/BreadCrumb";
import Signup from "academy/views/auth/components/Signup";

const Auth = (props) => {
    return(
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">
                    <div className='flex gap-[1.88rem]'>
                        <div className='flex-1'><Login/></div>
                        <div className='flex-1'><Signup/></div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Auth;