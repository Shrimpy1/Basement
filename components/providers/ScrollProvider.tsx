'use client';

import React, {useState, useEffect, createContext, useContext, ReactNode} from 'react';

const ScrollContext = createContext(0);

export const useScrollPosition = () => {
    return useContext(ScrollContext);
};

const ScrollProvider = ({children}: { children?: ReactNode }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize scroll position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider value={scrollY}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
