'use client';

import {createContext, ReactNode, useContext, useState} from "react";
import {LoadingContext} from "@/components/providers/LoadingProvider";

const initial = (state: boolean) => {
}

export const SideModalState = createContext({
    isDisplayed: false,
    setDisplayed: initial
})

const SideFormProvider = ({children}: {
    children: ReactNode
}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const {setLoading} = useContext(LoadingContext);

    const setDisplayed = (displayed: boolean) => {
        setIsDisplayed(displayed);
        setLoading(displayed);
    }

    return (
        <SideModalState.Provider value={{isDisplayed, setDisplayed}}>
            {children}
        </SideModalState.Provider>
    );
};

export default SideFormProvider;
