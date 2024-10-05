import {Task} from "@/types/Task";
import Body from "@/components/typography/Body";
import Button from "@/components/controls/Button";
import {deleteTask} from "@/app/database/task";

const TaskItem = ({task, index, className, onDelete}: {
    task: Task,
    className?: string,
    index: number,
    onDelete: (taskId: number) => void
}) => {
    return (
        <div className={`${className} py-4 px-6 w-full flex justify-between items-center`}>
            <Body>
                {`${index + 1}. `}
                {task.todo}
                {!!task.sending && <small>(sending...)</small>}
            </Body>

            <Button onClick={async () => {
                onDelete(task.id);
                await deleteTask(task.id)
            }} variant={'ghost'} color={'danger'}>Delete</Button>
        </div>
    )
}

export default TaskItem;
