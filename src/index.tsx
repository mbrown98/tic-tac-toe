import React, { ReactElement } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, AppBootstrap } from "@components";
import Navigator from "@config/navigator";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <Navigator />
        </AppBootstrap>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
