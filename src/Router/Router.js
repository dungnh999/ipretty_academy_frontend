import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainLayout from "academy/layouts/MainLayout/MainLayout";
import Home from "academy/views/home/views/Home";

/**
 * Router Public
 * */
const PublicRouter = ({ component: Component, isLoggerIn, ...rest }) => (
    <Route
        {...rest}
        render = {(props) =>
            (
                <MainLayout>
                    <main>
                        <Component {...props} />
                    </main>
                </MainLayout>
            )
        }
    />
)

/**
 * Router Root
 * */
const AppRouter = () => {
    return (
        <>
            <Switch>
                <PublicRouter exact path="/" component={Home}/>
            </Switch>
        </>
    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default Router;