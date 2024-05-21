import React from 'react';
import HeaderLayout from "academy/layouts/MainLayout/HeaderLayout";
import FooterLayout from "academy/layouts/MainLayout/FooterLayout";

const MainLayout = ({ children }) => {
    return (
        <>
            <HeaderLayout/>
            {children}
            <FooterLayout/>
        </>

    )
}

export default MainLayout;