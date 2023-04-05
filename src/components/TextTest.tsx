import React from 'react';
import { Text } from 'react-native';
import { NativeBaseProvider, View } from "native-base";

const TextTest = () => {
  return (
    <NativeBaseProvider>
      <View 
        bg={'#ff0000'} 
        pl={'8px'} 
        pr={'8px'} 
      >
        <Text  
          style={{
            color: '#ffffff',
            // backgroundColor: 'transparent',
            backgroundColor: '#ff0000',
            fontSize: 30,
          }} 
        >
          Test String
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default TextTest;
