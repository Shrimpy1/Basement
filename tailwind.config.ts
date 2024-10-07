import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'shine': '0 0px 20px 10px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'background': {
                    DEFAULT: 'rgba(var(--background), <alpha-value>)',
                },
                'primary': {
                    DEFAULT: 'rgba(var(--primary), <alpha-value>)',
                },
                'secondary': {
                    DEFAULT: 'rgba(var(--secondary), <alpha-value>)',
                },
                'danger': {
                    DEFAULT: 'rgba(var(--danger), <alpha-value>)',
                },
                'foreground': {
                    DEFAULT: 'rgba(var(--foreground), <alpha-value>)',
                },
                'contrast': {
                    DEFAULT: 'rgba(var(--contrast), <alpha-value>)',
                },
                'accent': {
                    DEFAULT: 'rgba(var(--accent), <alpha-value>)',
                },
            },
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(0) rotate(0deg)',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
                    },
                    '50%': {
                        transform: 'translateY(-20%) rotate(7deg)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
                    },
                },
                spin_right: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(360deg)'}
                },
                spin_left: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-360deg)'}
                },
                flip: {
                    '0%': {transform: 'rotateY(0deg)'},
                    '100%': {transform: 'rotateY(180deg)'}
                }
            },
            animation: {
                bounce: 'bounce 1s infinite',
                bounce_once: 'bounce 1s',
                spin_right: 'spin_right 1s ease-out',
                spin_left: 'spin_left 0.7s ease-out',
                flip: 'flip 1s ease-out'
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(
        {
            themes: {
                light: {},
                dark: {}
            },
            layout: {
                disabledOpacity: "0.3"
            }
        }
    )],
};
export default config;
