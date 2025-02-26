const API_URL = process.env.API_URL + '/api/';


/**
 * AUTH
 * */
export const AUTH_POST_LOG_OUT = API_URL + 'logout'
export const AUTH_POST_LOGIN_URL = API_URL + 'auth/login';
export const AUTH_POST_LOGIN_BY_TOKEN = API_URL + 'auth/login-by-token'
export const AUTH_POST_SIGNUP_URL = API_URL + 'auth/signup';
export const AUTH_GET_ACTIVE_EMAIL_URL = API_URL + 'auth/signup/activate';


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

/**
 * BANNER
 * */

export const GET_BANNER = API_URL + 'banners'


/**
 * NOTIFICATION
 * */
export const GET_LIST_NOTIFICATIN = API_URL + 'notifications'


/**
 * COURSE CATEGORY
 * */
export const GET_LIST_CATEGORY_COURSE = API_URL + 'course-categories'
export const GET_LIST_COURSE_CATEGORY = API_URL + 'course/category'



/**
 * CART 
 * */
export const POST_ADD_CART_COURSE = API_URL + 'carts'


/**
 * USER
 * */

export const POST_UPDATE_PROFILE = API_URL + 'update-profile'
export const POST_UPDATE_AVATAR = API_URL + 'upload-avatar'
export const GET_MY_COURSE = API_URL + 'my-courses'

/**
 * COMMENT
 * */

export const GET_LIST_COMMENT = API_URL + 'feedback'
export const GET_LIST_COMMENT_BY_COURSE = API_URL + 'rating-comment-course'


/**
 * POST CATEGORY
 * */
export const GET_LIST_POST_CATEGORY = API_URL + 'post-categories'
// export const GET_DETAIL_POST = API_URL + 'posts/posts-slug'

/**
 * POST
 * */
export const GET_LIST_POST = API_URL + 'posts'
export const GET_DETAIL_POST = API_URL + 'posts/posts-slug'
