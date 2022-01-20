import React, { ReactElement } from "react";
import { StyleSheet, View, Image } from "react-native";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { Text, AppBootstrap } from "@components";
import Navigator from "@config/navigator";
import { SettingsProvider } from "@contexts/settings-content";
import { AuthProvider } from "@contexts/auth-content";

Amplify.configure(config);

export default function App(): ReactElement {
    return (
        <AuthProvider>
            <AppBootstrap>
                <SettingsProvider>
                    <Navigator />
                </SettingsProvider>
            </AppBootstrap>
        </AuthProvider>
    );
}
