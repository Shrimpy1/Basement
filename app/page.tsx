import Link from "@/components/link/Link";
import {createClient} from "@/utils/supabase/server";

import NameAnimation from "@/components/decor/NameAnimation";
import Title from "@/components/typography/Title";
import {Divider} from "@nextui-org/react";
import Display from "@/components/typography/Display";
import TitleAnimation from "@/components/decor/TitleAnimation";

export default async function Home() {
    return (
        <main className="flex flex-col w-full h-full shrink-0 gap-10">
            <div className={'h-screen pt-32'}>
                <NameAnimation className={''} bgClass={'bg-neutral-800'}/>
            </div>

            <Divider className={'my-5'}></Divider>
            <TitleAnimation/>

            <div className={'flex flex-col gap-3 items-center mt-96'}>
                <Link size={'xl'} href={"/fam-tree"}>Family Tree</Link>
            </div>

            <div>

            </div>
        </main>
    );
}
