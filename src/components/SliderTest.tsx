import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Slider from "react-native-a11y-slider";
import {default as NSlider} from '@react-native-community/slider';
import {default as RNSlider} from "react-native-slider";

const SliderTest = () => {
  const handleSwipeForA11y = (event: AccessibilityActionEvent) => {
    switch (event.nativeEvent.actionName) {
      case "increment":
        // onA11ySwipeUp();
        console.log("increment");
        break;
      case "decrement":
        // onA11ySwipeDown();
        console.log("decrement");
    }
  };
  const handleAccessibilityActions = (event) => {
    switch (event.nativeEvent.actionName) {
      case 'increment':
        // setCounter(counter + 1);
        console.log("increment");
        break;
      case 'decrement':
        // setCounter(counter - 1);
        console.log("decrement");
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <Text>React Native a11y Slider</Text>
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
      <Text>React Native community Slider</Text>
      <NSlider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        accessibilityLabel={'React Native community Slider'}
      />
      <Text>React-Native-Slider</Text>
      <RNSlider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        accessibilityLabel={'React Native Slider'}
        focusable
        accessibilityRole="adjustable"
        accessibilityValue={{
          min: 1,
          max: 100,
          now: 20,
          text: `20`,
        }}
      />
      <RNSlider
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={"I am a slider"}
        accessibilityValue={{ min: 0, max: 100, now: 20 }}
        accessibilityActions={[{ name: "increment" }, { name: "decrement"}]}
        onAccessibilityAction={handleSwipeForA11y}
        testID={`testID-newSlider`}
        // step={step}
        // minimumValue={minValue}
        // maximumValue={maxValue}
        // onValueChange={onChange}
        // onSlidingComplete={onComplete}
        // value={value}
        // thumbTintColor={color}
        // minimumTrackTintColor={color}
        // thumbStyle={styles.thumb}
        // trackStyle={styles.track}
        focusable
      />
      <Text>React Native View with Slider Accessibility</Text>
      <View
        style={{width: 200, height: 40, borderColor: '#ff0000', borderWidth: 1}}
        accessibilityLabel={'React Native View'}
        accessibilityRole="adjustable"
        focusable
        accessible
        accessibilityValue={{
          min: 1,
          max: 100,
          now: 20,
          text: `20`,
        }}
        accessibilityHint={'20 percent'}
      />
      <View
        style={{width: 200, height: 40, borderColor: '#ff0000', borderWidth: 1}}
        accessibilityElementsHidden={true}
        accessibilityLabel="Accessibility label"
        accessibilityRole="adjustable"
        accessibilityState={{ busy: false }}
        accessibilityValue={{ text: "20 percent" }}
        focusable={true}
        importantforAccessibility='no-hide-descendants'
        nativeId="native-id"
      />
      {/* <View
        accessible
        importantForAccessibility="yes"
        accessibilityRole="menu"
        accessibilityLabel="Swiper"
        accessibilityActions={[
          { name: 'increment' },
          { name: 'decrement' },
        ]}
        accessibilityValue={{ text: '20' }}
        onAccessibilityAction={handleAccessibilityActions}
        focusable
      >
        <Text>slider</Text>
      </View> */}
    </View>
  );
};

export default SliderTest;
