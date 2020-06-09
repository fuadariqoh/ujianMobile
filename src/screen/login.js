import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Text, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {LoginClick, inputUsername} from '../redux/action';

const Login = ({navigation, Auth}) => {
  const [username, setusername] = useState('');

  return (
    <SafeAreaView style={style.loginContainer}>
      <Input
        placeholder="Username"
        onChangeText={text => inputUsername(text)}
      />

      <Button title="Login" onPress={navigation.navigate('Drawermain')} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

export default connect(
  mapStateToProps,
  {LoginClick, inputUsername},
)(Login);
