import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabHome from './bottomTab';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabHome" component={TabHome} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
}

export default Drawers;
