import {login, signup} from '@/app/database/auth'
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export default function LoginPage() {
    return (
        <form className={'flex flex-col gap-4'}>
            <label htmlFor={'email'}>Email:</label>
            <Input id={'email'} name={'email'} type={'email'} isRequired className={'text-black'}/>
            <label htmlFor={"password"}>Password:</label>
            <Input id={"password"} name={"password"} type={"password"} isRequired className={'text-black'}/>
            <Button formAction={login} type={'submit'}>Log in</Button>
            <Button formAction={signup} type={'submit'}>Sign up</Button>
        </form>
    )
}
