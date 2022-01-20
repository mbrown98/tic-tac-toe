import React, {
    ReactNode,
    ReactElement,
    useState,
    useEffect,
    createContext,
    Dispatch,
    SetStateAction,
    useContext
} from "react";

type AuthContextType = {
    user: { [key: string]: any } | null;
    setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Auth must be used within an auth provider");
    return context;
}

const AuthProvider = (props: { children: React.ReactNode }): React.ReactElement => {
    const [user, setUser] = useState<{ [key: string]: any } | null>(null);
    return <AuthContext.Provider value={{ user, setUser }} {...props} />;
};

export { AuthProvider, useAuth };
