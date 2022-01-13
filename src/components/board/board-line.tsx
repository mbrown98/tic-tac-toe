import { BoardResult } from "@utils";
import React from "react";
import { View, Text } from "react-native";

type BoardLineProps = {
    size: number;
    gameResult?: BoardResult | false;
};

export default function BoardLine({ size, gameResult }: BoardLineProps): React.ReactElement {
    return (
        <>
            {gameResult && gameResult.column && gameResult.direction === "V" && (
                <View>Vertical Line</View>
            )}

            {gameResult && gameResult.row && gameResult.direction === "H" && (
                <View>Horizontal Line</View>
            )}

            {gameResult && gameResult.diagonal && gameResult.direction === "D" && (
                <View>Diag Line</View>
            )}
        </>
    );
}
