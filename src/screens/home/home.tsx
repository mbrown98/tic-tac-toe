import React, { ReactElement } from "react";
import { GradientBackground, Button } from "@components";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "@config/navigator";
import styles from "./home.styles";

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
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
                    <Button style={styles.button} title="Login" />
                    <Button style={styles.button} title="Settings" />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
