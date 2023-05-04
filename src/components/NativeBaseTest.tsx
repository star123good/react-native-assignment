import React from 'react';
import { NativeBaseProvider, Box, Slider, Text } from "native-base";

const NativeBaseTest = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>
          native-base Slider
        </Text>
        <Slider
          minValue={0}
          maxValue={100}
          // value={20}
          accessibilityRole="adjustable"
          accessibilityLabel="NativeBase Slider"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </NativeBaseProvider>
  );
};

export default NativeBaseTest;
