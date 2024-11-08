'use server'

import {revalidatePath} from "next/cache";
import {createClient} from "@/database/supabase/server";
import {Task} from "@/types/Task";

export const getAllTasks = async (): Promise<Task[]> => {
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        throw new Error('Unauthenticated')
    }

    const {data, error} = await supabase.from('task').select()

    if (data) {
        return data.map(task => {
            return {id: task.id, todo: task.todo}
        })
    }
    console.log('no data')
    return [];
}


export const saveTask = async (formData: FormData) => {
    const todo = formData.get('todo') as string

    const supabase = await createClient()
    try {
        await supabase.from('task').insert({todo: todo})
        revalidatePath('/')
        return {message: 'Added'}
    } catch (e) {
        return {message: 'Error adding new task'}
    }
}

export const deleteTask = async (id: number) => {
    const supabase = await createClient()
    try {
        await supabase.from('task').delete().eq('id', id)
        revalidatePath('/')
    } catch (e) {
        // @ts-ignore
        throw new Error(e.message)
    }
}
