'use client'

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import Icon from "@/components/iconography/Icon";
import {useSwitch, VisuallyHidden} from "@nextui-org/react";
import {faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme, resolvedTheme} = useTheme()

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getWrapperProps,
        getInputProps
    } = useSwitch({
        onChange: () => {
            handleTheme()
        },
        isSelected: theme === 'dark'
    })

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null


    return (
        <div className={''}>
            {/*{resolvedTheme === 'dark' &&*/}
            {/*    <button onClick={() => setTheme('light')}><Icon name={'Sun'} size={24}/></button>}*/}

            {/*{resolvedTheme === 'light' &&*/}
            {/*    <button onClick={() => setTheme('dark')}><Icon name={'Moon'} size={24}/></button>*/}
            {/*}*/}
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()}/>
                </VisuallyHidden>
                <div {...getWrapperProps()} className={slots.wrapper({
                    class: [
                        "p-5",
                        "group-data-[selected=true]:text-inherit",
                        "flex items-center justify-center",
                        "rounded-lg bg-transparent hover:bg-neutral-200",
                        "group-data-[selected=true]:bg-transparent group-data-[selected=true]:hover:bg-neutral-500"
                    ],
                })}>
                    <Icon
                        size={'lg'}
                        icon={faCircleHalfStroke}
                        className={`${theme === 'light' && '[transform:rotateY(180deg)]'} duration-500 ease-out`}
                    />
                </div>
            </Component>
        </div>
    );
};

export default ThemeSwitcher;
