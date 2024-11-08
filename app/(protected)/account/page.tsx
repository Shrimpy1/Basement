import AccountForm from './AccountForm'
import {createClient} from '@/database/supabase/server'

export default async function Account() {
    const supabase = await createClient()

    const {
        data: {user},
    } = await supabase.auth.getUser()

    return (
        <AccountForm user={user}/>
    )
}
