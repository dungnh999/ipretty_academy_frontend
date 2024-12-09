import React from "react";
import {BrowserRouter as Router, Routes, Route, Outlet, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import CartStore from "academy/store/CartStore";

import Home from "academy/views/home/views/Home";
import Course from "academy/views/course/views/Course";
import Detail from "academy/views/detail/views/Detail";
import Blog from "academy/views/blog/views/Blog";
import Auth from "academy/views/auth/view/auth";
import BlogDetail from "academy/views/BlogDetail/views/BlogDetail";
import Error404 from "academy/views/page/404";
import Faqs from "academy/views/faqs/views/faqs";
import LearnLayout from "academy/layouts/LearnLayout/LearnLayout";
import Contact from "academy/views/contact/views/contact";
import Checkout from "academy/views/checkout/views/checkout";
import CartView from "academy/views/Cart/views/CartView";
import Forgot from "academy/views/auth/view/Forgot";
import PublicRouter from "academy/Router/PublicRouter";
import MainLayout from "academy/layouts/MainLayout/MainLayout";
import {AuthProvider} from "academy/context/Authcontext";
import DetailCourseProvider from "academy/context/DetailCourseContext";
import PaymentSuccessful from "academy/views/checkout/views/PaymentSuccessful";
import LearnView from "academy/views/learn/views/LearnView";
import Verify from "academy/views/auth/view/Verify";
import PrivateRouter from "./PrivateRouter";
import Notification from "academy/views/notification/views/notification"
import Profile from "academy/views/profile/views/index"
/**
 * Router Public
 * */

const LearnLayoutMain = ({component: Component, isLoggerIn, ...rest}) => (<>
    <LearnLayout>
        <main>
            <Outlet/>
        </main>
    </LearnLayout>
</>)

const HomeLayoutMain = ({component: Component, isLoggerIn, ...rest}) => (<>
        <Provider store={CartStore}>
            <AuthProvider>
                <MainLayout>
                    <main>
                        <Outlet/>
                    </main>
                </MainLayout>
            </AuthProvider>
        </Provider>
    </>
)


/**
 * Router Root
 * */
const AppRouter = () => {
    return (<>
        <PublicRouter path="/" element={<Home/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/blog/1" element={<Blog/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/login" element={<Auth/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/forgot" element={<Forgot/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/detail-blogs" element={<BlogDetail/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/error" element={<Error404/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/faqs" element={<Faqs/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/contact" element={<Contact/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/checkout" element={<Checkout/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/vnpay/callback" element={<PaymentSuccessful/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/cart" element={<CartView/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/course" element={<Course/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/course/:slug" element={<Detail/>} template={<HomeLayoutMain/>}/>
        <PublicRouter path="/signup/verify/:id/:token" element={<Verify/>} template={<HomeLayoutMain/>}/>
        {/*<PublicRouter path="/*" element={<Error404/>} template={<HomeLayoutMain/>}> </PublicRouter>*/}
        <PublicRouter path="/notification" element={<Notification/>} template={ <HomeLayoutMain/>}/>
        <PublicRouter path="/profile" element={<Profile/>} template={ <HomeLayoutMain/>}/>
        <Routes>
            <Route path='/course/:slug/learn/lecture/' element={<LearnView/>}>
                <Route exact path=":id" element={<LearnView/>}></Route>
            </Route>
        </Routes>

    </>)
}

const RouterApp = () => {
    return (
        <DetailCourseProvider>
            <Router>
                <AppRouter/>
            </Router>
        </DetailCourseProvider>
    );
}

export default RouterApp;