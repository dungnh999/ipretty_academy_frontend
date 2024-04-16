import React from 'react';
import logo from 'assets/logo/logo-header.png'

const FooterLayout = (props) => {
    return (
        <div className="bg-bgLigthGrey py-elementPadding mt-[5.62rem]">
            <div className="container max-w-screen-xl mx-auto">
                <div className="grid grid-cols-4 gap-[1.88rem]">
                    <div className="info">
                        <div className="logo">
                            <a href="https://flowbite.com" className="flex items-center h-20 mr-3">
                                <img src={logo} className="h-full"
                                     alt="Flowbite Logo"/>
                            </a>
                        </div>
                        <div className="detail-brand mt-[2rem]">
                            <p className="text-base text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet asperiores atque dolores ea
                            </p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold">Hỗ trợ</h2>
                        </div>
                        <div className="menu-footer  mt-[2rem]">
                            <ul>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem]">Liên Hệ</li>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem]">sdsdsds</li>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem]">FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold">Danh Mục</h2>
                        </div>
                        <div className="menu-footer  mt-[2rem]">
                            <ul>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem] capitalize">IT</li>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem] capitalize">Làm đẹp</li>
                                <li className="text-base font-medium text-subColor leading-[2.8125rem] capitalize">Làn da</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold">Liên hệ</h2>
                        </div>
                        <div className="menu-footer  mt-[2rem]">
                            <ul className="leading-[1.6875rem]">
                                <li className="text-base font-medium text-subColor mb-[1rem]">
                                    Địa chỉ : <span> 199 Lý chính tháng, phường Võ Thị Sáu quận 3 </span>
                                </li>
                                <li className="text-base font-medium text-subColor  mb-[1rem]">
                                    Số điện thoại :  +(84) 0123456789
                                </li>
                                <li className="text-base font-medium text-subColor  mb-[1rem]">
                                    Mail : support@gmail.com
                                </li>
                                <li className="text-base font-medium text-subColor  mb-[1rem]">
                                    <div className="grid gap-[0.75rem] grid-cols-7">
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                        <a href="#" className="hover:text-primaryColor">
                                            <span className="material-symbols-outlined">
                                                insert_chart
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[2rem] mt-[5.62rem] border-t-2 border-borderButtonColor">
                    <p>sdsdsdsdsdsdsdsdsdsdsdsdsdsd</p>
                </div>
            </div>
        </div>
    )
};

export default FooterLayout;