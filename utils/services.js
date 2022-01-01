import axios from 'axios';

export const register = async (registrationData, navigation) => {
  try {
    const registrationDataJson = JSON.stringify(registrationData);
    console.log('Registration Data ', registrationDataJson);
    const res = await axios.post(
      'http://134.122.92.247:1336/auth/local/register',
      registrationData,
      // registrationDataJson,
    );

    navigation.navigation('Profile', {
      //user of any
    });
  } catch (error) {
    navigation.navigate('Profile');
    console.log(error);
  }
};

export const onGetUserProfile = async name => {
  try {
    const userProfileInfo = await axios.get(
      `http://134.122.92.247:1336/users/${name}`,
    );
    const data = await userProfileInfo.data;

    console.log('profile Info ', data);
    return {payload: data, type: 'success'};
  } catch (error) {
    console.log(error);
    return {type: 'error', payload: error.message};
  }
};
