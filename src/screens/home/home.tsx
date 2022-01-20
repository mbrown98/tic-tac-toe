import React, { ReactElement } from "react";
import { GradientBackground, Button, Text } from "@components";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "@config/navigator";
import styles from "./home.styles";
import { useAuth } from "@contexts/auth-content";

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    const { user } = useAuth();
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require("@assets/xo.png")} style={styles.logo} />
                <View style={styles.buttons}>
                    <Button
                        style={styles.button}
                        onPress={() => navigation.navigate("SinglePlayerGame")}
                        title="Single Player"
                    />
                    <Button style={styles.button} title="Multiplayer" />
                    <Button
                        style={styles.button}
                        onPress={() => {
                            if (user) {
                            } else {
                                navigation.navigate("Login");
                            }
                        }}
                        title={user ? "Logout" : "Login"}
                    />
                    <Button
                        style={styles.button}
                        title="Settings"
                        onPress={() => navigation.navigate("Settings")}
                    />
                    {user && (
                        <Text weight="400" style={styles.loggedInText}>
                            Logged in as: <Text weight="700">{user.username}</Text>
                        </Text>
                    )}
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
