import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import Header from "../components/Header";

const Drivers: FC<{navigation: any}> = ({navigation}) => {
    return (
        <ScrollView>
            <Header title="Drivers" navigation={navigation} />
            <Text style={{ padding: 30 }} >
                Drivers
            </Text>
        </ScrollView>
    );
};

export default Drivers;