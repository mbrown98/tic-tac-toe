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
import { useAuth } from "@contexts/auth-content";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({ DeliusUnicase_700Bold, DeliusUnicase_400Regular });
    const { setUser } = useAuth();
    const [authLoaded, setAuthLoaded] = useState(false);

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
    return fontLoaded && authLoaded ? <>{children}</> : <AppLoading />;
}
