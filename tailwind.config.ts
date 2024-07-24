import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";
import {rotate} from "next/dist/server/lib/squoosh/impl";

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
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
            },
            animation: {
                bounce: 'bounce 1s infinite',
                bounce_once: 'bounce 1s',
                spin_right: 'spin_right 1s ease-out',
                spin_left: 'spin_left 0.7s ease-out',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
