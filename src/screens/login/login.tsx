import React, { useRef } from "react";
import { ScrollView, TextInput as NativeTextInput } from "react-native";
import { GradientBackground, TextInput } from "@components";
import styles from "./login.styles";

export default function Login(): React.ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
                <TextInput
                    ref={passwordRef}
                    returnKeyType="done"
                    placeholder="Password"
                    secureTextEntry
                />
            </ScrollView>
        </GradientBackground>
    );
}
