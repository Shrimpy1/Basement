import {createClient} from "@/utils/supabase/server";
import {NodeData} from '@/types/NodeData'

export const getAll = async () => {
    
    const supabase = createClient();
    const {data: rawData, error} = await supabase.from("node").select();

    const data: NodeData[] = rawData?.map(rawNode => {
        return {
            id: rawNode.id,
            children: rawNode.children,
            fatherName: rawNode.father_name,
            motherName: rawNode.mother_name
        }
    }) || [];
    return data
}
