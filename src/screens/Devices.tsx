import React, { FC, useEffect, useState } from "react";
import { ScrollView, Text, View, NativeModules } from "react-native";
import Header from "../components/Header";
import ItemList from "../components/ItemList";

const Devices: FC<{navigation: string}> = ({navigation}) => {
    const [devices, setDevices] = useState([]);

    const getDevices = async() => {
        var result = await NativeModules.RNReaderModule.getDevices();
        var splitted = result.split(/\r?\n/);
        setDevices(splitted);
        return splitted;
    };

    useEffect(() => {
        getDevices();
    }, []);

    return (
        <ScrollView>
            <Header title="Devices" navigation={navigation} />
            <View style={{ padding: 30 }} >
                <ItemList data={devices} />
            </View>
        </ScrollView>
    );
};

export default Devices;