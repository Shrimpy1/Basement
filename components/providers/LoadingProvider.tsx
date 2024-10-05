'use client';

import {createContext, ReactNode, useContext, useState} from "react";

const initialSetter = (state: boolean) => {
}

export const LoadingContext = createContext({
    loading: false,
    setLoading: initialSetter
});

export const useLoading = () => {
    return useContext(LoadingContext)
}
const LoadingProvider = ({children}: {
    children: ReactNode
}) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
