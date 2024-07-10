import {login, signup} from './action'

export default function LoginPage() {
    return (
        <form className={'flex flex-col'}>
            <label htmlFor={'email'}>Email:</label>
            <input id={'email'} name={'email'} type={'email'} required={true} className={'text-black'}/>
            <label htmlFor={"password"}>Password:</label>
            <input id={"password"} name={"password"} type={"password"} required={true} className={'text-black'}/>
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    )
}
