'use client';

import React, {useEffect, useState} from 'react';
import {useScrollPosition} from "@/components/util/ScrollProvider";
import Image from "next/image";
import Link from "next/link";
import {aronesans, chivomono, dmsans, inter} from "@/app/fonts";
import Display from "@/components/typography/Display";

const Header = () => {
    const scrollY = useScrollPosition();
    const [designClass, setDesignClass] = useState('');
    const [prevY, setPrevY] = useState(0);

    useEffect(() => {
        const showNav = scrollY <= 0 || scrollY < prevY;
        setPrevY(scrollY);

        if (showNav) {
            setDesignClass('bg-black/80');
        } else {
            setDesignClass('translate-y-[-150%] bg-white/20');
        }

        console.log(showNav)
    }, [scrollY]);

    return (
        <header
            className={`${designClass} sticky top-0 left-0 z-30 h-16 w-full items-center inline-flex duration-500 ease-in-out p-10 backdrop-blur-lg border-b-2 border-white/0 text-white mb-10`}>
            <Link href={'/'} className={'flex items-center gap-x-5 group'}>
                <Image alt={'logo'} src={'/ebi.png'} width={60}
                       height={60} className={'-mt-2 group-hover:animate-bounce'}></Image>
                <Display className={`${aronesans.className} font-bold`}>Shrimp&apos;s Basement</Display>
            </Link>
            {/*<div*/}
            {/*    className={'w-full h-1 absolute left-0 bottom-0 bg-gradient-to-b from-orange-800 to-orange-950'}></div>*/}
        </header>
    );
};

export default Header;
