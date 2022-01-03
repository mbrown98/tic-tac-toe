import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Home, Game } from "@screens";

const Stack = createNativeStackNavigator();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
