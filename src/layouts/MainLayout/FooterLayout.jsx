import React from 'react';
import logo from 'assets/logo/logo-header.png'
import {Link} from "react-router-dom";
import { SiLinkedin , SiFacebook , SiYoutube, SiInstagram} from "react-icons/si";

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
                                Ipretty Group được thành lập từ năm 2010, là đơn vị phân phối độc quyền tại Việt Nam các thiết bị làm đẹp, thiết bị y tế và thương hiệu dược mỹ phẩm danh tiếng trên Thế Giới.
                            </p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <h2 className="uppercase text-2xl font-semibold text-textTitleFooter">Hỗ trợ</h2>
                        </div>
                        <div className="menu-footer mt-[2rem]">
                            <ul>
                                <li className="text-base font-light text-textSubFooter leading-[2.8125rem]">
                                    <Link to='/contact'>Liên hệ </Link>
                                </li>
                                {/*<li className="text-base font-light text-textSubFooter leading-[2.8125rem]">FAQ</li>*/}
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
                                    <label className="font-bold"> Địa chỉ: </label>
                                    <span className="block">199 Lý chính thắng, phường Võ Thị Sáu quận 3</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    <label className="font-bold">Số điện thoại:</label>
                                    <span className="block">+(84) 0123456789</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    <label className="font-bold">Mail:</label>
                                    <span className="block">support@gmail.com</span>
                                </li>
                                <li className="text-base font-light text-textSubFooter mb-[1rem]">
                                    <div className="grid gap-[0.75rem] grid-cols-7">
                                        <a href="https://www.facebook.com/ipretty.vietnam" className="hover:text-primaryColor">
                                            {/*<span className="material-symbols-outlined">insert_chart</span>*/}
                                            <SiFacebook size={30} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/ipretty-cuoc-song-tuoi-dep/" className="hover:text-primaryColor">
                                            {/*<span className="material-symbols-outlined">insert_chart</span>*/}
                                            <SiLinkedin size={30} />
                                        </a>
                                        <a href="https://www.youtube.com/@ipretty-vn" className="hover:text-primaryColor">
                                            {/*<span className="material-symbols-outlined">insert_chart</span>*/}
                                            <SiYoutube size={30} />
                                        </a>
                                        <a href="https://www.instagram.com/ipretty.vn/" className="hover:text-primaryColor">
                                            {/*<span className="material-symbols-outlined">insert_chart</span>*/}
                                            <SiInstagram size={30} />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[2rem] mt-[5.62rem] border-t-2 border-borderButtonColor">
                    <p className="text-center  text-textSubFooter">Copyright © 2024 Ipretty</p>
                </div>
            </div>
        </div>
    )
};

export default FooterLayout;