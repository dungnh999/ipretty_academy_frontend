import React, {useContext, useEffect, useState} from 'react';
import logo from 'assets/logo/logo-header.png'
import Notification from "academy/components/Header/Notification";
import Navigation from "academy/components/Header/navigation";
import Cart from "academy/components/Header/Cart";
import {AuthContext} from "academy/context/Authcontext";
import Search from "academy/components/Home/Search";
import {Link} from 'react-router-dom';
import AuthService from "academy/service/AuthService"
import {Dropdown, MegaMenu, Navbar, Button} from "flowbite-react";
import {useTranslation} from "react-i18next";

const HeaderLayout = (props) => {
    const {t} = useTranslation();
    const {state} = useContext(AuthContext);
    const button = document.getElementById(':r7:');
    if (button) {
        // Xóa lớp w-full nếu có
        button.classList.remove('w-full');
    }

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

    const customTheme = {
        root: {
            base: "border-b border-gray-200", // Tùy chỉnh lớp CSS của bạn
            inner: {
                base: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[4.5rem] px-4 lg:px-8", // Bỏ mx-auto hoặc thêm cấu trúc tùy chỉnh
            },
        },
        dropdown: {
            base: "flex items-center justify-between !w-auto", // Ghi đè lớp w-full mặc định
        },
    };


    return (
        <>
            <header className="px-auto sticky top-0 z-30 bg-white shadow-lg">
                <MegaMenu theme={customTheme}>
                    <Navbar.Brand>
                        <Link to='/' className="flex items-center h-14"><img src={logo} className="mr-3 !h-full sm:h-9"
                                                                             alt="Flowbite React Logo"/></Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center justify-center gap-[20px]">
                        <Search/>
                        <Notification/>
                        <Cart/>
                        {!state.isAuthenticated ? (
                            <Link
                                to="/login"
                                className="text-gray-800 hover:text-primaryColor font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 transition duration-300 ease-in-out focus:outline-none text-base"
                            >
                                Đăng nhập / Đăng ký
                            </Link>
                        ) : (
                            <div className="relative">
                                <Dropdown label="" className="!top-[20px]" dismissOnClick={false} renderTrigger={() =>
                                    <button
                                        className="flex items-center gap-4 cursor-pointer"
                                        type="button"
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
                                }>
                                    <Dropdown.Item>
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>{state['user']['name']}</div>
                                            <div className="font-medium truncate">{state['user']['email']}</div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/profile" href="#"
                                              href="#"
                                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Thông tin
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className="py-1">
                                            <a
                                                href="javascript:void(0)"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick={() => logout()}
                                            >
                                                Đăng xuất
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        )}
                    </div>
                </MegaMenu>
            </header>
            <header className="px-auto sticky top-0 z-30 bg-white shadow-lg">
                <MegaMenu theme={customTheme}>
                    <Navbar.Collapse>
                        <Navbar.Link><Link to="/">Trang chủ</Link></Navbar.Link>
                        <Navbar.Link><Link to="">Về Academy</Link></Navbar.Link>
                        <Navbar.Link><Link to="/course">Khóa học</Link></Navbar.Link>
                        <Navbar.Link><Link to="">Lịch khai giảng</Link></Navbar.Link>
                        <Navbar.Link><Link to="">Dịch vụ</Link></Navbar.Link>
                        <Navbar.Link><Link to="">Thư viện hình ảnh</Link></Navbar.Link>
                        <Navbar.Link><Link to="">Tin tức</Link></Navbar.Link>
                        <Navbar.Link><Link to="/blog">Bài viết</Link></Navbar.Link>
                        <Navbar.Link><Link to="/contact">Liên hệ</Link></Navbar.Link>
                    </Navbar.Collapse>
                </MegaMenu>
            </header>
        </>
    );
}

export default HeaderLayout;


{/*<MegaMenu className='mx-auto max-w-screen-xl' fluid="on">*/
}
{/*    <Navbar.Brand href="/">*/
}
{/*        <img alt="" src={logo} className="mr-3 h-full sm:h-9" />*/
}
{/*    </Navbar.Brand>*/
}
{/*    <div className="order-2 hidden items-center md:flex">*/
}
{/*        <Search />*/
}
{/*        <Notification />*/
}
{/*        <Cart />*/
}
{/*    </div>*/
}
{/*    <Navbar.Toggle />*/
}
{/*    <Navbar.Collapse>*/
}
{/*        <Navbar.Link href="/">{ t("header.menu.home") }</Navbar.Link>*/
}
{/*        <Navbar.Link href="/course">{ t("header.menu.course") }</Navbar.Link>*/
}
{/*        <MegaMenu.Dropdown toggle={<>Danh mục</>}>*/
}
{/*            <ul className="grid grid-cols-3">*/
}
{/*                <div className="space-y-4 p-4">*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            About Us*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Library*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Resources*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Pro Version*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                </div>*/
}
{/*                <div className="space-y-4 p-4">*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Contact Us*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Support Center*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Terms*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Blog*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                </div>*/
}
{/*                <div className="space-y-4 p-4">*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Newsletter*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            Playground*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                    <li>*/
}
{/*                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">*/
}
{/*                            License*/
}
{/*                        </a>*/
}
{/*                    </li>*/
}
{/*                </div>*/
}
{/*            </ul>*/
}
{/*        </MegaMenu.Dropdown>*/
}
{/*    </Navbar.Collapse>*/
}
{/*    /!*<nav className="border-b border-gray-200">*!/*/
}
{/*    /!*    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[4.5rem] px-4 lg:px-8">*!/*/
}
{/*    /!*        <a href="/" className="flex items-center h-14">*!/*/
}
{/*    /!*            <img src={logo} className="h-full" alt="Logo" />*!/*/
}
{/*    /!*        </a>*!/*/
}

{/*    /!*        /!* Những thành phần này sẽ chỉ hiển thị trên màn hình lớn (lg) *!/*!/*/
}
{/*    /!*        <div className="hidden lg:flex items-center lg:order-2 gap-6 lg:gap-8">*!/*/
}
{/*    /!*            <Search />*!/*/
}
{/*    /!*            <Notification />*!/*/
}
{/*    /!*            <Cart />*!/*/
}

{/*    /!*            {!state.isAuthenticated ? (*!/*/
}
{/*    /!*                <a*!/*/
}
{/*    /!*                    href="/login"*!/*/
}
{/*    /!*                    className="text-gray-800 hover:text-primaryColor font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 transition duration-300 ease-in-out focus:outline-none text-base"*!/*/
}
{/*    /!*                >*!/*/
}
{/*    /!*                    Đăng nhập / Đăng ký*!/*/
}
{/*    /!*                </a>*!/*/
}
{/*    /!*            ) : (*!/*/
}
{/*    /!*                <div className="relative">*!/*/
}
{/*    /!*                    <Dropdown label="" className="!top-[12px]" dismissOnClick={false} renderTrigger={() =>*!/*/
}
{/*    /!*                        <button*!/*/
}
{/*    /!*                            className="flex items-center gap-4 cursor-pointer"*!/*/
}
{/*    /!*                            type="button"*!/*/
}
{/*    /!*                        >*!/*/
}
{/*    /!*                            <img*!/*/
}
{/*    /!*                                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"*!/*/
}
{/*    /!*                                src={state['user']['avatar']}*!/*/
}
{/*    /!*                                alt=""*!/*/
}
{/*    /!*                            />*!/*/
}
{/*    /!*                            <div className="font-medium">*!/*/
}
{/*    /!*                                <div>{state['user']['name']}</div>*!/*/
}
{/*    /!*                            </div>*!/*/
}
{/*    /!*                        </button>*!/*/
}
{/*    /!*                    }>*!/*/
}
{/*    /!*                        <Dropdown.Item>*!/*/
}
{/*    /!*                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">*!/*/
}
{/*    /!*                                <div>{state['user']['name']}</div>*!/*/
}
{/*    /!*                                <div className="font-medium truncate">{state['user']['email']}</div>*!/*/
}
{/*    /!*                            </div>*!/*/
}
{/*    /!*                        </Dropdown.Item>*!/*/
}
{/*    /!*                        <Dropdown.Divider />*!/*/
}
{/*    /!*                        <Dropdown.Item>*!/*/
}
{/*    /!*                            <Link to="/profile" href="#"*!/*/
}
{/*    /!*                                  href="#"*!/*/
}
{/*    /!*                                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*!/*/
}
{/*    /!*                            >*!/*/
}
{/*    /!*                                Thông tin*!/*/
}
{/*    /!*                            </Link>*!/*/
}
{/*    /!*                        </Dropdown.Item>*!/*/
}
{/*    /!*                        <Dropdown.Divider />*!/*/
}
{/*    /!*                        <Dropdown.Item>*!/*/
}
{/*    /!*                            <div className="py-1">*!/*/
}
{/*    /!*                                <a*!/*/
}
{/*    /!*                                    href="javascript:void(0)"*!/*/
}
{/*    /!*                                    className="block text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"*!/*/
}
{/*    /!*                                    onClick={() => logout()}*!/*/
}
{/*    /!*                                >*!/*/
}
{/*    /!*                                    Đăng xuất*!/*/
}
{/*    /!*                                </a>*!/*/
}
{/*    /!*                            </div>*!/*/
}
{/*    /!*                        </Dropdown.Item>*!/*/
}
{/*    /!*                    </Dropdown>*!/*/
}
{/*    /!*                </div>*!/*/
}
{/*    /!*            )}*!/*/
}
{/*    /!*        </div>*!/*/
}

{/*    /!*        /!* Navigation chỉ hiển thị trên desktop *!/*!/*/
}
{/*    /!*        <div className="hidden lg:block">*!/*/
}
{/*    /!*            <Navigation />*!/*/
}
{/*    /!*        </div>*!/*/
}
{/*    /!*    </div>*!/*/
}

{/*    /!*    /!* Menu di động *!/*!/*/
}
{/*    /!*    <div className="lg:hidden">*!/*/
}
{/*    /!*        <Navigation />*!/*/
}
{/*    /!*    </div>*!/*/
}
{/*    /!*</nav>*!/*/
}
{/*</MegaMenu>*/
}