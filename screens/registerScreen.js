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

import {register} from '../utils/services';

const bgColor = '#770AFE';
const lightDark = '#444';
const color = '#fff';

const RegisterScreen = ({navigation}) => {
  /*
  ==============================
Registration State
===============================
*/
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [code, setCode] = useState(null);
  const [passwd, setPasswd] = useState(null);

  const onUserRegistered = async () => {
    const registrationData = {
      firstName: firstName,
      username: firstName,
      email: '',
      lastName,
      phone,
      password: passwd,
      confirmationToken: code,
      resetPasswordToken: '',
      provider: 'local',
      role: 1,
      confirm: true,
      block: false,
    };

    await register(registrationData, navigation);
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
            Create Your Account
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', color: lightDark}}>
            Support Everyday Nigerians
          </Text>
        </View>

        <View style={{padding: 20, paddingVertical: 20}}>
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            First Name
          </Text>
          <TextInput
            defaultValue={firstName}
            onChangeText={fName => setFirstName(fName)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Last Name
          </Text>
          <TextInput
            defaultValue={lastName}
            onChangeText={lName => setLastName(lName)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Phone Number
          </Text>
          <TextInput
            defaultValue={phone}
            onChangeText={phone => setPhone(phone)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 5,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Code (Optional)
          </Text>
          <TextInput
            defaultValue={code}
            onChangeText={code => setCode(code)}
            style={{
              marginBottom: 10,
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Create Password
          </Text>
          <TextInput
            defaultValue={passwd}
            onChangeText={passWd => setPasswd(passWd)}
            style={{
              marginBottom: 10,
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            onPress={() => onUserRegistered()}
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
                color: color,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
          </TouchableOpacity>

          <View style={{width: '80%', alignSelf: 'center', maginBottom: 20}}>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                marginTop: 10,
                color: lightDark,
              }}>
              By Clicking, you acknowledge and agree to{' '}
              <Text style={{textDecorationLine: 'underline'}}>
                Term of Usage & Privacy Polidy
              </Text>
            </Text>

            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: lightDark,
                  textAlign: 'center',
                }}>
                Already have an account?{' '}
                <Text style={{color: bgColor}}>Log In</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
