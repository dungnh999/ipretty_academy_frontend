import React from 'react';
import {useTranslation} from "react-i18next";
import {Link } from 'react-router-dom';

const Navigation = (props) => {
    const { t } = useTranslation();
    return (
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
             id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium justify-center lg:flex-row lg:mt-0">
                <li className="px-5 gap-1">
                    <Link to="/" className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.home") }
                    </Link>
                </li>
                <li className="px-5 gap-1">
                    <Link to="/course"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.course") }
                    </Link>
                </li>
                {/* <li className="px-5">
                    <Link to="/blog"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.blog") }
                    </Link>
                </li> */}
                <li className="px-5">
                    <Link to="#"
                       className="block py-2 pr-4 pl-3 text-sm text-black border-b hover:text-primaryColor border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent">
                        { t("header.menu.category") }
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navigation;