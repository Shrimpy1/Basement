'use client';

import {useEffect, useRef, useState} from "react";

const TitleAnimation = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                let newIndex = 0;
                if (prevIndex < 1) {
                    newIndex = prevIndex + 1;
                }
                console.log(newIndex);
                return newIndex;
            });

        }, 5000);

        return () => clearInterval(interval);
    })

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [width1, setWidth1] = useState(0);
    const [width2, setWidth2] = useState(0);

    useEffect(() => {
        if (ref1.current && ref2.current) {
            // @ts-ignore
            setWidth1(ref1.current.offsetWidth)
            // @ts-ignore
            setWidth2(ref2.current.offsetWidth)
        }
    }, [])

    let animationMap = [
        {
            index: 0,
            removable: '',
            space: ''
        },
        {
            index: 1,
            removable: 'translate-y-full opacity-0',
            space: 'ml-4'
        }
    ]

    let style1 = {
        transform: activeIndex == 1 ? `translateX(-${width1}px)` : ''
    }

    let style2 = {
        transform: activeIndex == 1 ? `translateX(-${width1 + width2}px)` : ''
    }

    return (
        <div className={'text-5xl flex overflow-hidden py-1'}>
            <span>Pro</span>
            <div
                className={`*:duration-1000 *:ease-out duration-1000 *:transition-all flex ${animationMap.find(a => a.index == activeIndex)?.space}`}>
                <span>g</span>
                <span ref={ref1} className={`${animationMap.find(a => a.index == activeIndex)?.removable}`}>r</span>
                <span style={style1}>a</span>
                <span ref={ref2} className={`${animationMap.find(a => a.index == activeIndex)?.removable}`}>m</span>
                <span style={style2}>mer</span>
            </div>
        </div>
    );
};

export default TitleAnimation;
