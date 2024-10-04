import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = (props) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);



    return(
        <div className='bg-black pb-6'>
            <div className="container max-w-screen-xl mx-auto flex p-[0.625rem] items-center">
                <p>
                    <Link to='/'>Trang chủ</Link>
                </p>
                <span className="material-symbols-outlined text-sm px-[0.5rem]">
                    arrow_forward_ios
                </span>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <>
                            <p key={name} className='text-primaryColor' >{name}</p>
                        </>
                    ) : (
                        <>
                            <p key={name}>
                                <Link to={routeTo}>{name}</Link>
                            </p>
                            <span className="material-symbols-outlined text-sm px-[0.5rem]">
                                arrow_forward_ios
                            </span>
                        </>
                    );
                })}

            </div>
        </div>
    )
};

export default BreadCrumb;