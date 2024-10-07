'use client';

import React, {useEffect, useState} from 'react';
import {useScrollPosition} from "@/components/providers/ScrollProvider";
import Link from "next/link";
import {aronesans, chivomono, dmsans, inter} from "@/app/fonts";
import TextLarge from "@/components/typography/TextLarge";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";
import Image from "next/image";
import SettingBar from "@/components/navigation/SettingBar";

const Header = ({bgClass}: {
    bgClass?: string
}) => {
    const scrollY = useScrollPosition();
    const [designClass, setDesignClass] = useState('');
    const [prevY, setPrevY] = useState(0);

    useEffect(() => {
        const showNav = scrollY <= 0 || scrollY < prevY;
        setPrevY(scrollY);

        if (showNav) {
            setDesignClass('');
        } else {
            setDesignClass('translate-y-[-150%] bg-neutral-500/30');
        }

        console.log(showNav)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null

    return (
        <header
            className={`${designClass} ${bgClass} 
            sticky top-0 left-0 z-30 h-16 w-full inline-flex items-center justify-between p-10 
            duration-500 ease-in-out  
            border-b-1 border-neutral-500/20 
            text-accent backdrop-blur-lg
            `}>
            <Link href={'/'} className={'flex items-center gap-x-2 group'}>
                <Image alt={'logo'} src={'/ebi.png'} width={40}
                       height={40} className={'-mt-2 group-hover:animate-bounce'}></Image>
                <TextLarge className={`${aronesans.className} font-bold`}>Shrimp&apos;s Basement</TextLarge>
            </Link>

            <div className={'flex gap-5 items-center'}>
                <ThemeSwitcher/>
                <SettingBar/>
            </div>

        </header>
    );
};

export default Header;
