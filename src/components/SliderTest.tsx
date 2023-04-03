import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Slider from "react-native-a11y-slider";
import {default as NSlider} from '@react-native-community/slider';
import {default as RNSlider} from "react-native-slider";

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
        accessibilityRole="adjustable"
        focusable
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
      <RNSlider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        accessibilityLabel={'React Native Slider'}
        focusable
      />
      <View
        style={{width: 200, height: 40}}
        accessibilityLabel={'React Native View'}
        accessibilityRole="adjustable"
        focusable
        accessible
        // accessibilityValue={{
        //   min: 1,
        //   max: 100,
        //   now: 20,
        //   text: `20`,
        // }}
        accessibilityHint={'20 percent'}
      />
      <View
        style={{width: 200, height: 40}}
        accessibilityElementsHidden={true}
        accessibilityLabel="Accessibility label"
        accessibilityRole="adjustable"
        accessibilityState={{ busy: false }}
        accessibilityValue={{ text: "20 percent" }}
        focusable={true}
        importantforAccessibility='no-hide-descendants'
        nativeId="native-id"
      />
    </View>
  );
};

export default SliderTest;
