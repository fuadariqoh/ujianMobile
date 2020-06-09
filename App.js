/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './src/redux/reducer';
import thunk from 'redux-thunk';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import Kucing from './src/screen/kucing';
import BottomTabKucing from './src/navigation/bottomTab';

const store = createStore(Reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
        {/* <Kucing /> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
