import React from 'react';
import {Route, Routes} from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const PublicRouter = (props) => {
    return(
        <>
            <ScrollToTop/>
            <Routes>
                <Route exact element={props.template}>
                    <Route exact path={props.path} element={props.element}></Route>
                </Route>
            </Routes>
        </>
    )
};

export default PublicRouter;