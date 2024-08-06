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
import { getGasStockDetails, updateGasStock } from '../actions/gasStockActions';
import { listGasVarieties } from './../actions/gasVarietyActions';
import { GAS_STOCK_UPDATE_RESET } from '../constants/gasStockConstants';

const GasStockEditScreen = ({ history, match }) => {
  const gasStockUuid = match.params.uuid;
  //For triggering the action/ also know as action creators
  const dispatch = useDispatch();

  //Defining Component State
  const [gasVarietyFK, setGasVarietyFK] = useState(null);
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [comment, setComment] = useState('');

  const gasStockDetails = useSelector((state) => state.gasStockDetails);
  const { loading, error, gasStock } = gasStockDetails;

  const gasVarietyList = useSelector((state) => state.gasVarietyList);
  const {
    loading: loadingVarietyList,
    error: errorVarietyList,
    gasVarieties,
  } = gasVarietyList;

  const gasStockUpdate = useSelector((state) => state.gasStockUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = gasStockUpdate;

  let gasVaretyOptions = gasVarieties.map((gasVariety) => ({
    value: gasVariety.id,
    label: `${gasVariety.gasVarietyName}`,
  }));

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: GAS_STOCK_UPDATE_RESET });
      history.push('/gas-stocks-list');
    } else {
      if (!gasStock || gasStock.uuid !== gasStockUuid) {
        dispatch(getGasStockDetails(gasStockUuid));
      } else {
        setGasVarietyFK(gasStock.gasVarietyFK);
        setWeight(gasStock.weight);
        setPrice(gasStock.price);
        setCountInStock(gasStock.countInStock);
        setComment(gasStock.comment);
      }
    }

    //Action To Get All The Gas Varieties
    dispatch(listGasVarieties());
  }, [dispatch, gasStockUuid, gasStock, successUpdate, history]);

  const submitGasStockEditHandler = (e) => {
    e.preventDefault();
    const updatedGasStock = {
      uuid: gasStockUuid,
      gasVarietyFK,
      weight,
      price,
      countInStock,
      comment,
    };
    dispatch(updateGasStock(updatedGasStock));
  };
  return (
    <>
      <Link to="/gas-stocks-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <div className="row">
            <div className="container col-xl-6">
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">Update Gas Stock </div>
                </div>
                <div className="card-body ">
                  <form onSubmit={submitGasStockEditHandler}>
                    <div className="form-group">
                      <label>Gas Variety:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      {loadingVarietyList ? (
                        <Loader />
                      ) : errorVarietyList ? (
                        <Message variant="danger">{errorVarietyList}</Message>
                      ) : (
                        <Select
                          options={gasVaretyOptions}
                          className="form-control"
                          value={gasVaretyOptions.filter(function (option) {
                            return option.value === gasVarietyFK;
                          })}
                          onChange={(e) => {
                            setGasVarietyFK(e.value);
                          }}
                          isSearchable
                          name={gasVaretyOptions.label}
                          styles={customStyles}
                          theme={customTheme}
                          placeholder="Select Gas Variety..."
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="weight">Gas Weight(KGs):</label>
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
                              name="emptyGasCylinder"
                              id="3Kg"
                              value="3 Kg"
                              checked={weight === '3 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
                              }}
                            />

                            <label htmlFor="3Kg">3 Kg</label>
                          </div>

                          <div className="form-group">
                            <input
                              type="radio"
                              className="icon-space"
                              name="emptyGasCylinder"
                              id="6Kg"
                              value="6 Kg"
                              checked={weight === '6 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
                              }}
                            />

                            <label htmlFor="6Kg">6 Kg</label>
                          </div>

                          <div className="form-group">
                            <input
                              type="radio"
                              className="icon-space"
                              name="emptyGasCylinder"
                              id="13Kg"
                              value="13 Kg"
                              checked={weight === '13 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
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
                              name="emptyGasCylinder"
                              id="25Kg"
                              value="25 Kg"
                              checked={weight === '25 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
                              }}
                            />

                            <label htmlFor="25Kg">25 Kg</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              className="icon-space"
                              name="emptyGasCylinder"
                              id="35Kg"
                              value="35 Kg"
                              checked={weight === '35 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
                              }}
                            />

                            <label htmlFor="35Kg">35 Kg</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              className="icon-space"
                              name="emptyGasCylinder"
                              id="50Kg"
                              value="50 Kg"
                              checked={weight === '50 Kg'}
                              onChange={(e) => {
                                setWeight(e.target.value);
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
                              name="emptyGasCylinder"
                              id="none"
                              value="none"
                              checked={weight === null}
                              onChange={(e) => {
                                setWeight(e.target.value);
                              }}
                            />

                            <label htmlFor="none">None</label>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="form-group">
                      <label htmlFor="price">Price(Ksh):</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      <input
                        type="text"
                        className="form-control"
                        id="gasVariety"
                        placeholder="Enter Gas Price"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="countInStock">Count In Stock:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      <input
                        type="number"
                        className="form-control"
                        id="countInStock"
                        placeholder="Enter Gas Count In Stock"
                        value={countInStock}
                        onChange={(e) => {
                          setCountInStock(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="comment">Comment:</label>
                      <i
                        className="fas fa-asterisk"
                        style={{ color: 'red', fontSize: '.5rem' }}
                      ></i>
                      <textarea
                        className="form-control"
                        id="comment"
                        placeholder="Enter Comment Regarding The Gas In Stock"
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

export default GasStockEditScreen;
