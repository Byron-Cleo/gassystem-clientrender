import {
    CUSTOMER_CREATE_REQUEST,
    CUSTOMER_CREATE_SUCCESS,
    CUSTOMER_CREATE_FAIL,
    CUSTOMER_CREATE_RESET,
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAIL,   
    CUSTOMER_DETAILS_REQUEST,
    CUSTOMER_DETAILS_SUCCESS,
    CUSTOMER_DETAILS_FAIL,
    CUSTOMER_UPDATE_REQUEST,
    CUSTOMER_UPDATE_SUCCESS,
    CUSTOMER_UPDATE_FAIL,
    CUSTOMER_UPDATE_RESET   
  
  } from '../constants/customerConstants';
  
  export const customerCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMER_CREATE_REQUEST:
        return { loading: true };
      case CUSTOMER_CREATE_SUCCESS:
        //TAKE NOTE HERE WE ARE NOT PASSING ANY PAYLOAD BECAUSE WE DID NOT RETURN ANYTHING FROM THE SERVER
        return { loading: false, success: true, customer: action.payload };
       case CUSTOMER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CUSTOMER_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };  
  
  //READ CUSTOMER OPERATION(Read-LIST)
  //same as fetching all the customers from the database
  export const customerListReducer = (state = { customers: [] }, action) => {
    switch (action.type) {
      case CUSTOMER_LIST_REQUEST:
        return { loading: true, customers: [] };
      case CUSTOMER_LIST_SUCCESS:
        return {
          loading: false,
          customers: action.payload,
        };
      case CUSTOMER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };  
  
  //READ CUSTOMER OPERATION(Read-DETAIL)
  //same as fetching all the customers from the database
  export const customerDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMER_DETAILS_REQUEST:
        return { loading: true };
      case CUSTOMER_DETAILS_SUCCESS:
        return {
          loading: false,
          customer: action.payload,
        };
      case CUSTOMER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const customerUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMER_UPDATE_REQUEST:
        return { loading: true };
      case CUSTOMER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case CUSTOMER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case CUSTOMER_UPDATE_RESET:
        return { customer: {} };
      default:
        return state;
    }
  }
  