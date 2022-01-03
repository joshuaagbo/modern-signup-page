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

import {userRegistration} from '../utils/services';

const bgColor = '#770AFE';
const lightDark = '#444';
const color = '#fff';

const RegisterScreen = ({navigation}) => {
  /*
  ==============================
Registration State
===============================
*/
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [code, setCode] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const registerUser = () => {
    const registrationData = {
      firstname,
      lastname,
      username,
      email,
      phone,
      password,
      confirmationToken: code || 'string',
      resetPasswordToken: 'string',
      provider: 'local',
      role: 1,
      confirmed: true,
      blocked: false,
    };

    userRegistration(registrationData, navigation);
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
            defaultValue={firstname}
            onChangeText={fName => setFirstname(fName)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              color: lightDark,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Last Name
          </Text>
          <TextInput
            defaultValue={lastname}
            onChangeText={lName => setLastname(lName)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              color: lightDark,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            User Name
          </Text>
          <TextInput
            defaultValue={username}
            onChangeText={uName => setUsername(uName)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              color: lightDark,
            }}
          />
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
            Phone Number
          </Text>
          <TextInput
            defaultValue={phone}
            onChangeText={number => setPhone(number)}
            style={{
              borderColor: bgColor,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 5,
              color: lightDark,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Code (Optional)
          </Text>
          <TextInput
            defaultValue={code}
            onChangeText={isCode => setCode(isCode)}
            style={{
              marginBottom: 10,
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              color: lightDark,
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 8, color: lightDark}}>
            Create Password
          </Text>
          <TextInput
            defaultValue={password}
            onChangeText={passwd => setPassword(passwd)}
            style={{
              marginBottom: 10,
              borderColor: bgColor,
              borderWidth: 1,
              borderRadius: 5,
              color: lightDark,
            }}
          />
          <TouchableOpacity
            onPress={registerUser}
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
                <Text
                  style={{color: bgColor}}
                  onPress={() => navigation.navigate('Login')}>
                  Log In
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
