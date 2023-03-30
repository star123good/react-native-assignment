import React from 'react';
import {ScrollView, Text, View, Modal, Button, Switch} from 'react-native';
import Routes from './src/Routes';
import SliderTest from './src/components/SliderTest';

const App = () => {
  const onThumbColor = '#ff0000';
  const offThumbColor = '#00ff00';
  const [value, onValueChange] = React.useState(true);
  // return <Routes />;
  return (
    <SliderTest />
  );
};

export default App;
