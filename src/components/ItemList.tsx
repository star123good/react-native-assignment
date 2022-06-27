import React from "react";
import { Text, View } from "react-native";

type ItemListProp = {
    data: string[]
}
const ItemList = (prop: ItemListProp) => {
    const { data } = prop;
    return (
        <View>
            {
                data.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))
            }
        </View>
    );
}

export default ItemList;