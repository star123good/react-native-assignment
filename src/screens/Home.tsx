import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import Header from "../components/Header";

const Home: FC<{navigation: any}> = ({navigation}) => {
    return (
        <ScrollView>
            <Header title="Home" navigation={navigation} />
            <Text style={{ padding: 30 }} >
                You can navigate to Drivers, Devices.
            </Text>
        </ScrollView>
    );
};

export default Home;