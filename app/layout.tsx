import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import ScrollProvider from "@/components/util/ScrollProvider";
import {Providers} from "./providers";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import {inter, aronesans, dmsans, chivomono} from "@/app/fonts";
import Footer from "@/components/navigation/Footer";

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
        <html lang="en" className={'bg-neutral-800 dark'}>
        <body className={`${dmsans.className} overflow-x-hidden`}>
        <Providers>
            <ScrollProvider>
                <Header/>
            </ScrollProvider>

            <div className={'container mx-auto px-6 mb-10 min-h-screen'}>
                <Breadcrumbs className={'mb-10'}/>
                {children}
            </div>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
