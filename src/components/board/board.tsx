import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BoardState, BoardResult } from "@utils";
import BoardLine from "./board-line";
import Text from "../text/text";

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
            style={{
                width: size,
                height: size,
                backgroundColor: "white",
                flexDirection: "row",
                flexWrap: "wrap"
            }}
        >
            {state.map((cell, i) => {
                return (
                    <TouchableOpacity
                        disabled={disabled || cell !== null}
                        onPress={() => onCellPressed && onCellPressed(i)}
                        key={i}
                        style={{
                            height: "33.33333%",
                            width: "33.33333%",
                            borderWidth: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={{ fontSize: size / 8 }}>{cell}</Text>
                    </TouchableOpacity>
                );
            })}
            {true && (
                <BoardLine
                    size={size}
                    gameResult={{ winner: "o", diagonal: "MAIN", direction: "D" }}
                />
            )}
        </View>
    );
}
