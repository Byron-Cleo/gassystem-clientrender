import {
  CUSTOMER_ORDER_CREATE_REQUEST,
  CUSTOMER_ORDER_CREATE_SUCCESS,
  CUSTOMER_ORDER_CREATE_FAIL,
  CUSTOMER_ORDER_CREATE_RESET,
  CUSTOMER_ORDER_LIST_REQUEST,
  CUSTOMER_ORDER_LIST_SUCCESS,
  CUSTOMER_ORDER_LIST_FAIL,
  CUSTOMER_ORDER_DETAILS_REQUEST,
  CUSTOMER_ORDER_DETAILS_SUCCESS,
  CUSTOMER_ORDER_DETAILS_FAIL,
  CUSTOMER_ORDER_UPDATE_REQUEST,
  CUSTOMER_ORDER_UPDATE_SUCCESS,
  CUSTOMER_ORDER_UPDATE_FAIL,
  CUSTOMER_ORDER_UPDATE_RESET,
  CUSTOMER_ORDER_DELIVER_REQUEST,
  CUSTOMER_ORDER_DELIVER_SUCCESS,
  CUSTOMER_ORDER_DELIVER_FAIL,
  CUSTOMER_ORDER_DELIVER_RESET,
  CUSTOMER_ORDER_PAID_REQUEST,
  CUSTOMER_ORDER_PAID_SUCCESS,
  CUSTOMER_ORDER_PAID_FAIL,
  CUSTOMER_ORDER_PAID_RESET,
} from '../constants/customerOrderConstants';

export const customerOrderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ORDER_CREATE_REQUEST:
      return { loading: true };
    case CUSTOMER_ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, customerOrder: action.payload };
    case CUSTOMER_ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//READ CUSTOMER OPERATION(Read-LIST)
//same as fetching all the customers from the database
export const customerOrderListReducer = (
  state = { customerOrders: [] },
  action
) => {
  switch (action.type) {   
    case CUSTOMER_ORDER_LIST_REQUEST:
      return { loading: true, customerOrders: [] };
    case CUSTOMER_ORDER_LIST_SUCCESS:
      return {
        loading: false,
        customerOrders: action.payload,
      };
    case CUSTOMER_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//READ CUSTOMER OPERATION(Read-DETAIL)
//same as fetching all the customers from the database
export const customerOrderDetailsReducer = (state = {}, action) => {
  switch (action.type) {   
    case CUSTOMER_ORDER_DETAILS_REQUEST:
      return { loading: true };
    case CUSTOMER_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        customerOrder: action.payload,
      };
    case CUSTOMER_ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const customerOrderUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ORDER_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_ORDER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_ORDER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ORDER_UPDATE_RESET:
      return { customerOrder: {} };
    default:
      return state;
  }
};

export const customerOrderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ORDER_DELIVER_REQUEST:
      return { loading: true };
    case CUSTOMER_ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CUSTOMER_ORDER_DELIVER_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};

export const customerOrderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ORDER_PAID_REQUEST:
      return { loading: true };
    case CUSTOMER_ORDER_PAID_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CUSTOMER_ORDER_PAID_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ORDER_PAID_RESET:
      return {};
    default:
      return state;
  }
};