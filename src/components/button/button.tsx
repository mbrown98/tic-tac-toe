import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { Text } from "@components";
import styles from "./button.styles";

type ButtonProps = {
    title: string;
    loading: boolean;
} & TouchableOpacityProps;

export default function Button({
    title,
    loading,
    style,
    ...props
}: ButtonProps): React.ReactElement {
    return (
        <TouchableOpacity disabled={loading} {...props} style={[styles.button, style]}>
            {loading ? (
                <ActivityIndicator color="black" />
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}
