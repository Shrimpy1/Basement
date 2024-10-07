'use client';

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {indie_flower} from "@/app/fonts";
import Display from "@/components/typography/Display";

const NameAnimation = ({className, bgClass = 'bg-black'}: {
    className?: string,
    bgClass?: string
}) => {
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                let newIndex = 0;
                if (prevIndex < 2) {
                    newIndex = prevIndex + 1;
                }
                console.log(newIndex);
                return newIndex;
            });

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    let animationMap = [
        {
            index: 0,
            main: 'text-transparent',
            sub: 'translate-x-0 text-transparent',
            overlay: 'translate-x-0',
            image: 'animate-spin_left'
        },
        {
            index: 1,
            main: '',
            sub: 'translate-x-full text-transparent',
            overlay: 'translate-x-full',
            image: ''
        },
        {
            index: 2,
            main: '-translate-x-full',
            sub: 'translate-x-0',
            overlay: 'translate-x-full',
            image: 'animate-bounce_once'
        }
    ]

    let textStyle = ''

    return (
        <div
            className={`${className} ${textStyle} mx-auto relative w-fit flex md:text-9xl text-7xl text-orange-400 *:duration-1000 ease-in-out -translate-x-12`}>
            <div className={`${indie_flower.className} w-fit flex *:duration-1000 ease-in-out overflow-hidden pb-10`}>
                <div
                    className={`tracking-widest transition-transform
                ${animationMap.find(a => a.index == activeIndex)?.main} 
                `}>
                    Shrimpy
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-full flex tracking-widest 
                ${animationMap.find(a => a.index == activeIndex)?.sub} 
                `}>
                    Kiet
                </div>
            </div>
            <div
                className={`${bgClass} absolute w-full h-full top-0 left-0 !duration-1000 
                ${animationMap.find(a => a.index == activeIndex)?.overlay}
                `}>
                <Image
                    src={'/ebi.png'}
                    alt={'shrimp'}
                    width={250}
                    height={250}
                    className={`md:-mt-28 -mt-14 relative md:w-64 w-32 ${animationMap.find(a => a.index == activeIndex)?.image}`}/>
            </div>
        </div>
    );
};

export default NameAnimation;
