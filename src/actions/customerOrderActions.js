import axios from 'axios';
import {
  //NOte that these are actions which will be dispatched or fired in the action y using dispatch()
  CUSTOMER_ORDER_CREATE_REQUEST,
  CUSTOMER_ORDER_CREATE_SUCCESS,
  CUSTOMER_ORDER_CREATE_FAIL,
  CUSTOMER_ORDER_LIST_REQUEST,
  CUSTOMER_ORDER_LIST_SUCCESS,
  CUSTOMER_ORDER_LIST_FAIL,
  CUSTOMER_ORDER_DETAILS_REQUEST,
  CUSTOMER_ORDER_DETAILS_SUCCESS,
  CUSTOMER_ORDER_DETAILS_FAIL,
  CUSTOMER_ORDER_UPDATE_REQUEST,
  CUSTOMER_ORDER_UPDATE_SUCCESS,
  CUSTOMER_ORDER_UPDATE_FAIL,
  CUSTOMER_ORDER_DELIVER_REQUEST,
  CUSTOMER_ORDER_DELIVER_SUCCESS,
  CUSTOMER_ORDER_DELIVER_FAIL,
  CUSTOMER_ORDER_PAID_REQUEST,
  CUSTOMER_ORDER_PAID_SUCCESS,
  CUSTOMER_ORDER_PAID_FAIL,
} from '../constants/customerOrderConstants';   

//CREATE PRODUCT OPERATION)(Create)
export const createCustomerOrder = (customerorder) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_ORDER_CREATE_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.post(
      '/api/v1/customerorders',
      customerorder,
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_ORDER_CREATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
export const listCustomerOrders = () => async (dispatch, getState) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: CUSTOMER_ORDER_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/v1/customerorders');
    // console.log(data);
    const result = data.results;
    // console.log('Customer Order Results now an Array', result); //This is now an array to be looped in the list screen

    dispatch({
      type: CUSTOMER_ORDER_LIST_SUCCESS,
      payload: result,
    });
  } catch (error) {  
    dispatch({
      type: CUSTOMER_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ PRODUCT OPERATION(Read-DETAILS)
export const getCustomerOrderDetails = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_ORDER_DETAILS_REQUEST,
    });

    const res = await axios.get(`/api/v1/customerorders/${uuid}`);
    const customerOrder = res.data;
    // console.log(customerOrder);

    dispatch({
      type: CUSTOMER_ORDER_DETAILS_SUCCESS,
      payload: customerOrder,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ORDER_DETAILS_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Update Operation(Update)
export const updateCustomerOrder = (customerOrder) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_ORDER_UPDATE_REQUEST,
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
      `/api/v1/customerorders/${customerOrder.uuid}`,
      customerOrder,
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_ORDER_UPDATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ORDER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Update Operation(Update)
export const updateToDeliveredOrder = (customerOrder) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_ORDER_DELIVER_REQUEST,
    });

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${userInfo.token}`,
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.put(
      `/api/v1/customerorders/${customerOrder.uuid}/deliver`,
      {},
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_ORDER_DELIVER_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Update Operation(Update)
export const updateToPaidOrder = (customerOrder) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_ORDER_PAID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.put(
      `/api/v1/customerorders/${customerOrder.uuid}/pay`,
      {},
      config
    );
    // console.log(data);

    //second request with data as response which is passed to the payload
    dispatch({
      type: CUSTOMER_ORDER_PAID_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ORDER_PAID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
