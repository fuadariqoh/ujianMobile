import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import authStack from './src/navigation/authStack';

const appinit = () => {
  return (
    <NavigationContainer>
      <authStack />
    </NavigationContainer>
  );
};

export default appinit;
