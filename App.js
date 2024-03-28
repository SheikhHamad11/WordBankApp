import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import ContextProvider from './src/Context_Configuration/Main_Context';
export default function App() {
  return (
    <>
      <ContextProvider>
        <AppNavigator />
      </ContextProvider>
    </>
  );
}
