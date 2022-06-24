import React from "react";
import { View, Text } from "react-native";

type HeaderProp = {
    title: string
};

const Header = (prop: HeaderProp) => {
    const { title } = prop;
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default Header;