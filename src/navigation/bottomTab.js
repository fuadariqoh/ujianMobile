import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Kucing from '../screen/kucing';
const bottomTabKucing = createBottomTabNavigator();

export default () => {
  return (
    <bottomTabKucing.Navigator>
      <bottomTabKucing.Screen name="Home" component={Kucing} />
      {/* <bottomTabKucing.Screen name="Profile" /> */}
    </bottomTabKucing.Navigator>
  );
};
