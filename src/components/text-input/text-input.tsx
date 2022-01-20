import React from "react";
import {
    TextInput as NativeTextInput,
    TextInputProps as NativeTextInputProps,
    StyleSheet
} from "react-native";
import { colors } from "@utils";

export default function TextInput({ style, ...props }: NativeTextInputProps): React.ReactElement {
    return (
        <NativeTextInput placeholderTextColor="#5d5379" style={[styles.input, style]} {...props} />
    );
}

// STYLE_SHEET
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: colors.lightGreen,
        backgroundColor: colors.purple,
        padding: 10,
        color: colors.lightGreen,
        fontFamily: "DeliusUnicase_400Regular"
    }
});
