import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Slider from "react-native-a11y-slider";
import {default as NSlider} from '@react-native-community/slider';

const SliderTest = () => {
  return (
    <View>
      <Slider 
        min={1} 
        max={100} 
        values={[30]} 
        accessibilityLabel={'React Native a11y Slider'}
        accessibilityValue={{
          min: 1,
          max: 100,
          now: 20,
          text: `20`,
        }}
        focussable
        accessible
      />
      <NSlider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        accessibilityLabel={'React Native community Slider'}
      />
    </View>
  );
};

export default SliderTest;
