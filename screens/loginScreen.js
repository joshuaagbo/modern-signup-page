import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {onUserLogin} from '../utils/services';

const bgColor = '#770AFE';
const lightDark = '#444';
const color = '#fff';

const LoginScreen = ({navigation}) => {
  /*
****************************************
    Login State
****************************************
*/
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const userLogin = async () => {
    const loginData = {
      email,
      password,
    };

    await onUserLogin(loginData, navigation);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={color} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: color,
          minHeight: Dimensions.get('window').height,
        }}>
        <View style={{paddingLeft: 20, paddingVertical: 20}}>
          <Text style={{fontSize: 23, fontWeight: 'bold', color: lightDark}}>
            Welcome Back!
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', color: lightDark}}>
            Login
          </Text>
        </View>

        <View style={{padding: 20, paddingVertical: 20}}>
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Email
          </Text>
          <TextInput
            defaultValue={email}
            onChangeText={mail => setEmail(mail)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              color: lightDark,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Password
          </Text>
          <TextInput
            defaultValue={password}
            onChangeText={passwd => setPassword(passwd)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              color: lightDark,
            }}
          />
          <TouchableOpacity
            onPress={userLogin}
            style={{
              alignSelf: 'center',
              width: '100%',
              marginTop: 10,
              backgroundColor: bgColor,
              padding: 20,
              width: 200,
              borderRadius: 8,
              width: Dimensions.get('window').width - 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
