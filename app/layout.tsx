import type {Metadata} from "next";
import "./globals.css";
import {inter, aronesans, dmsans, chivomono} from "@/app/fonts";

export const metadata: Metadata = {
    title: "Random",
    icons: {
        icon: '/ebi.png'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={'bg-background'}>
        <body className={`${dmsans.className} overflow-x-hidden text-foreground bg-background`}>
        {children}
        </body>
        </html>
    );
}
