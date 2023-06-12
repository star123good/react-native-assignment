import React from 'react';
import { TextInput } from 'react-native';
import { NativeBaseProvider, View, Input } from "native-base";

const InputTest = () => {
  return (
    <NativeBaseProvider>
      <View 
        bg={'#ff0000'} 
        pl={'8px'} 
        pr={'8px'} 
      >
        <TextInput />
        <Input />
      </View>
    </NativeBaseProvider>
  );
};

export default TextTest;
