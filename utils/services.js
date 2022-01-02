import axios from 'axios';

//init registration
export const register = async (registrationData, navigation) => {
  try {
    const registrationDataJson = JSON.stringify(registrationData);

    const res = await axios.post(
      'http://134.122.92.247:1336/auth/local/register',
      registrationDataJson,
    );

    console.log('Response Data: ', res);
    navigation.navigate('Login');
  } catch (error) {
    navigation.navigate('Login');
    console.log(error);
  }
};

//init user login
export const onUserLogin = async (loginData, navigation) => {
  try {
    const loginJson = JSON.stringify(loginData);

    const loginRes = await axios.post(
      'http://134.122.92.247:1336/auth/local',
      loginJson,
    );

    console.log(loginRes);
    navigation.navigate('Profile', {email: loginData?.email});
  } catch (error) {
    console.log(error);
    navigation.navigate('Profile');
  }
};

//get user profile details
export const onGetUserProfile = async name => {
  try {
    const userProfileInfo = await axios.get(
      `http://134.122.92.247:1336/users/${name}`,
    );
    const data = userProfileInfo.data;

    return {payload: data, type: 'success'};
  } catch (error) {
    console.log(error);
    return {type: 'error', payload: error.message};
  }
};
