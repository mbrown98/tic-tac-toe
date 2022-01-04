import React from "react";
import { SafeAreaView } from "react-native";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";
import { printFormattedBoard } from "@utils";
import { BoardState } from "@utils";

export default function Game(): React.ReactElement {
    const b: BoardState = ["x", "o", null, "x", "o", "x", "x", "o", null];
    printFormattedBoard(b);
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={b}
                    size={400}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
