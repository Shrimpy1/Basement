import {Task} from "@/types/Task";
import TaskItem from "@/components/task/TaskItem";

const TaskList = ({list, className}: { list: Array<Task>, className?: string }) => {
    const taskInfo = list.map(task => (
        <TaskItem key={task.id} task={task}/>
    ))
    return (
        <ol className={`list-decimal ${className}`}>
            {list.map(task => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </ol>
    );
}

export default TaskList;
