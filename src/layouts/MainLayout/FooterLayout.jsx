import React from 'react';
import logo from 'assets/logo/logo-header.png'

const FooterLayout = (props) => {
    return (
        <div className="bg-bgFooter py-elementPadding mt-[5.62rem]">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1.88rem]">
                    <div className="info">
                        <div className="logo">
                            <a href="https://flowbite.com" className="flex items-center h-20 mr-3">
                                <img src={logo} className="h-full" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className="detail-brand mt-[2rem]">
                            <p className="text-base font-light text-gray-400 text-textSubFooter">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet asperiores atque dolores ea
                            </p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold text-textTitleFooter">Hỗ trợ</h2>
                        </div>
                        <div className="menu-footer mt-[2rem]">
                            <ul>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem]">Liên Hệ</li>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem]">sdsdsds</li>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem]">FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold text-textTitleFooter">Danh Mục</h2>
                        </div>
                        <div className="menu-footer mt-[2rem]">
                            <ul>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem] capitalize">IT</li>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem] capitalize">Làm đẹp</li>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem] capitalize">Làn da</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold  text-textTitleFooter">Liên hệ</h2>
                        </div>
                        <div className="menu-footer mt-[2rem]">
                            <ul className="leading-[1.6875rem]">
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    Địa chỉ: <span className="block">199 Lý chính thắng, phường Võ Thị Sáu quận 3</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    Số điện thoại: <span className="block">+(84) 0123456789</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    Mail: <span className="block">support@gmail.com</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    <div className="grid gap-[0.75rem] grid-cols-7">
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">insert_chart</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[2rem] mt-[5.62rem] border-t-2 border-borderButtonColor">
                    <p className="text-center  text-textSubFooter">Copyright © 2024 Nguyễn Huy Dũng</p>
                </div>
            </div>
        </div>
    )
};

export default FooterLayout;