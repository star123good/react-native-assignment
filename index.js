import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// To fix the Warning "background"
// LogBox.ignoreLogs(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);
