import {createContext, ReactNode} from "react";

const UserContext = createContext(null)

const UserProvider = ({children}: {
    children: ReactNode
}) => {
    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
