import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainLayout from "academy/layouts/MainLayout/MainLayout";
import Home from "academy/views/home/views/Home";
import Course from "academy/views/course/views/Course";
import Detail from "academy/views/detail/views/Detail";
import Blog from "academy/views/blog/views/Blog";
import Auth from "academy/views/auth/view/auth";
import BlogDetail from "academy/views/BlogDetail/views/BlogDetail";
import Error404 from "academy/views/page/404";
import Faqs from "academy/views/faqs/views/faqs";
import LearnLayout from "academy/layouts/LearnLayout/views/LearnLayout";
import Contact from "academy/views/contact/views/contact";
import Checkout from "academy/views/checkout/views/checkout";
import CartView from "academy/views/Cart/views/CartView";

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

const LearnRouter = ({ component: Component, isLoggerIn, ...rest }) => (
    <Route
        {...rest}
        render = {(props) =>
            (
                <LearnLayout>
                    <main>
                        <Component {...props} />
                    </main>
                </LearnLayout>
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
                <PublicRouter exact path="/detail" component={Detail}/>
                <PublicRouter exact path="/blog" component={Blog}/>
                <PublicRouter exact path="/login" component={Auth}/>
                <PublicRouter exact path="/detail-blogs" component={BlogDetail}/>
                <PublicRouter exact path="/error" component={Error404}/>
                <PublicRouter exact path="/faqs" component={Faqs}/>
                <PublicRouter exact path="/contact" component={Contact}/>
                <PublicRouter exact path="/checkout" component={Checkout}/>
                <PublicRouter exact path="/cart" component={CartView}/>
                <LearnRouter exact path="/learn" component={Faqs}/>
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