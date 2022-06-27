import React, { FC, useState, useEffect } from "react";
import { ScrollView, View, NativeModules } from "react-native";
import Header from "../components/Header";
import ItemList from "../components/ItemList";

const Drivers: FC<{navigation: any}> = ({navigation}) => {
    const [devices, setDevices] = useState([]);

    const getDrivers = async() => {
        var result = await NativeModules.RNReaderModule.getDrivers();
        var splitted = result.split(/\r?\n/);
        setDevices(splitted);
        return splitted;
    };

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <ScrollView>
            <Header title="Drivers" navigation={navigation} />
            <View style={{ padding: 30 }} >
                <ItemList data={devices} />
            </View>
        </ScrollView>
    );
};

export default Drivers;