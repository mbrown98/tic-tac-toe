import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BoardState } from "@utils";
import Text from "../text/text";

type BoardProps = {
    state: BoardState;
    size: number;
    onCellPressed?: (index: number) => void;
};

export default function Board({ state, size, onCellPressed }: BoardProps): React.ReactElement {
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
        </View>
    );
}
