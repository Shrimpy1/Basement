import {faFaceSmileWink} from "@fortawesome/free-regular-svg-icons";
import Title from "@/components/typography/Title";
import Icon from "@/components/icon/Icon";
import {Task} from "@/types/Task";
import TaskList from "@/components/task/TaskList";
import Link from "@/components/link/Link";
import {createClient} from "@/utils/supabase/server";
import Image from "next/image";

const tasks: Array<Task> = [
    {
        id: 1,
        name: "first"
    },
    {
        id: 2,
        name: "second"
    }
]

export default async function Home() {
    const supabase = createClient();
    const {data: nodes, error} = await supabase.from("node").select();

    return (
        <main className="flex flex-col w-full h-full shrink-0 gap-10">
            {/*<Icon icon={faFaceSmileWink}/>*/}
            <Image src={'/ebi.png'} alt={'shrimp'} width={250} height={250} className={'mx-auto'}/>
            <div className={'flex flex-col gap-3 items-center'}>
                <Link size={'xl'} href={"/fam-tree"}>Family Tree</Link>
                <Link size={'xl'} href={"/login"}>Login</Link>
            </div>
        </main>
    );
}
