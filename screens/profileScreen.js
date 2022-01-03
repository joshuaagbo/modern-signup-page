import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {onGetUserProfile} from '../utils/services';
import profileImage from '../assets/profile.jpg';

const bgColor = '#770AFE';
const color = '#fff';
const lightDark = '#555';
const dark = '#555';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation, route}) => {
  /*
======================
Profile State
======================
*/
  const [user, setUser] = useState(null);

  useEffect(() => {
    navigation.setOptions({headerTitle: 'Back'});
  });
  useEffect(() => {
    onProfileRequest();
  });

  const onProfileRequest = async () => {
    const profileRes = await onGetUserProfile(route.params?.email || null);
    //do somthing if respoonse type is error
    //e.g set ErrorState
    if (profileRes.type === 'error') {
      return Alert.alert(profileRes.payload);
    }

    //if Success, set user to current user info
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: color,
          minHeight: Dimensions.get('window').height,
        }}>
        <View
          style={{
            backgroundColor: bgColor,
            height: Dimensions.get('window').height / 2,
          }}>
          <View
            style={{
              backgroundColor: 'transparent',
              backgroundColor: bgColor,
              paddingLeft: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center', width: 45}}>
              <Ionicons name={'chevron-back-outline'} size={30} color={color} />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: '500',
                  color: color,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 23,
                color,
                fontWeight: 'bold',
              }}>
              Profile
            </Text>
          </View>
          <View
            style={{
              backgroundColor: color,
              width: 100,
              height: 100,
              borderRadius: 200,
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Image
              source={profileImage}
              style={{
                resizeMode: 'center',
                width: 90,
                height: 90,
                borderRadius: 200,
                position: 'absolute',
                bottom: 0,
                left: 5,
                zIndex: 1,
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                zIndex: 2,
                right: 0,
                bottom: 0,
                padding: 5,
                borderRadius: 50,
                backgroundColor: 'orange',
              }}>
              <Ionicons name={'camera-outline'} size={20} color={color} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            height: 500,
            marginTop: -120,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: color,
            width: '100%',
            paddingVertical: 40,
          }}>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, color: lightDark, fontWeight: '300'}}>
              Full Name
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: dark,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {user?.phone || 'Ola Adeboye'}
            </Text>
          </View>

          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, color: lightDark, fontWeight: '300'}}>
              Phone Number
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: dark,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {user?.phone || '09016612722'}
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, color: lightDark, fontWeight: '300'}}>
              Email Address
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: dark,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {user?.email || 'ola@gmail.com'}
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, color: lightDark, fontWeight: '300'}}>
              Date Of Birth
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: dark,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {user?.dateOfBirth || '3/4/86'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
