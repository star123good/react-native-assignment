import React from "react";
import { View, Button, StyleSheet } from "react-native";

type HeaderProp = {
    title: string
    navigation: any
};

const Header = (prop: HeaderProp) => {
    const { title, navigation } = prop;
    return (
        <View style={style.layout} >
            {/* <View style={title === "Home" ? style.selected : null} >
                <Button title="Home" onPress={() => navigation.push('Home')} />
            </View> */}
            <View style={title === "Devices" ? style.selected : null} >
                <Button title="Devices" onPress={() => navigation.push('Devices')} />
            </View>
            <View style={title === "Drivers" ? style.selected : null} >
                <Button title="Drivers" onPress={() => navigation.push('Drivers')} />
            </View>
      </View>
    );
}

const style = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        padding: 10,
    },
    selected: {
        backgroundColor: '#ff0000',
    },
})

export default Header;