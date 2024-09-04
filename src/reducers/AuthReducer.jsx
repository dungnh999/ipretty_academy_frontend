import {getTokens} from "academy/helpers/utils";

export const initialState = {
    isAuthenticated: (getTokens()['user'] ? true : false) ,
    token: (getTokens()['authToken'] ? getTokens()['authToken']  : null),
    user: (getTokens()['user'] ? getTokens()['user']  : null),
    error: null
};

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.accessToken,
                error: null
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
