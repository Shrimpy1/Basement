import Icon from "@/components/iconography/Icon";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {useState} from "react";
import OutsideClickHandler from "@/components/util/OutsideClickHandler";
import {logout} from "@/app/database/auth";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

const SettingBar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <OutsideClickHandler onClickOutside={() => setShowNav(false)}>
            <button
                className={'p-3 hover:bg-neutral-300/50 active:bg-neutral-300/70 rounded-xl leading-none duration-300'}
                onClick={() => setShowNav(!showNav)}>
                <Icon icon={faCog} size={'lg'}/>
            </button>

            <div
                className={`
                    absolute right-0 flex w-32 bg-background top-full
                    ${!showNav && 'translate-x-[150%]'}
                    duration-300 ease-out
                `}>

                <button onClick={() => logout()} className={
                    `h-12 w-full px-4 
                    flex items-center
                    bg-contrast/10 hover:bg-contrast/30 active:bg-contrast/20 duration-100`}>
                    <div className={'flex items-center gap-4 text-danger'}>
                        <Icon size={'sm'} icon={faRightFromBracket}/>
                        <span>Logout</span>
                    </div>
                </button>
            </div>
        </OutsideClickHandler>
    );
};

export default SettingBar;
