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

//REGISTER OPERATION
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {   
    case USER_REGISTER_REQUEST:
      return { loading: true };   
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};  

//LOGIN OPERATION
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { logoutsuccess: true };
    default:
      return state;
  }
};

export const myPasswordUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASSWORD_UPDATE_REQUEST:
      return { loading: true };
    case USER_PASSWORD_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_PASSWORD_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
