import React, { useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput } from "react-native";
import { Button, GradientBackground, TextInput } from "@components";
import styles from "./login.styles";

export default function Login(): React.ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({ username: "", password: "" });

    const [loading, setLoading] = useState(false);

    const setFormInput = (key: keyof typeof form, value: string) => {
        setForm({ ...form, [key]: value });
    };

    const login = () => {
        setLoading(true);

        setLoading(false);
    };

    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    value={form.username}
                    onChangeText={value => setFormInput("username", value)}
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
                <TextInput
                    value={form.password}
                    onChangeText={value => setFormInput("password", value)}
                    ref={passwordRef}
                    returnKeyType="done"
                    placeholder="Password"
                    secureTextEntry
                    style={{ marginBottom: 30 }}
                />
                <Button title="Login" onPress={login} />
            </ScrollView>
        </GradientBackground>
    );
}
