import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const breadcrumbMap = {
    "/": "Trang chủ",
    "/course": "Khóa học",
    "/course/category": "Danh mục",
    "/contact": "liên hệ",

};

const BreadCrumb = (props) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const customTheme = {
        "root": {
            "base": "",
            "list": ""
        },
        "item": {
            "base": "group flex items-center",
            "chevron": "mx-1 h-4 w-4 text-gray-100 group-first:hidden md:mx-2",
            "href": {
                "off": "!text-white-700",
                "on": "!text-white-700"
            },
            "icon": "mr-2 h-4 w-4"
        }
    };



    return(
        <div className='bg-black text-white py-[2rem] px-[0.62rem]'>
            <div className="container max-w-screen-xl mx-auto flex p-[0.625rem] items-center">
                {/*<p>*/}
                {/*    <Link to='/'>Trang chủ</Link>*/}
                {/*</p>*/}
                {/*<span className="material-symbols-outlined text-sm px-[0.5rem]">*/}
                {/*    arrow_forward_ios*/}
                {/*</span>*/}
                {/*{pathnames.map((name, index) => {*/}
                {/*    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;*/}
                {/*    const isLast = index === pathnames.length - 1;*/}
                {/*    return isLast ? (*/}
                {/*        <>*/}
                {/*            <p key={name} className='text-primaryColor' >{name}</p>*/}
                {/*        </>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            <p key={name}>*/}
                {/*                <Link to={routeTo}>{name}</Link>*/}
                {/*            </p>*/}
                {/*            <span className="material-symbols-outlined text-sm px-[0.5rem]">*/}
                {/*                arrow_forward_ios*/}
                {/*            </span>*/}
                {/*        </>*/}
                {/*    );*/}
                {/*})}*/}
                <Breadcrumb theme={customTheme}  aria-label="Default breadcrumb example">
                        <BreadcrumbItem theme={customTheme} href="#" icon={HiHome}  className="!text-white hover:text-primaryColor">
                        {breadcrumbMap["/"]}
                    </BreadcrumbItem>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <BreadcrumbItem href={to} className="!text-white hover:text-primaryColor">{breadcrumbMap[to] || value}</BreadcrumbItem>
                        )
                    })}
                </Breadcrumb>
            </div>
        </div>
    )
};

export default BreadCrumb;