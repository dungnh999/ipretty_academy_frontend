import { Routes , Route } from 'react-router-dom';

const PrivateRouter = (props) => {
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

export default PrivateRouter;