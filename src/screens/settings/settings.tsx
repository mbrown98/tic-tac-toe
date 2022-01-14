import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View, Switch } from "react-native";
import { GradientBackground, Text } from "@components";
import styles from "./settings.styles";
import { colors } from "@utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const difficulties = {
    "1": "Beginner",
    "2": "Intermediate",
    "3": "Hard",
    "-1": "Impossible"
};

type SettingsType = {
    difficulty: keyof typeof difficulties;
    haptics: boolean;
    sounds: boolean;
};

const defaultSettings: SettingsType = {
    difficulty: "-1",
    haptics: true,
    sounds: true
};

export default function Settings(): React.ReactElement | null {
    const [settings, setSettings] = useState<SettingsType | null>(null);

    const loadSettings = async () => {
        try {
            const settings = await AsyncStorage.getItem("@settings");
            settings !== null ? setSettings(JSON.parse(settings)) : setSettings(defaultSettings);
        } catch (error) {
            setSettings(defaultSettings);
        }
    };

    useEffect(() => {
        loadSettings();
    }, []);

    if (!settings) return null;

    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Bot Difficulty</Text>
                    <View style={styles.choices}>
                        {Object.keys(difficulties).map(level => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.choice,
                                        {
                                            backgroundColor:
                                                settings.difficulty === level
                                                    ? colors.lightPurple
                                                    : colors.lightGreen
                                        }
                                    ]}
                                    key={level}
                                >
                                    <Text
                                        style={[
                                            styles.choiceText,
                                            {
                                                color:
                                                    settings.difficulty === level
                                                        ? colors.lightGreen
                                                        : colors.darkPurple
                                            }
                                        ]}
                                    >
                                        {difficulties[level as keyof typeof difficulties]}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label}>Sounds</Text>
                    <Switch
                        trackColor={{ false: colors.purple, true: colors.lightPurple }}
                        thumbColor={colors.lightGreen}
                        ios_backgroundColor={colors.purple}
                        value={settings.sounds}
                        // onValueChange={() => setState(!state)}
                    />
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label}>Haptics/Vibrations</Text>
                    <Switch
                        trackColor={{ false: colors.purple, true: colors.lightPurple }}
                        thumbColor={colors.lightGreen}
                        ios_backgroundColor={colors.purple}
                        value={settings.haptics}
                        // onValueChange={() => setState(!state)}
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
