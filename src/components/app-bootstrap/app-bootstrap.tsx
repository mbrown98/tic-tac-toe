import React, {
    ReactNode,
    ReactElement,
    useState,
    useEffect,
    createContext,
    Dispatch,
    SetStateAction
} from "react";
import { View, Text } from "react-native";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import { Auth } from "aws-amplify";
import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
    children: ReactNode;
};

type AuthContextType = {
    user: { [key: string]: any } | null;
    setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({ DeliusUnicase_700Bold, DeliusUnicase_400Regular });
    const [authLoaded, setAuthLoaded] = useState(false);
    const [user, setUser] = useState<{ [key: string]: any } | null>(null);
    useEffect(() => {
        async function checkCurrentUser() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (error) {
                setUser(null);
            }
            setAuthLoaded(true);
        }
        checkCurrentUser();
    }, []);
    return fontLoaded && authLoaded ? (
        <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
    ) : (
        <AppLoading />
    );
}
