import {Task} from "@/types/Task";

const TaskItem = ({task, className}: { task: Task, className?: string }) => {
    return (
        <li className={className}>{task.name}</li>
    )
}

export default TaskItem;
