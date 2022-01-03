import axios from 'axios';

//init registration
export const userRegistration = (registrationData, navigation) => {
  const registrationDataJson = JSON.stringify(registrationData);
  console.log(registrationDataJson);

  axios
    .post(
      'http://134.122.92.247:1336/auth/local/register',
      registrationDataJson,
    )
    .then(registrationRes => {
      console.log(registrationRes);
      navigation.navigate('Login');
    })
    .catch(err => {
      console.log(err);
      navigation.navigate('Login');
    });
};

//init user login
export const userLogin = async (loginData, navigation) => {
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
