import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Devices from "./screens/Devices";
import Drivers from "./screens/Drivers";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Devices" component={Devices} />
                <Stack.Screen name="Drivers" component={Drivers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;