'use server'

import {createClient} from "@/utils/supabase/server";
import {revalidatePath} from "next/cache";

const supabase = createClient();

export const addNode = async (prevState: any, formData: FormData) => {
    const name = formData.get('name');
    const gender = formData.get('gender');
    const parentName = formData.get('parent');

    try {
        // Catch error: Name should be unique

        // Fetch parent's data
        const {
            data: parentData,
            error: parentError
        } = await supabase
            .from('node')
            .select('children')
            .or(`father_name.eq.${parentName},mother_name.eq.${parentName}`)
            .single();

        if (parentError || !parentData) {
            return {message: `Could not find parent with the name ${parentName}.`}
        }

        // Insert new node
        const newRecord = gender === 'male' ? {father_name: name} : {mother_name: name};
        const {data: newNodeData, error: newNodeError} = await supabase
            .from('node')
            .insert(newRecord)
            .select('id')
            .single();

        if (newNodeError) {
            return {message: 'Failed to insert new node.'};
        }

        let newId = newNodeData.id;

        // Insert the new node id to its parent node
        const updatedChildren = [...parentData.children, newId];
        const {error: updateError} = await supabase
            .from('node')
            .update({children: updatedChildren})
            .or(`father_name.eq.${parentName},mother_name.eq.${parentName}`);

        if (updateError) {
            return {message: 'Failed to update parent\'s children.'};
        }

        revalidatePath('/fam-tree')
        return {message: 'Node added successfully.'};
    } catch (err) {
        return {message: 'Fail to add new node'}
    }
}

export const alterNode = async (id: number, children: number[]) => {
    const supabase = createClient();
    supabase.from('node').update({children: children}).eq('id', id);
}
