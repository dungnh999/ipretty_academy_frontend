import {AUTH_POST_LOGIN_URL , AUTH_POST_LOG_OUT , GET_ME_URL ,} from './constances';
import { getTokens } from "academy/helpers/utils";
import axiosTemplate from "academy/helpers/axios";

function login(reponse , error ,email, password, isAdminPage) {
    return axiosTemplate('post',AUTH_POST_LOGIN_URL, '', { email, password, isAdminPage}, reponse , error)
}
//
// function logout(responseCb, errorCb) {
//     axios
//         .get(AUTH_POST_LOG_OUT, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }
//
// function profile(responseCb, errorCb) {
//     axios
//         .get(GET_ME_URL, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }
// function get_me(access_token, responseCb, errorCb) {
//     axios
//         .get(GET_ME_URL, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }

const AuthService = {
    // login, logout , profile , get_me
    login
};

export default AuthService;
