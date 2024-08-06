import {
    GAS_STOCK_CREATE_REQUEST,
    GAS_STOCK_CREATE_SUCCESS,
    GAS_STOCK_CREATE_FAIL,
    GAS_STOCK_CREATE_RESET,
    GAS_STOCK_LIST_REQUEST,
    GAS_STOCK_LIST_SUCCESS,
    GAS_STOCK_LIST_FAIL,   
    GAS_STOCK_DETAILS_REQUEST,
    GAS_STOCK_DETAILS_SUCCESS,
    GAS_STOCK_DETAILS_FAIL,
    GAS_STOCK_UPDATE_REQUEST,
    GAS_STOCK_UPDATE_SUCCESS,
    GAS_STOCK_UPDATE_FAIL,
    GAS_STOCK_UPDATE_RESET   
  
  } from '../constants/gasStockConstants';
  
  export const gasStockCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case GAS_STOCK_CREATE_REQUEST:
        return { loading: true };
      case GAS_STOCK_CREATE_SUCCESS:
        return { loading: false, success: true, gasStock: action.payload };
      case GAS_STOCK_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case GAS_STOCK_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  //READ CUSTOMER OPERATION(Read-LIST)
  //same as fetching all the customers from the database
  export const gasStockListReducer = (state = { gasStocks: [] }, action) => {
    switch (action.type) {
      case GAS_STOCK_LIST_REQUEST:
        return { loading: true, gasStocks: [] };
      case GAS_STOCK_LIST_SUCCESS:
        return {
          loading: false,
          gasStocks: action.payload,
        };
      case GAS_STOCK_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  //READ CUSTOMER OPERATION(Read-DETAIL)
  //same as fetching all the customers from the database
  export const gasStockDetailsReducer = (state = { }, action) => {
    switch (action.type) {
      case GAS_STOCK_DETAILS_REQUEST:
        return { loading: true };
      case GAS_STOCK_DETAILS_SUCCESS:
        return {
          loading: false,
          gasStock: action.payload,
        };
      case GAS_STOCK_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const gasStockUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case GAS_STOCK_UPDATE_REQUEST:
        return { loading: true };
      case GAS_STOCK_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case GAS_STOCK_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case GAS_STOCK_UPDATE_RESET:
        return { customer: {} };
      default:
        return state;
    }
  }
  