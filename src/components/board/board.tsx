import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BoardState, BoardResult } from "@utils";
import BoardLine from "./board-line";
import Text from "../text/text";
import styles from "./board.styles";

type BoardProps = {
    state: BoardState;
    size: number;
    disabled?: boolean;
    gameResult?: BoardResult | false;
    onCellPressed?: (index: number) => void;
};

export default function Board({
    state,
    size,
    disabled,
    onCellPressed,
    gameResult
}: BoardProps): React.ReactElement {
    return (
        <View
            style={[
                styles.board,
                {
                    width: size,
                    height: size
                }
            ]}
        >
            {state.map((cell, i) => {
                return (
                    <TouchableOpacity
                        disabled={disabled || cell !== null}
                        onPress={() => onCellPressed && onCellPressed(i)}
                        key={i}
                        style={[styles.cell, styles[`cell${i}` as "cell"]]}
                    >
                        <Text style={[styles.cellText, { fontSize: size / 7 }]}>{cell}</Text>
                    </TouchableOpacity>
                );
            })}
            {gameResult && <BoardLine size={size} gameResult={gameResult} />}
        </View>
    );
}
