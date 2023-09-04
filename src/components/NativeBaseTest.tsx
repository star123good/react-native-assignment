import React, { useState } from 'react';
import { NativeBaseProvider, Box, Slider, Text, Button, Modal, Popover } from "native-base";

const NativeBaseTest = () => {
  const [open, setOpen] = useState(false);
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
        <Button onPress={() => setOpen(true)}>Open Modal</Button>
        {open && 
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Modal.Content>
            {/* <Modal.CloseButton /> */}
            <Modal.Body>
              <Button>First Button</Button>
              <Button onPress={() => setOpen(false)}>Close</Button>
              <Button>Third Button</Button>
            </Modal.Body>
          </Modal.Content>
        </Modal>}
        <Popover
        trigger={(triggerProps) => {
          return (
          <Button {...triggerProps}>Open Popover</Button>
          )
        }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Button>First Button</Button>
              <Button>Second Button</Button>
              <Button>Third Button</Button>
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </Box>
    </NativeBaseProvider>
  );
};

export default NativeBaseTest;
