import React, { forwardRef } from "react";
import {
    TextInput as NativeTextInput,
    TextInputProps as NativeTextInputProps,
    StyleSheet
} from "react-native";
import { colors } from "@utils";

const TextInput = forwardRef<NativeTextInput, NativeTextInputProps>(
    ({ style, ...props }: NativeTextInputProps, ref): React.ReactElement => {
        return (
            <NativeTextInput
                ref={ref}
                placeholderTextColor="#5d5379"
                style={[styles.input, style]}
                {...props}
            />
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;

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
