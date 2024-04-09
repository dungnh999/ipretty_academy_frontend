import React from 'react';
import logo from 'assets/logo.svg'

const HeaderLayout = (props) => {
    return(
        <header>
            <div className="bg-white py-2">
                <nav className="container mx-auto">
                    <div className="w-[166px] md:w-[30px] flex items-center">
                        <a href='/'>
                            <img src={logo} alt="LOGO" srcSet=""/>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderLayout;