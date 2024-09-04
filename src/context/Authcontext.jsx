import React, { createContext, useReducer , useEffect} from 'react';
import { AuthReducer, initialState } from 'academy/reducers/AuthReducer';
import {getTokens} from "academy/helpers/utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(() => {
        const storedUser = getTokens();
        if (storedUser.authToken) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: storedUser });
        }
    }, []);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
