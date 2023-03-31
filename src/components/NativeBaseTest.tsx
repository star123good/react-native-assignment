import React from 'react';
import { NativeBaseProvider, Box, Slider } from "native-base";

const NativeBaseTest = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Slider
          minValue={0}
          maxValue={100}
          value={20}
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
