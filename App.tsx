import React from 'react';
import {ScrollView, Text, View, Modal, Button, Switch} from 'react-native';
import Slider from "react-native-a11y-slider";
import {default as NSlider} from '@react-native-community/slider';
import Routes from './src/Routes';

const App = () => {
  const onThumbColor = '#ff0000';
  const offThumbColor = '#00ff00';
  const [value, onValueChange] = React.useState(true);
  // return <Routes />;
  return (<Slider min={1} max={100} values={[20]} accessible />);
};

export default App;
