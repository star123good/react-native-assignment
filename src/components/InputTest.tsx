import React from 'react';
import {TextInput} from 'react-native';
import {NativeBaseProvider, View} from 'native-base';
import {Input} from 'native-base/src';

const InputTest = () => {
  return (
    <NativeBaseProvider>
      <View m={5}>
        <TextInput style={{color: '#ef4444', backgroundColor: '#ff00ff'}} />
        <Input color={'red.500'} backgroundColor={'amber.500'} />
      </View>
    </NativeBaseProvider>
  );
};

export default InputTest;
