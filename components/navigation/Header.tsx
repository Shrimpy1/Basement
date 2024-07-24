'use client';

import React, {useEffect, useState} from 'react';
import {useScrollPosition} from "@/components/util/ScrollProvider";
import Image from "next/image";
import Link from "next/link";
import {aronesans, chivomono, dmsans, inter} from "@/app/fonts";
import Display from "@/components/typography/Display";
import TextLarge from "@/components/typography/TextLarge";

const Header = () => {
    const scrollY = useScrollPosition();
    const [designClass, setDesignClass] = useState('');
    const [prevY, setPrevY] = useState(0);

    useEffect(() => {
        const showNav = scrollY <= 0 || scrollY < prevY;
        setPrevY(scrollY);

        if (showNav) {
            setDesignClass('');
        } else {
            setDesignClass('translate-y-[-150%] bg-white/20');
        }

        console.log(showNav)
    }, [scrollY]);

    return (
        <header
            className={`${designClass} sticky top-0 left-0 z-30 h-16 w-full items-center inline-flex duration-500 ease-in-out p-10 backdrop-blur-lg mb-10 border-b-1 border-neutral-700 text-white`}>
            <Link href={'/'} className={'flex items-center gap-x-2 group'}>
                <Image alt={'logo'} src={'/ebi.png'} width={40}
                       height={40} className={'-mt-2 group-hover:animate-bounce'}></Image>
                <TextLarge className={`${aronesans.className} font-bold`}>Shrimp&apos;s Basement</TextLarge>
            </Link>
            {/*<div*/}
            {/*    className={'w-full h-1 absolute left-0 bottom-0 bg-gradient-to-b from-orange-800 to-orange-950'}></div>*/}
        </header>
    );
};

export default Header;
