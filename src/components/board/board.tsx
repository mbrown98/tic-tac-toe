import React from "react";
import { View, Text } from "react-native";

type Cell = "x" | "o" | null;

type BoardProps = {
    state: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
    size: number;
};

export default function Board({ state, size }: BoardProps): React.ReactElement {
    return <View style={{ width: size, height: size, backgroundColor: "green" }}></View>;
}
