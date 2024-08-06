import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_PASSWORD_UPDATE_REQUEST,
  USER_PASSWORD_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_FAIL,
} from '../constants/authConstants';

//CREATE New User Registeration)(Create)
export const register = (user) => async (dispatch) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v1/users/register', user, config);
    // console.log('Getting data from Logged in user', data);

    //second request with data as response which is passed to the payload
    dispatch({
      type: USER_REGISTER_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });

    //This is to login the user right away when they Register:
    //But in my case it won't be the case as as the details are the sent to the user where they can login ans update
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //the user data is stored in the local storage to be fetched when it is there by default
    //even when the storage does not contain that data
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//POST OPERATION)(Login)
export const login = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.post('/api/v1/users/login', user, config);
    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: USER_LOGIN_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
    //VERY IMPORTANT CONCEPT HERE: storing the user data in the local storage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//LOGOT OPERATION
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  //   dispatch({ type: USER_DETAILS_RESET });
  //   dispatch({ type: ORDER_LIST_MY_RESET });
  //   dispatch({ type: USER_LIST_RESET });
};

//A user getting their own Data: Profile
export const updateMyPassword = (newPassword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PASSWORD_UPDATE_REQUEST,
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

    const { data } = await axios.patch(
      '/api/v1/users/updateMyPassword',
      newPassword,
      config
    );
    // console.log(data);

    dispatch({
      type: USER_PASSWORD_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_UPDATE_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
