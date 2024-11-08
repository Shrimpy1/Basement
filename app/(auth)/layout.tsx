import {ReactNode} from "react";
import {redirect} from "next/navigation";
import {createClient} from "@/database/supabase/server";

const Layout = async ({children}: {
    children: ReactNode
}) => {
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if (user) {
        redirect('/')
    }

    return (
        <>
            <div className={'container mx-auto mt-10 px-6 mb-10 min-h-screen'}>
                {children}
            </div>
        </>
    );
};

export default Layout;
