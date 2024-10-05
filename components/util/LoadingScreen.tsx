'use client'

import {useLoading} from "@/components/providers/LoadingProvider";
import Icon from "@/components/iconography/Icon";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

const LoadingScreen = () => {
    const {loading} = useLoading();

    return (
        <>
            {loading &&
                <div
                    className={'fixed flex items-center justify-center w-screen h-screen z-50 bg-neutral-500/5 top-0 left-0 backdrop-blur-sm'}>
                    <Icon size={'2xl'} icon={faSpinner} className={'animate-spin'}/>
                </div>
            }
        </>
    );
};

export default LoadingScreen;
