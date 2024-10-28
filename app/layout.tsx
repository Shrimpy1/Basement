import type {Metadata} from "next";
import "./globals.css";
import {inter, aronesans, dmsans, chivomono} from "@/app/fonts";
import Providers from "@/components/providers/Providers";
import Header from "@/components/navigation/Header";
import LoadingScreen from "@/components/util/LoadingScreen";
import Footer from "@/components/navigation/Footer";
import {Breadcrumbs} from "@nextui-org/breadcrumbs";
import {createClient} from "@/database/supabase/server";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: "Random",
    icons: {
        icon: '/ebi.png'
    }
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = createClient()

    const {data: {user}} = await supabase.auth.getUser()

    return (
        <html lang="en" suppressHydrationWarning className={'bg-background'}>
        <body className={`${dmsans.className} overflow-x-hidden text-foreground bg-background`}>
        <Providers>
            <Header user={user}/>
            <LoadingScreen/>
            <div className={'container mx-auto mt-10 px-6 mb-10 min-h-screen'}>
                <Breadcrumbs className={'mb-10'}/>
                {children}
            </div>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
