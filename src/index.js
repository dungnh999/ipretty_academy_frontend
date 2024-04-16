import i18n from 'academy/locales/config/index'
import React from 'react';
import ReactDOM from 'react-dom';
import 'academy/css/index.css';
import Router from 'academy/Router/Router';
import { I18nextProvider } from 'react-i18next';
const App = (Router);

ReactDOM.render(
    <>
        <I18nextProvider i18n={i18n}>
            <App/>,
        </I18nextProvider>;
    </>,
    document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
