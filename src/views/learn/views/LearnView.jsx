import React from 'react';
import Sidebar from "academy/views/learn/components/Sidebar";
import Content from "academy/views/learn/components/Content";
import Header from "academy/views/learn/components/Header";
import ModalFastForwarding from "academy/views/learn/components/ModalFastForwarding";


const LearnView = (props) => {
    return (
        <>
            <div className='flex fixed bottom-0 right-0 left-0 top-0'>
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        </>
    )
};

export default LearnView;