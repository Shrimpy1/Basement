import {ReactNode, RefObject, useEffect, useRef} from "react";

const useOutsideClickHandler = (ref: RefObject<any>, handler: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, handler]);
};

const OutsideClickHandler = ({children, onClickOutside}: {
    children: ReactNode,
    onClickOutside: () => void
}) => {
    const wrapperRef = useRef(null)
    useOutsideClickHandler(wrapperRef, onClickOutside)

    return <div ref={wrapperRef}>{children}</div>
}

export default OutsideClickHandler;
