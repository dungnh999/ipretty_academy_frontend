const API_URL = process.env.API_URL + '/api/';


/**
 * AUTH
 * */
export const AUTH_POST_LOG_OUT = API_URL + 'logout'
export const AUTH_POST_LOGIN_URL = API_URL + 'auth/login';
export const AUTH_POST_LOGIN_BY_TOKEN = API_URL + 'auth/login-by-token'
export const AUTH_POST_SIGNUP_URL = API_URL + 'auth/signup';


export const GET_ME_URL = API_URL + 'auth/me';

export const GET_USER_URL = API_URL + 'users';
export const GET_COURSE_URL = API_URL + 'courses';

/**
 * COURSE
 * */

export const GET_ALL_COURSE_URL = API_URL + 'get-list-course';
export const GET_DETAIL_COURSE_BY_SLUG_URL = API_URL + 'course-detail-by-slug';
export const CHECK_JOIN_COURSE_URL = 'check-joined-course';



export const UPDATE_PROCESS_LESSON = API_URL + 'finish-lesson'

/**
 * PAYMENT
 * */
export const GET_PAYMENTS_COURSE = API_URL + 'payments'

/**
 * TRANSACTIONS
 * */
export const CREATE_ORDER_TRANSACTIONS_COURSE = API_URL + 'transactions'


/**
 * ORDER
 * */
export const CREATE_ORDER_COURSE = API_URL + 'orders'
export const GET_ORDER_DETAIL_COURSE = API_URL + 'order-detail'
