import Icon from "@/components/iconography/Icon";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {useState} from "react";
import OutsideClickWrapper from "@/components/util/OutsideClickWrapper";
import {logout} from "@/app/database/auth";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import Link from "@/components/link/Link";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const SettingBar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <OutsideClickWrapper onClickOutside={() => setShowNav(false)}>
            <button
                className={'p-3 hover:bg-neutral-300/50 active:bg-neutral-300/70 rounded-xl leading-none duration-300'}
                onClick={() => setShowNav(!showNav)}>
                <Icon icon={faCog} size={'lg'}/>
            </button>

            <div
                className={`
                    absolute right-0 flex flex-col w-32 bg-background top-full
                    ${!showNav && 'translate-x-[150%]'}
                    duration-300 ease-out
                `}>
                <Link
                    href={'/account'}
                    className={`h-12 w-full px-4 
                    flex items-center gap-4 
                    bg-contrast/10 hover:bg-contrast/30 active:bg-contrast/20 duration-100`
                    }
                >
                    <Icon size={'sm'} icon={faUser}/>
                    <span>Account</span>
                </Link>

                <Link onClick={() => logout()} className={
                    `h-12 w-full px-4 
                    flex items-center gap-4
                    bg-contrast/10 hover:bg-contrast/30 active:bg-contrast/20 duration-100`}
                      color={'danger'}>
                    <Icon size={'sm'} icon={faRightFromBracket}/>
                    <span>Logout</span>
                </Link>
            </div>
        </OutsideClickWrapper>
    );
};

export default SettingBar;
