/**
 * @format
 */

import 'reflect-metadata';
import {AppRegistry} from 'react-native';
import {RootComponent} from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootComponent);
