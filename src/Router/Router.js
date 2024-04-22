import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainLayout from "academy/layouts/MainLayout/MainLayout";
import Home from "academy/views/home/views/Home";
import Course from "academy/views/course/views/Course";

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
                <PublicRouter exact path="/course" component={Course}/>
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