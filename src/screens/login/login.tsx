import React from "react";
import { ScrollView } from "react-native";
import { GradientBackground, TextInput } from "@components";
import styles from "./login.styles";

export default function Login(): React.ReactElement {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                />
                <TextInput returnKeyType="done" placeholder="Password" secureTextEntry />
            </ScrollView>
        </GradientBackground>
    );
}
