'use client'
import {useCallback, useEffect, useState} from 'react'
import {createClient} from '@/database/supabase/client'
import {type User} from '@supabase/supabase-js'
import Input from "@/components/input/Input";
import {Button} from "@nextui-org/button";

export default function AccountForm({user}: { user: User | null }) {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            const {data, error, status} = await supabase
                .from('profiles')
                .select(`full_name, username, avatar_url`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                console.log(error)
                throw error
            }

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            console.log('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
                                     fullname,
                                     username,
                                     avatar_url,
                                 }: {
        username: string | null
        fullname: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

            const {error} = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="form-widget flex flex-col gap-5">
            <Input
                label={'Email'}
                id={'email'}
                name={'email'}
                type={'email'}
                value={user?.email} isDisabled
            />

            <Input
                label={'Username'}
                id={'username'}
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={'Enter your username'}
            />

            <Input
                label={'Full Name'}
                id={'fullName'}
                value={fullname || ''}
                onChange={(e) => setFullname(e.target.value)}
                placeholder={'Enter your full name'}
            />

            <Button
                color={'primary'}
                onClick={() => updateProfile({fullname, username, avatar_url})}
                disabled={loading}
            >
                {loading ? 'Loading ...' : 'Update'}
            </Button>

            <form action="/auth/signout" method="post">
                <Button type="submit" variant={'ghost'} color={'danger'}>
                    Sign out
                </Button>
            </form>
        </div>
    )
}
