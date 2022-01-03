import React from "react";
import { Text, SafeAreaView } from "react-native";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";
export default function Game(): React.ReactElement {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={["x", "o", null, "x", "o", "x", "x", "o", null]}
                    size={400}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
