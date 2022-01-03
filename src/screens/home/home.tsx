import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./home.styles";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Game" onPress={() => navigation.navigate("Game")} />
        </View>
    );
}
