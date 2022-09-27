import React, {FC, useState} from 'react';
import {ScrollView, Text, View, Modal, Button} from 'react-native';
import Header from '../components/Header';

const Home: FC<{navigation: any}> = ({navigation}) => {
  const [open, setOpen] = useState(false);
  return (
    <ScrollView>
      <Header title="Home" navigation={navigation} />
      <Text style={{padding: 30}}>You can navigate to Drivers, Devices.</Text>
      <View
        style={{
          width: 300,
          margin: 10,
          borderWidth: 1,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 1,
        }}>
        <Text>Box</Text>
        <Button title="Open Modal" onPress={() => setOpen(true)} />
        <Button
          title="Disabled Button"
          onPress={() => console.log('disabled button is clicked.')}
          disabled={true}
        />
        <Modal visible={open} onRequestClose={() => setOpen(false)}>
          <View>
            <Text>Modal Body</Text>
            <Button title="Close Modal" onPress={() => setOpen(false)} />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Home;
