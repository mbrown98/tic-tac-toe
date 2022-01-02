import React, { ReactNode, ReactElement } from "react";
import { View, Text } from "react-native";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({ DeliusUnicase_700Bold, DeliusUnicase_400Regular });
    return fontLoaded ? <>{children}</> : <AppLoading />;
}
