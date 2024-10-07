import TaskList from "@/components/task/TaskList";
import {getAllTasks} from "@/app/database/task";
import Link from "@/components/link/Link";

const Home = async () => {
    const taskList = await getAllTasks()

    return (
        <main className="flex flex-col w-full h-full shrink-0 gap-10">
            {/*<div className={'h-screen pt-32'}>*/}
            {/*    <NameAnimation className={''} bgClass={'bg-neutral-800'}/>*/}
            {/*</div>*/}

            {/*<Divider className={'my-5'}></Divider>*/}
            {/*<TitleAnimation/>*/}

            <TaskList list={taskList}/>
        </main>
    );
}

export default Home;
