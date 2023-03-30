import React from 'react';
import {ScrollView, Text, View, Modal, Button, Switch} from 'react-native';
import Routes from './src/Routes';

const App = () => {
  const onThumbColor = '#ff0000';
  const offThumbColor = '#00ff00';
  const [value, onValueChange] = React.useState(true);
  // return <Routes />;
  return (<Switch
    thumbColor={value ? onThumbColor : offThumbColor}
    value={value}
    onValueChange={(val: boolean) => {
      onValueChange(val);
    }}
  />);
};

export default App;
