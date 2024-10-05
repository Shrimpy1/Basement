import {ReactNode} from "react";
import {redirect} from "next/navigation";
import Header from "@/components/navigation/Header";
import LoadingScreen from "@/components/util/LoadingScreen";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/navigation/Footer";
import Providers from "@/components/providers/Providers";
import {createClient} from "@/database/supabase/server";

const MainLayout = async ({children}: {
    children: ReactNode
}) => {
    const supabase = createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <Providers>
            <Header/>
            <LoadingScreen/>

            <div className={'container mx-auto mt-10 px-6 mb-10 min-h-screen'}>
                <Breadcrumbs className={'mb-10'}/>
                {children}
            </div>
            <Footer/>
        </Providers>
    );
};

export default MainLayout;
