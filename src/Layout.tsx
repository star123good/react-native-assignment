import React from "react";
import Routes from "./Routes";
import Header from "./components/Header";
import { ScrollView } from "react-native";

const Layout = () => {
    return (
        <ScrollView>
            <Header title="Ok"/>
            <Routes />
        </ScrollView>
    );
}

export default Layout;