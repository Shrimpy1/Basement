import {getAllTasks} from "@/app/database/task";
import TaskList from "@/components/task/TaskList";

const TaskPage = async () => {
    const taskList = await getAllTasks()

    return (
        <>
            <TaskList list={taskList}/>
        </>
    );
};

export default TaskPage;
