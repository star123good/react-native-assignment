import React, { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import ItemList from "../components/ItemList";

const Devices: FC<{navigation: string}> = ({navigation}) => {
    const samples = ['Device 1', 'Device 2', 'Device 3'];
    return (
        <ScrollView>
            <Header title="Devices" navigation={navigation} />
            <View style={{ padding: 30 }} >
                <Text>Devices</Text>
                <ItemList data={samples} />
            </View>
        </ScrollView>
    );
};

export default Devices;