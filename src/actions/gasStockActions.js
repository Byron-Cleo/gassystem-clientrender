import axios from 'axios';
import {
  //NOte that these are actions which will be dispatched or fired in the action y using dispatch()
  GAS_STOCK_CREATE_REQUEST,
  GAS_STOCK_CREATE_SUCCESS,
  GAS_STOCK_CREATE_FAIL,
  GAS_STOCK_LIST_REQUEST,
  GAS_STOCK_LIST_SUCCESS,
  GAS_STOCK_LIST_FAIL,
  GAS_STOCK_DETAILS_REQUEST,
  GAS_STOCK_DETAILS_SUCCESS,
  GAS_STOCK_DETAILS_FAIL,
  GAS_STOCK_UPDATE_REQUEST,
  GAS_STOCK_UPDATE_SUCCESS,
  GAS_STOCK_UPDATE_FAIL,
} from '../constants/gasStockConstants';

//CREATE PRODUCT OPERATION)(Create)
export const createGasStock = (gasStock) => async (dispatch) => {
  try {
    dispatch({
      type: GAS_STOCK_CREATE_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${userInfo.token}`,
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.post('/api/v1/gasstocks', gasStock, config);

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: GAS_STOCK_CREATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_STOCK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
export const listGasStock = () => async (dispatch, getState) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: GAS_STOCK_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/v1/gasstocks');
    // console.log(data);
    const result = data.results;

    dispatch({
      type: GAS_STOCK_LIST_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GAS_STOCK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ PRODUCT OPERATION(Read-DETAILS)
export const getGasStockDetails = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: GAS_STOCK_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/gasstocks/${uuid}`);
    // console.log(data);

    dispatch({
      type: GAS_STOCK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_STOCK_DETAILS_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateGasStock = (gasStock) => async (dispatch) => {
  try {
    dispatch({
      type: GAS_STOCK_UPDATE_REQUEST,
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
      `/api/v1/gasstocks/${gasStock.uuid}`,
      gasStock,
      config
    );

    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: GAS_STOCK_UPDATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_STOCK_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
