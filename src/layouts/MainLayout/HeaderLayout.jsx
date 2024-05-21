import React, {useState} from 'react';
import logo from 'assets/logo/logo-header.png'
import Notification from "academy/components/Header/Notification";
import Navigation from "academy/components/Header/navigation";
import Cart from "academy/components/Header/Cart";

const HeaderLayout = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[4.5rem]">
                    <div className="flex items-center lg:order-2 gap-[1.5rem]">
                        <Notification/>
                        <Cart/>
                        <a href="/login" className="text-gray-800 hover:text-primaryColor font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none text-base">Đăng nhập/ Đăng ký</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <a href="/" className="flex items-center h-14 mr-3">
                        <img src={logo} className="h-full"
                             alt="Flowbite Logo"/>
                    </a>
                    <Navigation/>
                </div>
            </nav>
        </header>
    );
}

export default HeaderLayout;