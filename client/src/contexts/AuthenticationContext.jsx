import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});

export function AuthenticationContextProvider(props){
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('isAuthenticated', state.isAuthenticated)
        localStorage.setItem('accessToken', state.accessToken)
        localStorage.setItem('email', state.email)
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    };

    return (
        <AuthenticationContext.Provider value={contextData}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}