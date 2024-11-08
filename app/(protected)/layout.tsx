import {ReactNode} from "react";
import {redirect} from "next/navigation";
import {createClient} from "@/database/supabase/server";

const MainLayout = async ({children}: {
    children: ReactNode
}) => {
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    // if (!user) {
    //     redirect('/login')
    // }

    return (
        <>
            {children}
        </>
    )
};

export default MainLayout;
