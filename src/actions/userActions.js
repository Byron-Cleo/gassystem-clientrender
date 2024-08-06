import axios from 'axios';
import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_UPDATE_CREDNTIALS_REQUEST,
  USER_UPDATE_CREDNTIALS_SUCCESS,
  USER_UPDATE_CREDNTIALS_FAIL,
  // USER_PASSWORD_UPDATE_REQUEST,
  // USER_PASSWORD_UPDATE_SUCCESS,
  // USER_PASSWORD_UPDATE_FAIL,
} from '../constants/userConstants';

//CREATE New User Registeration)(Create)
export const createUser = (user) => async (dispatch) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: USER_CREATE_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v1/users/addUser', user, config);
    // console.log('Getting data from Logged in user', data);

    //second request with data as response which is passed to the payload
    dispatch({
      type: USER_CREATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
export const listUsers = () => async (dispatch, getState) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    //configurations for the second backend request
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/v1/users', config);
    // console.log(data);
    const result = data.results;
    // console.log('Users now in Array', result); //This is now an array to be looped in the list screen

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ PRODUCT OPERATION(Read-DETAILS)
//Admin Functionality---HENCE NEEDS TO BE PROTECTED
export const getUserDetails = (uuid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    //This for Confirming if the user is logged in and also an admin
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/users/${uuid}`, config);
    console.log(data);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Admin Functionality---HENCE NEEDS TO BE PROTECTED
export const updateUserDetails = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    //Since this is a protected route, We pass the Authorization to confirm if the user is
    //logged in as the token is only present for logged in users
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.put(
      `/api/v1/users/${userInfo.user.uuid}`,
      user,
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: USER_UPDATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//A user getting their own Data: Profile
export const getMe = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    //This is how we get a logged in user in the system in the backend
    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('TTTTT', userInfo);
    //This for Confirming if the user is logged in and also an admin
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/v1/users/me', config);
    // console.log('QQQQQQ', data);

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//A user getting their own Data: Profile
export const updateMe = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_UPDATE_REQUEST,
    });

    //This is how we get a logged in user in the system in the backend
    const {
      userLogin: { userInfo },
    } = getState();

    //This for Confirming if the user is logged in and also an admin
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put('/api/v1/users/updateMe', user, config);
    // console.log(data);

    dispatch({
      type: USER_PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminEditUserCredentials =
  (user) => async (dispatch, getState) => {
    // console.log(user.userUuid)
    try {
      dispatch({
        type: USER_UPDATE_CREDNTIALS_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo);

      //configurations for the second backend request
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const data = await axios.put(
        `/api/v1/users/${user.userUuid}`,
        user,
        config
      );
      console.log(data);

      dispatch({
        type: USER_UPDATE_CREDNTIALS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_CREDNTIALS_FAIL,
        // payload: 'Error Occured',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
