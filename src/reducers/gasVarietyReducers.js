import {
  GAS_VARIETY_CREATE_REQUEST,
  GAS_VARIETY_CREATE_SUCCESS,
  GAS_VARIETY_CREATE_FAIL,
  GAS_VARIETY_CREATE_RESET,
  GAS_VARIETY_LIST_REQUEST,
  GAS_VARIETY_LIST_SUCCESS,
  GAS_VARIETY_LIST_FAIL,
  GAS_VARIETY_DETAILS_REQUEST,
  GAS_VARIETY_DETAILS_SUCCESS,
  GAS_VARIETY_DETAILS_FAIL,
  GAS_VARIETY_UPDATE_REQUEST,
  GAS_VARIETY_UPDATE_SUCCESS,
  GAS_VARIETY_UPDATE_FAIL,
  GAS_VARIETY_UPDATE_RESET,
  // GAS_TOTALKGAS_LIST_REQUEST,
  // GAS_TOTALKGAS_LIST_SUCCESS,
  // GAS_TOTALKGAS_LIST_FAIL,
} from '../constants/gasVarietyConstants';

// GAS VARIETY
export const gasVarietyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case GAS_VARIETY_CREATE_REQUEST:
      return { loading: true };
    case GAS_VARIETY_CREATE_SUCCESS:
      return { loading: false, success: true, gasVariety: action.payload };
    case GAS_VARIETY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case GAS_VARIETY_CREATE_RESET:
      return {};
    default:
      return state;  
  }
};

//READ GAS VARIETY OPERATION(Read-LIST)
//same as fetching all the customers from the database
export const gasVarietyListReducer = (state = { gasVarieties: [] }, action) => {
  switch (action.type) {
    case GAS_VARIETY_LIST_REQUEST:
      return { loading: true, gasVarieties: [] };
    case GAS_VARIETY_LIST_SUCCESS:
      return {
        loading: false,
        gasVarieties: action.payload,
      };
    case GAS_VARIETY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//READ  GAS VARIETY OPERATION(Read-DETAIL)
//same as fetching all the customers from the database
export const gasVarietyDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GAS_VARIETY_DETAILS_REQUEST:
      return { loading: true };
    case GAS_VARIETY_DETAILS_SUCCESS:
      return {
        loading: false,
        gasVariety: action.payload,
      };
    case GAS_VARIETY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GAS VARIETY
export const gasVarietyUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case GAS_VARIETY_UPDATE_REQUEST:
      return { loading: true };
    case GAS_VARIETY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case GAS_VARIETY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case GAS_VARIETY_UPDATE_RESET:
      return { customer: {} };
    default:
      return state;
  }
};

//READ TOTALKGAS OPERATION(Read-LIST)
//same as fetching all the customers from the database
// export const totalKGasVarietyListReducer = (state = { totalKGasVarieties: [] }, action) => {
//   switch (action.type) {
//     case GAS_TOTALKGAS_LIST_REQUEST:
//       return { loading: true, totalKGasVarieties: [] };
//     case GAS_TOTALKGAS_LIST_SUCCESS:
//       return {
//         loading: false,
//         totalKGasVarieties: action.payload,
//       };
//     case GAS_TOTALKGAS_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
