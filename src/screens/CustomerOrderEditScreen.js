import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  customStyles,
  customTheme,
} from '../reactSelectCustoms/selectCustomSyles';
import {
  getCustomerOrderDetails,
  updateCustomerOrder,
} from '../actions/customerOrderActions';
import { listGasStock } from './../actions/gasStockActions';
import { listGasVarieties } from './../actions/gasVarietyActions';
import { listCustomers } from './../actions/customerActions';
import { CUSTOMER_ORDER_UPDATE_RESET } from '../constants/customerOrderConstants';

const CustomerOrderEditScreen = ({ history, match }) => {
  const customerOrderUuid = match.params.uuid;
  const dispatch = useDispatch();

  const [gasStockFK, setGasStockFK] = useState(null);
  // console.log('Gas Stock', gasStockFK);
  const [customerFK, setCustomerFK] = useState(null);
  // console.log('Customer', customerFK);
  const [quantity, setQuantity] = useState(1);
  // console.log('CURRENT Quantity', quantity);
  const [emptyGas, setEmptyGas] = useState('');
  // console.log('Empty Cylinder', emptyGas);
  const [emptyGasWeight, setEmptyGasWeight] = useState(null);
  // console.log('Empty Weight', emptyGasWeight);
  const [comment, setComment] = useState('');
  // const [inputError, setInputError] = useState(false);

  const customerOrderDetails = useSelector(
    (state) => state.customerOrderDetails
  );
  const { loading, error, customerOrder } = customerOrderDetails;

  const customerOrderUpdate = useSelector((state) => state.customerOrderUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = customerOrderUpdate;

  const customerList = useSelector((state) => state.customerList);
  const {
    loading: loadingCustomerList,
    error: errorCustomerList,
    customers,
  } = customerList;

  const gasStockList = useSelector((state) => state.gasStockList);
  const {
    loading: loadingStockList,
    error: errorStock,
    gasStocks,
  } = gasStockList;

  const gasVarietyList = useSelector((state) => state.gasVarietyList);
  const {
    loading: loadinggasVarietyList,
    error: errorGasVarietyList,
    gasVarieties,
  } = gasVarietyList;

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const customerOptions = customers.map((customer) => ({
    value: customer.id,
    label: `${customer.customerName} - ${customer.phoneNumber} - ${customer.apartment} - ${customer.houseNo}`,
  }));

  const gasStockOptions = gasStocks.map((gasStock) => {
    let currentInStock = 0;
    if (gasStock.remainingInStock === +0) {
      currentInStock = gasStock.countInStock;
    } else {
      currentInStock = gasStock.remainingInStock;
    }

    return {
      value: gasStock.id,
      label: `${gasStock.gasVariety.gasVarietyName} [RMN:${currentInStock}]-(${
        gasStock.weight
      }@${gasStock.price.toLocaleString(undefined, currencyOptions)})/=`,
    };
  });

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CUSTOMER_ORDER_UPDATE_RESET });
      history.push('/customers-orders-list');
    } else {
      if (!customerOrder || customerOrder.uuid !== customerOrderUuid) {
        //To fetch customer order details from the DB
        // dispatch(getCustomerOrderDetails(customerOrderUuid));
        dispatch(getCustomerOrderDetails(customerOrderUuid));
        // console.log('yeeeyyy no order details');
      } else {
        setCustomerFK(customerOrder.customerFK);
        setGasStockFK(customerOrder.gasStockFK);
        setQuantity(customerOrder.quantity);
        setEmptyGas(customerOrder.emptyGas);
        setEmptyGasWeight(customerOrder.emptyGasWeight);
        setComment(customerOrder.comment);
      }
    }
    //To fetch all customers from the DB
    dispatch(listCustomers());

    //To fetch all gas stocks from the DB
    dispatch(listGasStock());

    //To fetch all gasvarietis from the DB
    dispatch(listGasVarieties());
  }, [dispatch, customerOrderUuid, customerOrder, successUpdate, history]);

  const submitCustomerOrderEditHandler = (e) => {
    e.preventDefault();
    const updatedCustomerOrder = {
      uuid: customerOrderUuid,
      gasStockFK,
      customerFK,
      quantity,
      emptyGas,
      emptyGasWeight,
      comment,
    };
    dispatch(updateCustomerOrder(updatedCustomerOrder));
    window.location.reload();
  };

  let totalKGasOptions = null;
  let otherGasOptions = null;
  let otherGasObj = null;

  if (gasStockFK) {
    const gasStock = gasStocks.find((gasStock) => +gasStock.id === +gasStockFK);
    if (gasStock) {
      const { gasVarietyName } = gasStock;
      // console.log(gasVarietyName);

      if (gasVarietyName === 'Total Gas' || gasVarietyName === 'K Gas') {
        totalKGasOptions = gasVarieties.filter(
          (gasVariety) =>
            gasVariety.gasVarietyName === 'K Gas' ||
            gasVariety.gasVarietyName === 'Total Gas'
        );
        // console.log(totalKGasOptions);
      }

      if (gasVarietyName !== 'Total Gas' || gasVarietyName !== 'K Gas') {
        otherGasOptions = gasVarieties.filter(
          (gasVariety) =>
            gasVariety.gasVarietyName !== 'K Gas' &&
            gasVariety.gasVarietyName !== 'Total Gas'
        );
        // console.log(otherGasOptions);
        otherGasObj = otherGasOptions.find(
          (obj) => obj.gasVarietyName === gasVarietyName
        );
        // console.log('Exact gas Variety now', otherGasObj);
      }
    }
  }
  // };
  // console.log(otherGasOptions);

  return (
    <>
      <Link to="/customers-orders-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

      {loading && <Loader />}
      {loadinggasVarietyList && <Loader />}

      {error && <Message variant="danger">{error}</Message>}
      {errorGasVarietyList && (
        <Message variant="danger">{errorGasVarietyList}</Message>
      )}

      {loadingUpdate ? (
        <Loader />
      ) : errorUpdate ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="row">
            <div className="container col-xl-6">
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">Update Customer Order</div>
                </div>
                <div className="card-body ">
                  <form onSubmit={submitCustomerOrderEditHandler}>
                    <div className="form-group">
                      <label htmlFor="customer">Customer Name:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      {loadingCustomerList ? (
                        <Loader />
                      ) : errorCustomerList ? (
                        <Message variant="danger">{errorCustomerList}</Message>
                      ) : (
                        <Select
                          options={customerOptions}
                          className="form-control"
                          value={customerOptions.filter(function (option) {
                            return option.value === customerFK;
                          })}
                          onChange={(e) => {
                            setCustomerFK(e.value);
                          }}
                          isSearchable
                          name={customerOptions.label}
                          styles={customStyles}
                          theme={customTheme}
                          placeholder="Select Customer..."
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="gasStock">Gas Stock:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>

                      {loadingStockList ? (
                        <Loader />
                      ) : errorStock ? (
                        <Message variant="danger">{errorStock}</Message>
                      ) : (
                        <Select
                          options={gasStockOptions}
                          className="form-control"
                          value={gasStockOptions.filter(function (option) {
                            return option.value === gasStockFK;
                          })}
                          onChange={(e) => {
                            setGasStockFK(e.value);
                          }}
                          isSearchable
                          name={gasStockOptions.label}
                          styles={customStyles}
                          theme={customTheme}
                          placeholder="Select Gas Stock..."
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="quantity">Quantity Ordering:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter Number Of Cylinder Ordered"
                        value={+quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>

                    <fieldset className="my-fieldset">
                      <legend className="gas-legend">
                        Returned Cylinder Info:
                      </legend>
                      <div className="form-group">
                        <label htmlFor="gasStock">
                          Returned Empty Cyliner:
                        </label>
                        <i
                          className="fas fa-asterisk"
                          style={{ color: 'red', fontSize: '.5rem' }}
                        ></i>
                        {gasStockFK && totalKGasOptions ? (
                          <Row>
                            {totalKGasOptions.map((options) => (
                              <Col>
                                <input
                                  type="radio"
                                  className="icon-space"
                                  name={options.gasVarietyName}
                                  id={options.gasVarietyName}
                                  key={options.id}
                                  value={options.gasVarietyName}
                                  checked={emptyGas === options.gasVarietyName}
                                  onChange={(e) => {
                                    setEmptyGas(e.target.value);
                                  }}
                                />

                                <label htmlFor={options.gasVarietyName}>
                                  {options.gasVarietyName}
                                </label>
                              </Col>
                            ))}
                          </Row>
                        ) : otherGasObj ? (
                          <Row>
                            <Col>
                              <div className="form-group">
                                <input
                                  type="radio"
                                  className="icon-space"
                                  name={otherGasObj.gasVarietyName}
                                  id={otherGasObj.gasVarietyName}
                                  value={otherGasObj.gasVarietyName}
                                  checked={
                                    emptyGas === otherGasObj.gasVarietyName
                                  }
                                  onChange={(e) => {
                                    setEmptyGas(e.target.value);
                                  }}
                                />

                                <label htmlFor={otherGasObj.gasVarietyName}>
                                  {otherGasObj.gasVarietyName}
                                </label>
                              </div>
                            </Col>
                          </Row>
                        ) : (
                          <>
                            <p style={{ fontSize: '90%', color: 'orangered' }}>
                              Please Select Gas Stock Being Ordered....
                            </p>
                          </>
                        )}
                      </div>

                      <div className="form-group">
                        <label>Returned Empty Gas Cylinder Weight(KGs):</label>
                        <i
                          className="fas fa-asterisk"
                          style={{ color: 'red', fontSize: '.5rem' }}
                        ></i>
                        <Row>
                          <Col>
                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="3Kg"
                                value="3 Kg"
                                checked={emptyGasWeight === '3 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="3Kg">3 Kg</label>
                            </div>

                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="6Kg"
                                value="6 Kg"
                                checked={emptyGasWeight === '6 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="6Kg">6 Kg</label>
                            </div>

                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="13Kg"
                                value="13 Kg"
                                checked={emptyGasWeight === '13 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="13Kg">13 Kg</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="25Kg"
                                value="25 Kg"
                                checked={emptyGasWeight === '25 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="25Kg">25 Kg</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="35Kg"
                                value="35 Kg"
                                checked={emptyGasWeight === '35 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="35Kg">35 Kg</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="50Kg"
                                value="50 Kg"
                                checked={emptyGasWeight === '50 Kg'}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="50Kg">50 Kg</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="form-group">
                              <input
                                type="radio"
                                className="icon-space"
                                name="emptyGasCylinderWeight"
                                id="none"
                                value="none"
                                checked={emptyGasWeight === null}
                                onChange={(e) => {
                                  setEmptyGasWeight(e.target.value);
                                }}
                              />

                              <label htmlFor="none">None</label>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </fieldset>

                    <div className="form-group">
                      <label htmlFor="quantity">
                        Comment:
                        <i
                          className="fas fa-asterisk"
                          style={{ color: 'red', fontSize: '.5rem' }}
                        ></i>
                      </label>
                      <textarea
                        className="form-control"
                        id="comment"
                        placeholder="Enter Comment Regarding The Order"
                        rows={4}
                        cols={50}
                        value={comment}
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomerOrderEditScreen;
