import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}
