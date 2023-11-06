import React, {useRef, useState} from 'react';
import {Text} from 'react-native';
import {Button, Divider, HStack, Modal, NativeBaseProvider, Row, VStack, View} from 'native-base';

const ModalTest = () => {
  const initialFocusModalRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setOpen] = useState(false);
  const openModal = (): void => {
    setOpen(true);
  };
  return (
    <NativeBaseProvider>
      <View>
        <Button
          accessibilityLabel={'Open Modal'}
          testID={`button`}
          onPress={() => openModal()}
        >
          Open Modal
        </Button>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setOpen(false)}
            testID={`profileModal`}
            _backdrop={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            bg="transparent"
            initialFocusRef={initialFocusModalRef}
          >
            <Modal.Content maxWidth="365" maxH="215" top="-80" testID={`modalContent`}>
              <Modal.Header testID={`modalHeader`}>
                Modal Header
              </Modal.Header>
              <Modal.Body testID={`modalBody`}>
                <VStack space={1} justifyContent={'flex-start'}>
                  <HStack space={3}>
                    <Row
                      ref={initialFocusModalRef}
                      focusable
                      accessible
                      accessibilityLabel={'infoKey third'}
                      accessibilityRole="text"
                    >
                      <Text padding="3px">
                        infoKey third
                      </Text>
                    </Row>
                  </HStack>
                  <Divider />
                </VStack>
                <VStack space={1} justifyContent={'flex-start'}>
                  <HStack space={3}>
                    <Row
                      focusable
                      accessible
                      accessibilityLabel={'Focused Text'}
                      accessibilityRole="text"
                    >
                      <Text padding="3px">
                        Focused Text
                      </Text>
                    </Row>
                  </HStack>
                  <Divider />
                </VStack>
              </Modal.Body>
              <Modal.Footer >
                <Button.Group space={2}>
                  <Button
                    accessibilityLabel={'Button inside'}
                    testID={`notSaveButton`}
                    variant="ghost"
                    onPress={() => {
                      setOpen(false);
                    }}
                  >
                    Button inside
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ModalTest;
