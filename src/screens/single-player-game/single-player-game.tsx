import React from "react";
import { Text, SafeAreaView } from "react-native";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";

export default function Game(): React.ReactElement {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Text style={{ color: "white" }}>Game</Text>
            </SafeAreaView>
        </GradientBackground>
    );
}
