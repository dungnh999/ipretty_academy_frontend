import React from 'react';
import {Route, Routes} from "react-router-dom";


const PublicRouter = (props) => {
    return(
        <>
            <Routes>
                <Route exact element={props.template}>
                    <Route exact path={props.path} element={props.element}></Route>
                </Route>
            </Routes>
        </>
    )
};

export default PublicRouter;