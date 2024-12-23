'use client';

import {Task} from "@/types/Task";
import TaskItem from "@/components/task/TaskItem";
import {useOptimistic, useState} from 'react'
import {saveTask} from "@/app/database/task";
import Input from "@/components/input/Input";
import {Button} from "@nextui-org/button";
import Body from "@/components/typography/Body";

const TaskList = ({list, className}: { list: Task[], className?: string }) => {
    const [formState, setFormState] = useState({message: '', error: ''})

    const [optimisticList, updateOptimisticList] = useOptimistic(
        list,
        (state: Task[], action: { type: 'add' | 'delete', payload: any }) => {
            switch (action.type) {
                case 'add':
                    return [
                        ...state,
                        {
                            id: Date.now(),
                            todo: action.payload,
                            sending: true
                        }
                    ]
                case 'delete':
                    return state.filter(task => task.id !== action.payload)
                default:
                    return state
            }
        }
    )

    const addOptimisticTask = (newTask: string) => {
        updateOptimisticList({type: 'add', payload: newTask})
    }

    const deleteOptimisticTask = (taskId: number) => {
        updateOptimisticList({type: 'delete', payload: taskId})
    }

    const formAction = async (formData: FormData) => {
        const todo = formData.get('todo') as string

        if (!todo) {
            setFormState({...formState, error: 'Please enter a task', message: ''})
            return
        }

        addOptimisticTask(todo)

        try {
            const {message} = await saveTask(formData)
            setFormState({...formState, error: '', message})
        } catch (e) {
            // @ts-ignore
            setFormState({...formState, error: e.message})
        }
    }

    return (
        <div className={'flex flex-col gap-5'}>
            <form action={formAction} className={'flex flex-col gap-4'}>
                <div className={'flex items-end gap-4'}>
                    <Input label={'TODO'} size={'md'} placeholder={"Add new tasks"} isRequired
                           name={'todo'}/>
                    <Button type={'submit'} color={'primary'}>Add</Button>
                </div>
                {formState.error && <Body className={'text-danger italic'}>{formState.error}</Body>}
                {formState.message && <Body className={'italic'}>{formState.message}</Body>}
            </form>
            <div className={`${className} overflow-hidden rounded-xl`}>
                {optimisticList.map((task, index) => (
                    <TaskItem onDelete={deleteOptimisticTask} className={'bg-contrast/10 hover:bg-contrast/20'}
                              index={index} key={index} task={task}/>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
