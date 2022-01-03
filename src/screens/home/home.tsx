import React, { ReactElement } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./home.styles";
import { StackNavigatorParams } from "@config/navigator";

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Home</Text>
            <Button title="Game" onPress={() => navigation.navigate("Game", { gameId: "jhui" })} />
        </ScrollView>
    );
}
