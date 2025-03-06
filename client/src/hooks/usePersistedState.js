import { useState } from "react";

export default function usePersistedState(key, initialStateData) {
    const [state, setState] = useState(() => {
        const authenticationData = localStorage.getItem(key);
        
        if(!authenticationData) {
            return initialStateData;
        }

        return JSON.parse(authenticationData);
    });

    const setStateWrapper = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return [state, setStateWrapper];
}