import React, {useState, useContext , useEffect} from 'react';
import AuthService from "academy/service/AuthService"
import { AuthContext } from 'academy/context/Authcontext';
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [name, setName] = useState("");
    const { state, dispatch } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);


    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleRePassword = () => {
        setShowRePassword(!showRePassword);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy để kiểm tra email
        return re.test(String(email).toLowerCase());
    };

    const handleSingup = async () => {
        if(!validateEmail(email)){
            toast.warn('Email không hợp lệ !!!')
            return;
        }
        if(password != rePassword){
            toast.warn('Xác nhận mật khẩu không chính xác')
            return;
        }
        AuthService.signup(responeseLogin, errorLogin ,email, password ,phone , name)
    }

    console.log(showPassword);

    function responeseLogin(res) {
        if(res.data.status == 200){
            resetForm();
            toast.success('Đăng ký công');
        }else {
            toast.warn(res.data.message);
        }
    }

    function errorLogin(){
        if(!email || !password){
            toast.warn('Bạn chưa nhập tài khoản hoặc mật khẩu !!!')
            return;
        }
    }

    function resetForm(){
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setRePassword('');
    }


    return (
        <div className='p-[1.88rem] border rounded-xl'>
            <h1 className='text-2xl text-black font-semibold mb-[1.88rem]'>Đăng ký</h1>
            <div className='flex gap-[1.25rem] flex-col'>
                <input 
                    type="text" 
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                    placeholder="Email*"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input type="text" id="name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                       placeholder="Họ Và Tên*"
                       value={name}
                       onChange={(event) => setName(event.target.value)}
                />
                <input type="text" id="phone"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                       placeholder="Số điện thoại*"
                       value={phone}
                       onChange={(event) => setPhone(event.target.value)}
                />
                <div className="relative w-full">
                    <input type={ showPassword ? 'text' : 'password' } id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[1rem] py-[0.62rem]"
                           placeholder="Mật khẩu*"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           />
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3"  onClick={() => togglePassword()}>
                        { showPassword ? <HiEyeOff size={24}/> : <HiEye  size={24}/> }
                    </button>
                </div>
                <div className="relative w-full">
                    <input type={ showRePassword ? 'text' : 'password' } id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[1rem] py-[0.62rem]"
                           placeholder="Nhập lại mật khẩu*"
                           value={rePassword}
                           onChange={(event) => setRePassword(event.target.value)}/>
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" onClick={toggleRePassword}>
                        { showRePassword ? <HiEyeOff size={24}/> : <HiEye  size={24}/> }
                    </button>
                </div>
                <button 
                    className='w-full bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full text-base font-medium text-white' 
                    onClick={() => handleSingup()}
                    >Đăng ký
                    </button>
            </div>
        </div>
    )
};

export default Signup;