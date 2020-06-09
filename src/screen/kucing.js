import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Axios from 'axios';
import {APIURL} from '../helper/APIURL';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from 'react-native-elements';

const HomeNavigator = createStackNavigator();

const Kucing = () => {
  const [kucing, setkucing] = useState([]);

  const getData = () => {
    Axios.get(`${APIURL}?limit=5&page=5&order=DESC`, {
      headers: {
        ['x-api-key']: 'ab07744a-1cb4-45cc-b945-099065e1b844',
      },
    })
      .then(res => {
        // console.log(res.data);
        setkucing(res.data);
        console.log(kucing);
        console.log('tes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderImage = () => {
    kucing.map((val, index) => {
      console.log(val.url, 'testkucing');
      return <Image source={val.url} />;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />

      <View>{renderImage()}</View>
    </View>
  );
};

export default Kucing;
