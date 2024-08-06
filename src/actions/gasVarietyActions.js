import axios from 'axios';
import {
  //NOte that these are actions which will be dispatched or fired in the action y using dispatch()
  GAS_VARIETY_CREATE_REQUEST,
  GAS_VARIETY_CREATE_SUCCESS,
  GAS_VARIETY_CREATE_FAIL,
  GAS_VARIETY_LIST_REQUEST,
  GAS_VARIETY_LIST_SUCCESS,
  GAS_VARIETY_LIST_FAIL,  
  GAS_VARIETY_DETAILS_REQUEST,
  GAS_VARIETY_DETAILS_SUCCESS,
  GAS_VARIETY_DETAILS_FAIL,
  GAS_VARIETY_UPDATE_REQUEST,
  GAS_VARIETY_UPDATE_SUCCESS,
  GAS_VARIETY_UPDATE_FAIL,
} from './../constants/gasVarietyConstants';

//CREATE PRODUCT OPERATION)(Create)
export const createGasVariety = (gasVariety) => async (dispatch) => {
  try {  
    dispatch({
      type: GAS_VARIETY_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.post(
      '/api/v1/gasvarieties',
      gasVariety,
      config
    );
    // console.log(data);
    const result = data.results;
    // console.log('Gas Variety Form Data', result); //This is now an array to be looped in the list screen
    // console.log(data);
    //second request with data as response which is passed to the payload
    dispatch({
      type: GAS_VARIETY_CREATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GAS_VARIETY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
export const listGasVarieties = () => async (dispatch, getState) => {
  try {
    //our first request to the backend to get the token
    dispatch({
      type: GAS_VARIETY_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/v1/gasvarieties');
    // console.log(data);
    const result = data.results;
    // console.log('Gas Variety Results now an Array', result); //This is now an array to be looped in the list screen

    dispatch({
      type: GAS_VARIETY_LIST_SUCCESS,
      payload: result,
    });
  } 
  catch (error) 
  {
    dispatch({
      type: GAS_VARIETY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ Gas Operation(Read-DETAILS)
export const getGasVarietyDetails = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: GAS_VARIETY_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/gasvarieties/${uuid}`);
    //  console.log(data);
    dispatch({
      type: GAS_VARIETY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_VARIETY_DETAILS_FAIL,
      // payload: 'Error Occured',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateGasVariety = (gasVariety) => async (dispatch) => {
  try {
    dispatch({
      type: GAS_VARIETY_UPDATE_REQUEST,
    });

    //configurations for the second backend request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //we are passing the an empty object but not sending any data
    const { data } = await axios.put(
      `/api/v1/gasvarieties/${gasVariety.uuid}`,
      gasVariety,
      config
    );
    // console.log(data);
    // console.log('Gas Variety Update', data); //This is now an array to be looped in the list screen

    //second request with data as response which is passed to the payload
    dispatch({
      type: GAS_VARIETY_UPDATE_SUCCESS,
      //this is data that we got by sending the post req. when logging in
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: GAS_VARIETY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//READ ORDER OPERATION(Read-LIST)
// export const listtotalKGasVarieties = () => async (dispatch, getState) => {
//   try {
//     //our first request to the backend to get the token
//     dispatch({
//       type: GAS_TOTALKGAS_LIST_REQUEST,
//     });

//     // const {
//     //   userLogin: { userInfo },
//     // } = getState();

//     //configurations for the second backend request
//     // const config = {
//     //   headers: {
//     //     Authorization: `Bearer ${userInfo.token}`,
//     //   },
//     // };

//     const { data } = await axios.get('/gassystem/api/v1/gasvarieties/totalkgas');
//     console.log(data);
//     const result = data;
//     // console.log('Gas Variety Results now an Array', result); //This is now an array to be looped in the list screen

//     dispatch({
//       type: GAS_TOTALKGAS_LIST_SUCCESS,
//       payload: result,
//     });
//   } catch (error) {
//     dispatch({
//       type: GAS_TOTALKGAS_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
