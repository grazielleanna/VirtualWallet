import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

console.disableYellowBox = true;

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';

export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <Routes />
     </AuthProvider>
  </NavigationContainer>
  );
}