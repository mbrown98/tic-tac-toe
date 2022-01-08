import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";
import { printFormattedBoard, isEmpty, isFull, getAvailableMoves, isTerminal } from "@utils";
import { BoardState, getBestMove } from "@utils";

export default function Game(): React.ReactElement {
    const b: BoardState = ["x", "o", null, "x", "o", "x", "x", "o", null];
    // prettier-ignore
    const [state, setState] = useState<BoardState>([
        null, 'x', null,
        'o', null, 'x',
        'o', 'o', 'x'
    ]);

    console.log("get best move", getBestMove(state, true));
    printFormattedBoard(b);

    const handleOnCellPressed = (cell: number): void => {
        const stateCopy: BoardState = [...state];
        if (stateCopy[cell] || isTerminal(stateCopy)) return;
        stateCopy[cell] = "x";
        setState(stateCopy);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    disabled={Boolean(isTerminal(state))}
                    onCellPressed={cell => {
                        handleOnCellPressed(cell);
                    }}
                    state={state}
                    size={400}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
