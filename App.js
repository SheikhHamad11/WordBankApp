import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CircularSlider from './src/components/Testing';
import {Provider} from 'react-redux';
import store from './src/Redux_Configuration/store';
export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
        {/* <CircularSlider /> */}
      </Provider>
    </>
  );
}
