import AccountForm from './AccountForm'
import {createClient} from '@/database/supabase/server'

export default async function Account() {
    const supabase = createClient()

    const {
        data: {user},
    } = await supabase.auth.getUser()

    return (
        <AccountForm user={user}/>
    )
}
