import axios from 'axios';
import {
  //NOte that these are actions which will be dispatched or fired in the action y using dispatch()
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
} from '../constants/customerConstants';

//CREATE PRODUCT OPERATION)(Create)
export const createCustomer = (customer) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    //configurations for the second backend request
    const config = {    
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${userInfo.token}`,
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.post('/api/v1/customers', customer, config);

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_CREATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
export const listCustomers = () => async (dispatch) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: CUSTOMER_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/v1/customers');
    // console.log(data);
    const result = data.results;
    // console.log('Results now an Array', result); //This is now an array to be looped in the list screen

    dispatch({
      type: CUSTOMER_LIST_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ PRODUCT OPERATION(Read-DETAILS)
export const getCustomerDetails = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_DETAILS_REQUEST,
    });

    const res = await axios.get(`/api/v1/customers/${uuid}`);
    const customer = res.data;
    // console.log(customer);

    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: customer,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_DETAILS_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCustomer = (customer) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_UPDATE_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${userInfo.token}`,
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.put(
      `/api/v1/customers/${customer.uuid}`,
      customer,
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_UPDATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
