/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';

global.Buffer = global.Buffer || require('buffer').Buffer;

import ClientApp from './js/components/ClientApp';


AppRegistry.registerComponent('TarotApp', () => ClientApp);
