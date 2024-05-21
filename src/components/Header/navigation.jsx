import React from 'react';
import {useTranslation} from "react-i18next";

const Navigation = (props) => {
    const { t } = useTranslation();
    return (
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
             id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium justify-center lg:flex-row lg:mt-0">
                <li className="px-5 gap-1">
                    <a href="/" className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.home") }
                    </a>
                </li>
                <li className="px-5 gap-1">
                    <a href="/course"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.course") }
                    </a>
                </li>
                <li className="px-5">
                    <a href="/blog"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.blog") }
                    </a>
                </li>
                <li className="px-5">
                    <a href="#"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.category") }
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Navigation;