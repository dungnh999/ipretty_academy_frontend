import React, {useContext, useEffect, useState} from 'react';
import logo from 'assets/logo/logo-header.png'
import Notification from "academy/components/Header/Notification";
import Navigation from "academy/components/Header/navigation";
import Cart from "academy/components/Header/Cart";
import {AuthContext} from "academy/context/Authcontext";
import Search from "academy/components/Home/Search";
import { toast } from "react-toastify";
import AuthService from "academy/service/AuthService"
const HeaderLayout = (props) => {
    const {state} = useContext(AuthContext);
    function logout() {
        AuthService.logout(handleResponses, handlError)
    }

    function handleResponses(res) {
        localStorage.removeItem('authToken'); // Hoặc sử dụng phương thức khác để xóa token
        localStorage.removeItem('user'); // Hoặc sử dụng phương thức khác để xóa token
        window.location.href = '/login'; // Hoặc window.location.reload();

    }

    function handlError(res) {
        // setDataCourse(res.data.data);
    }

    return (
        <header className='sticky top-0 z-30 bg-white shadow-lg'>
            <nav className="border-b border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[4.5rem] px-4 lg:px-8">
                    <a href="/" className="flex items-center h-14">
                        <img src={logo} className="h-full" alt="Logo" />
                    </a>

                    {/* Những thành phần này sẽ chỉ hiển thị trên màn hình lớn (lg) */}
                    <div className="hidden lg:flex items-center lg:order-2 gap-6 lg:gap-8">
                        <Search />
                        <Notification />
                        <Cart />

                        {!state.isAuthenticated ? (
                            <a
                                href="/login"
                                className="text-gray-800 hover:text-primaryColor font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 transition duration-300 ease-in-out focus:outline-none text-base"
                            >
                                Đăng nhập / Đăng ký
                            </a>
                        ) : (
                            <div className="relative">
                                <button
                                    className="flex items-center gap-4 cursor-pointer"
                                    type="button"
                                    data-dropdown-toggle="userDropdown"
                                    data-dropdown-placement="bottom-start"
                                >
                                    <img
                                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                                        src={state['user']['avatar']}
                                        alt=""
                                    />
                                    <div className="font-medium">
                                        <div>{state['user']['name']}</div>
                                    </div>
                                </button>

                                {/* Dropdown user */}
                                <div
                                    id="userDropdown"
                                    className="z-10 absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg hidden dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{state['user']['name']}</div>
                                        <div className="font-medium truncate">{state['user']['email']}</div>
                                    </div>
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="avatarButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Thông tin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Cài đặt
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a
                                            href="javascript:void(0)"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            onClick={() => logout()}
                                        >
                                            Đăng xuất
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Nút menu chỉ hiển thị trên màn hình nhỏ */}
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    {/* Navigation chỉ hiển thị trên desktop */}
                    <div className="hidden lg:block">
                        <Navigation />
                    </div>
                </div>

                {/* Menu di động */}
                <div className="lg:hidden">
                    <Navigation />
                </div>
            </nav>
        </header>

    );
}

export default HeaderLayout;