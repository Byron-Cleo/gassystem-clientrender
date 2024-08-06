import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LayoutOne from './components/LayoutOne';
import LayoutTwo from './components/LayoutTwo';

import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileUpdateScreen from './screens/ProfileUpdateScreen';
import UserUpdatePasswordScreen from './screens/UserUpdatePasswordScreen';

import UserAddScreen from './screens/UserAddScreen';
import UserListScreen from './screens/UserListScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import UserEditScreen from './screens/UserEditScreen';

import GasVarietyCreateScreen from './screens/GasVarietyCreateScreen';
import GasVarietyListScreen from './screens/GasVarietyListScreen';
import GasVarietyDetailsScreen from './screens/GasVarietyDetailsScreen';
import GasVarietyEditScreen from './screens/GasVarietyEditScreen';   

import GasStockCreateScreen from './screens/GasStockCreateScreen';
import GasStockListScreen from './screens/GasStockListScreen';
import GasStockDetailsScreen from './screens/GasStockDetailsScreen';
import GasStockEditScreen from './screens/GasStockEditScreen';

import CustomerCreateScreen from './screens/CustomerCreateScreen';
import CustomeListScreen from './screens/CustomerListScreen';
import CustomerDetailsScreen from './screens/CustomerDetailsScreen';
import CustomerEditScreen from './screens/CustomerEditScreen';

import CustomerOrderCreateScreen from './screens/CustomerOrderCreateScreen';
import CustomerOrderListScreen from './screens/CustomerOrderListScreen';
import CustomerOrderDetailsScreen from './screens/CustomerOrderDetailsScreen';
import CustomerOrderEditScreen from './screens/CustomerOrderEditScreen';

import Top10CustomersDashboardScreen from './screens/Top10CustomersDashboardScreen';
import TopTen3KgCustomersListScreen from './screens/TopTen3KgCustomersListScreen';
import TopTen6KgCustomersListScreen from './screens/TopTen6KgCustomersListScreen';
import TopTen13KgCustomersListScreen from './screens/TopTen13KgCustomersListScreen';
import TopTen25KgCustomersListScreen from './screens/TopTen25KgCustomersListScreen';
import TopTen35KgCustomersListScreen from './screens/TopTen35KgCustomersListScreen';
import TopTen50KgCustomersListScreen from './screens/TopTen50KgCustomersListScreen';
import TopSoldGasListScreen from './screens/TopSoldGasListScreen';
import GasRefillDashboardScreen from './screens/GasRefillDashboardScreen';
import Gas3KgRefillListScreen from './screens/Gas3KgRefillListScreen';
import Gas6KgRefillListScreen from './screens/Gas6KgRefillListScreen';
import Gas13KgRefillListScreen from './screens/Gas13KgRefillListScreen';
import Gas25KgRefillListScreen from './screens/Gas25KgRefillListScreen';
import Gas35KgRefillListScreen from './screens/Gas35KgRefillListScreen';
import Gas50KgRefillListScreen from './screens/Gas50KgRefillListScreen';
import GasMonthlyRevenueDashboardScreen from './screens/GasMonthlyRevenueDashboardScreen';
import Gas3KgMonthRevenueListScreen from './screens/Gas3KgMonthRevenueListScreen';
import Gas6KgMonthRevenueListScreen from './screens/Gas6KgMonthRevenueListScreen';
import Gas13KgMonthRevenueListScreen from './screens/Gas13KgMonthRevenueListScreen';
import Gas25KgMonthRevenueListScreen from './screens/Gas25KgMonthRevenueListScreen';
import Gas35KgMonthRevenueListScreen from './screens/Gas35KgMonthRevenueListScreen';
import Gas50KgMonthRevenueListScreen from './screens/Gas50KgMonthRevenueListScreen';

function App() {
  return (
    <>
      <>
        <Router>
          <Switch>
            <Route
              path={[
                '/me',
                '/update-me',
                '/add-user',
                '/users-list',
                '/user/:uuid/details',
                '/user/:uuid/edit',
                '/add-gas-variety',
                '/update-my-password',
                '/gas-varieties-list',
                '/gas-variety/:uuid/details',
                '/gas-variety/:uuid/edit',
                '/add-gas-stock',
                '/gas-stocks-list',
                '/gas-stock/:uuid/details',
                '/gas-stock/:uuid/edit',
                '/add-customer',
                '/customers-list',
                '/customer/:uuid/details',
                '/customer/:uuid/edit',
                '/add-customer-order',
                '/customers-orders-list',
                '/customer-order/:uuid/details',
                '/customer-order/:uuid/edit',
                '/top-ten-customers-dashboard',
                '/top-ten-3kg-customers',
                '/top-ten-6kg-customers',
                '/top-ten-13kg-customers',
                '/top-ten-25kg-customers',
                '/top-ten-35kg-customers',
                '/top-ten-50kg-customers',
                '/top-sold-gas-analytics',
                '/gas-for-refill-dashboard',
                '/gas-for-3kg-refill',
                '/gas-for-6kg-refill',
                '/gas-for-13kg-refill',
                '/gas-for-25kg-refill',
                '/gas-for-35kg-refill',
                '/gas-for-50kg-refill',
                '/gas-monthly-revenue-dashboard',
                '/3kg-month-revenue',
                '/6kg-month-revenue',
                '/13kg-month-revenue',
                '/25kg-month-revenue',
                '/35kg-month-revenue',
                '/50kg-month-revenue',
                '/dashboard',
              ]}
            >
              <LayoutTwo>
                <Switch>
                  {/* SYSTEM USERS */}
                  <Route path="/me" component={ProfileScreen} />
                  <Route path="/update-me" component={ProfileUpdateScreen} />
                  <Route path="/add-user" component={UserAddScreen} />
                  <Route path="/users-list" component={UserListScreen} />
                  <Route
                    path="/update-my-password"
                    component={UserUpdatePasswordScreen}
                  />
                  <Route path="/users-list" component={UserListScreen} />
                  <Route
                    exact
                    path="/user/:uuid/details"
                    component={UserDetailScreen}
                  />
                  <Route path="/user/:uuid/edit" component={UserEditScreen} />

                  {/* SYSTEM USERS */}

                  {/* GAS VARIETY */}
                  <Route
                    exact
                    path="/add-gas-variety"
                    component={GasVarietyCreateScreen}
                  />
                  <Route
                    path="/gas-varieties-list"
                    component={GasVarietyListScreen}
                  />
                  <Route
                    exact
                    path="/gas-variety/:uuid/details"
                    component={GasVarietyDetailsScreen}
                  />
                  <Route
                    exacct
                    path="/gas-variety/:uuid/edit"
                    component={GasVarietyEditScreen}
                  />
                  {/* GAS VARIETY */}

                  {/* GAS STOCK */}
                  <Route
                    exact
                    path="/add-gas-stock"
                    component={GasStockCreateScreen}
                  />
                  <Route
                    path="/gas-stocks-list"
                    component={GasStockListScreen}
                  />
                  <Route
                    exact
                    path="/gas-stock/:uuid/details"
                    component={GasStockDetailsScreen}
                  />
                  <Route
                    path="/gas-stock/:uuid/edit"
                    component={GasStockEditScreen}
                  />
                  {/* GAS STOCK */}

                  {/* CUSTOMER */}
                  <Route
                    path="/add-customer"
                    component={CustomerCreateScreen}
                  />
                  <Route path="/customers-list" component={CustomeListScreen} />
                  <Route
                    exact
                    path="/customer/:uuid/details"
                    component={CustomerDetailsScreen}
                  />
                  <Route
                    exact
                    path="/customer/:uuid/edit"
                    component={CustomerEditScreen}
                  />
                  {/* CUSTOMER */}

                  {/* CUSTOMER ORDERS */}
                  <Route
                    path="/add-customer-order"
                    component={CustomerOrderCreateScreen}
                  />
                  <Route
                    path="/customers-orders-list"
                    component={CustomerOrderListScreen}
                  />
                  <Route
                    exact
                    path="/customer-order/:uuid/details"
                    component={CustomerOrderDetailsScreen}
                  />
                  <Route
                    exact
                    path="/customer-order/:uuid/edit"
                    component={CustomerOrderEditScreen}
                  />
                  {/* CUSTOMER ORDERS */}

                  {/* ANALYTICS */}
                  <Route
                    path="/top-ten-customers-dashboard"
                    component={Top10CustomersDashboardScreen}
                  />
                  {/* ////////// */}
                  <Route
                    path="/top-ten-3kg-customers"
                    component={TopTen3KgCustomersListScreen}
                  />
                  <Route
                    path="/top-ten-6kg-customers"
                    component={TopTen6KgCustomersListScreen}
                  />
                  <Route
                    path="/top-ten-13kg-customers"
                    component={TopTen13KgCustomersListScreen}
                  />
                  <Route
                    path="/top-ten-25kg-customers"
                    component={TopTen25KgCustomersListScreen}
                  />
                  <Route
                    path="/top-ten-35kg-customers"
                    component={TopTen35KgCustomersListScreen}
                  />
                  <Route
                    path="/top-ten-50kg-customers"
                    component={TopTen50KgCustomersListScreen}
                  />
                  {/* ////////// */}

                  <Route
                    path="/top-sold-gas-analytics"
                    component={TopSoldGasListScreen}
                  />
                  {/* ////////// */}
                  <Route
                    path="/gas-for-refill-dashboard"
                    component={GasRefillDashboardScreen}
                  />

                  <Route
                    path="/gas-for-3kg-refill"
                    component={Gas3KgRefillListScreen}
                  />
                  <Route
                    path="/gas-for-6kg-refill"
                    component={Gas6KgRefillListScreen}
                  />
                  <Route
                    path="/gas-for-13kg-refill"
                    component={Gas13KgRefillListScreen}
                  />
                  <Route
                    path="/gas-for-25kg-refill"
                    component={Gas25KgRefillListScreen}
                  />
                  <Route
                    path="/gas-for-35kg-refill"
                    component={Gas35KgRefillListScreen}
                  />
                  <Route
                    path="/gas-for-50kg-refill"
                    component={Gas50KgRefillListScreen}
                  />
                  {/* ////////// */}

                  <Route
                    path="/gas-monthly-revenue-dashboard"
                    component={GasMonthlyRevenueDashboardScreen}
                  />
                  <Route
                    path="/3kg-month-revenue"
                    component={Gas3KgMonthRevenueListScreen}
                  />
                  <Route
                    path="/6kg-month-revenue"
                    component={Gas6KgMonthRevenueListScreen}
                  />
                  <Route
                    path="/13kg-month-revenue"
                    component={Gas13KgMonthRevenueListScreen}
                  />
                  <Route
                    path="/25kg-month-revenue"
                    component={Gas25KgMonthRevenueListScreen}
                  />
                  <Route
                    path="/35kg-month-revenue"
                    component={Gas35KgMonthRevenueListScreen}
                  />
                  <Route
                    path="/50kg-month-revenue"
                    component={Gas50KgMonthRevenueListScreen}
                  />
                  <Route path="/dashboard" component={DashboardScreen} />
                  {/* ANALYTICS */}
                </Switch>
              </LayoutTwo>
            </Route>
            {/* Layout 1 is last because it is used for the root "/" and will be greedy */}
            <Route path={['/signup', '/']}>
              <LayoutOne>
                <Switch>
                  {/* <IndexRoute component={LoginScreen} /> */}
                  <Route path="/signup" component={SignUpScreen} />
                  <Route path="/" exact component={LoginScreen} />
                </Switch>
              </LayoutOne>
            </Route>
          </Switch>
        </Router>
      </>
    </>
  );
}

export default App;
