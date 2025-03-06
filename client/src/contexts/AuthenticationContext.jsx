import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthenticationContext = createContext({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    localLogout: () => null
});

export function AuthenticationContextProvider(props){
    const [authState, setAuthState] = usePersistedState('authenticationData',{});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const localLogout = () => {
        setAuthState(null);
    }

    const contextData = {
        id: authState?._id,
        email: authState?.email,
        username: authState?.username,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        localLogout
    };

    return (
        <AuthenticationContext.Provider value={contextData}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}