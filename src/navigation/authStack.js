import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login';
import Drawers from './drawer';
import Kucing from '../screen/kucing';
const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator initialRouteName="Drawermain">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Drawermain" component={Drawers} />
      <AuthStack.Screen name="Kucing" component={Kucing} />
    </AuthStack.Navigator>
  );
};
