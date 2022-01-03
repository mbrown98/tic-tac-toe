import React, { ReactElement } from "react";
import { GradientBackground } from "@components";
import { View, Text, Button, ScrollView, Image } from "react-native";
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
            </ScrollView>
        </GradientBackground>
    );
}
