import i18n from 'academy/locales/config/index'
import React from 'react';
import ReactDOM from 'react-dom';
import 'flowbite'
import 'academy/css/index.css';
// import 'react-dropdown/style.css';
import RouterApp from 'academy/Router/Router';
import { I18nextProvider } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'
import { ToastContainer} from 'react-toastify';
import ScrollToTop from "academy/components/ScrollToTop/ScrollToTop";


const App = (RouterApp);
ReactDOM.render(
    <>
        <I18nextProvider i18n={i18n}>
            <App/>
            <ToastContainer
                stacked="true"
                autoClose="2000"
            />
        </I18nextProvider>
    </>,
    document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
