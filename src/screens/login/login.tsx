import React, { useRef, useState } from "react";
import { Alert, ScrollView, TextInput as NativeTextInput } from "react-native";
import { Auth } from "aws-amplify";
import { Button, GradientBackground, TextInput } from "@components";
import styles from "./login.styles";

export default function Login(): React.ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({ username: "test", password: "12345678" });

    const [loading, setLoading] = useState(false);

    const setFormInput = (key: keyof typeof form, value: string) => {
        setForm({ ...form, [key]: value });
    };

    // const signUp = async () => {
    //     try {
    //         const res = await Auth.signUp({
    //             username: "test",
    //             password: "12345678",
    //             attributes: { email: "test@example.com", name: "Test Test" }
    //         });
    //         console.log("res", res);
    //     } catch (error) {
    //         Alert.alert("Error!", error.message || "Error");
    //     }
    // };

    const login = async () => {
        setLoading(true);
        const { username, password } = form;
        try {
            const res = await Auth.signIn(username, password);
            console.log("res", res);
        } catch (error) {
            Alert.alert("Error!", error.message || "Error");
        }

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
                <Button loading={loading} title="Login" onPress={login} />
            </ScrollView>
        </GradientBackground>
    );
}
