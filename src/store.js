import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer,
  userRegisterReducer,
  myPasswordUpdateReducer,
} from './reducers/authReducers';

import {
  userCreateReducer,
  userListReducer,
  userUpdateReducer,
  userDetailsReducer,
  userProfileReducer,
  profileUpdateReducer,
  adminEditUserReducer,
} from './reducers/userReducers';

import {
  gasVarietyCreateReducer,
  gasVarietyListReducer,
  gasVarietyDetailsReducer,
  gasVarietyUpdateReducer,
  // totalKGasVarietyListReducer,
} from './reducers/gasVarietyReducers';

import {   
  gasStockCreateReducer,
  gasStockListReducer,
  gasStockDetailsReducer,
  gasStockUpdateReducer,
} from './reducers/gasStockReducers';

import {
  customerCreateReducer,
  customerListReducer,
  customerDetailsReducer,
  customerUpdateReducer,
} from './reducers/customerReducers';

import {
  customerOrderCreateReducer,
  customerOrderListReducer,
  customerOrderDetailsReducer,
  customerOrderUpdateReducer,
  customerOrderPayReducer,
  customerOrderDeliverReducer,
} from './reducers/customerOrderReducers';

import {
  topTen3KgCustomersListReducer,
  topTen6KgCustomersListReducer,
  topTen13KgCustomersListReducer,
  topTen25KgCustomersListReducer,
  topTen35KgCustomersListReducer,
  topTen50KgCustomersListReducer,
  topSoldGasListReducer,
  gasFor3KgRefillListReducer,
  gasFor6KgRefillListReducer,
  gasFor13KgRefillListReducer,
  gasFor25KgRefillListReducer,
  gasFor35KgRefillListReducer,
  gasFor50KgRefillListReducer,
  gas3KgMonthRevenueListReducer,
  gas6KgMonthRevenueListReducer,
  gas13KgMonthRevenueListReducer,
  gas25KgMonthRevenueListReducer,
  gas35KgMonthRevenueListReducer,
  gas50KgMonthRevenueListReducer,
} from './reducers/analyticsReducers';

const reducer = combineReducers({
  //Auth Reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  myPasswordUpdate: myPasswordUpdateReducer,

  //User Reducers
  userCreate: userCreateReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userProfile: userProfileReducer,
  profileUpdate: profileUpdateReducer,
  adminEditUser: adminEditUserReducer,

  //Gas Variety Reducers
  gasVarietyCreate: gasVarietyCreateReducer,
  gasVarietyList: gasVarietyListReducer,
  gasVarietyDetails: gasVarietyDetailsReducer,
  gasVarietyUpdate: gasVarietyUpdateReducer,
  // totalKGasVarietyList: totalKGasVarietyListReducer,

  //Gas Stocks Reducers
  gasStockCreate: gasStockCreateReducer,
  gasStockList: gasStockListReducer,
  gasStockDetails: gasStockDetailsReducer,
  gasStockUpdate: gasStockUpdateReducer,

  //Customer Reducers
  customerCreate: customerCreateReducer,
  customerList: customerListReducer,
  customerDetails: customerDetailsReducer,
  customerUpdate: customerUpdateReducer,

  //Customer Order Reducers
  customerOrderCreate: customerOrderCreateReducer,
  customerOrderList: customerOrderListReducer,
  customerOrderDetails: customerOrderDetailsReducer,
  customerOrderUpdate: customerOrderUpdateReducer,
  customerOrderPay: customerOrderPayReducer,
  customerOrderDeliver: customerOrderDeliverReducer,

  //Analytics Reducers
  topTen3KgCustomersList: topTen3KgCustomersListReducer,
  topTen6KgCustomersList: topTen6KgCustomersListReducer,
  topTen13KgCustomersList: topTen13KgCustomersListReducer,
  topTen25KgCustomersList: topTen25KgCustomersListReducer,
  topTen35KgCustomersList: topTen35KgCustomersListReducer,
  topTen50KgCustomersList: topTen50KgCustomersListReducer,
  topSoldGasList: topSoldGasListReducer,
  gasFor3KgRefillList: gasFor3KgRefillListReducer,
  gasFor6KgRefillList: gasFor6KgRefillListReducer,
  gasFor13KgRefillList: gasFor13KgRefillListReducer,
  gasFor25KgRefillList: gasFor25KgRefillListReducer,
  gasFor35KgRefillList: gasFor35KgRefillListReducer,
  gasFor50KgRefillList: gasFor50KgRefillListReducer,
  gas3KgMonthRevenueList: gas3KgMonthRevenueListReducer,
  gas6KgMonthRevenueList: gas6KgMonthRevenueListReducer,
  gas13KgMonthRevenueList: gas13KgMonthRevenueListReducer,
  gas25KgMonthRevenueList: gas25KgMonthRevenueListReducer,
  gas35KgMonthRevenueList: gas35KgMonthRevenueListReducer,
  gas50KgMonthRevenueList: gas50KgMonthRevenueListReducer,
});

//Now to load the Data from local storage initially as like when they were created
//during login, wthis line of code does exactly that!!
//The parse function actualy does the conversion from JSON to REAL JAVASCRIPT OBJECT
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

//This is setting the initial state of user's information.
//HENCE THE USER INFO WILL ALWAYS COME FROM THIS OBJECT IF IT IS THERE!! i.e from the local storage
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

//OUR MIDDLEWARE
const middleware = [thunk];  
 
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;     
