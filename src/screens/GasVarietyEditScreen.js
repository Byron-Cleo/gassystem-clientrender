import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  getGasVarietyDetails,
  updateGasVariety,
} from './../actions/gasVarietyActions';
import { GAS_VARIETY_UPDATE_RESET } from './../constants/gasVarietyConstants';

const GasVarietyEditScreen = ({ match, history }) => {
  const gasVarietyUuiD = match.params.uuid;

  //Defining Component State
  const [gasVarietyName, setgasVarietyName] = useState('');

  const dispatch = useDispatch();

  const gasVarietyDetails = useSelector((state) => state.gasVarietyDetails);
  const { loading, error, gasVariety } = gasVarietyDetails;

  const gasVarietyUpdate = useSelector((state) => state.gasVarietyUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = gasVarietyUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: GAS_VARIETY_UPDATE_RESET });
      history.push('/gas-varieties-list');
    } else {
      if (!gasVariety || gasVariety.uuid !== gasVarietyUuiD) {
        dispatch(getGasVarietyDetails(gasVarietyUuiD));
      } else {
        setgasVarietyName(gasVariety.gasVarietyName);
      }
    }
  }, [dispatch, gasVarietyUuiD, gasVariety, successUpdate, history]);

  const submitGasVarietyEditHandler = (e) => {
    e.preventDefault();
    const updatedVariety = { uuid: gasVarietyUuiD, gasVarietyName };
    dispatch(updateGasVariety(updatedVariety));
  };

  return (
    <>
      <Link to="/gas-varieties-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
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
                  <div className="spur-card-title"> Update Gas Variety </div>
                </div>
                <div className="card-body ">
                  <Message variant="warning">
                    NOTE: Please Follow the Convenction Stated When Creating The
                    Gas Varieties For Sytem To WORK AS INTENDED.
                  </Message>
                  <Message variant="success">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        k gas AS:
                        <span className="badge badge-success badge-pill">
                          K Gas
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        total gas AS:
                        <span className="badge badge-danger badge-pill">
                          Total Gas
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        hass gas AS:
                        <span className="badge badge-warning badge-pill">
                          Hass Gas
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        oil libya gas AS:
                        <span className="badge badge-info badge-pill">
                          Oil Libya
                        </span>
                      </li>
                    </ul>
                  </Message>
                  <form onSubmit={submitGasVarietyEditHandler}>
                    <div className="form-group">
                      <label htmlFor="gasvariety">Gas Variety:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="gasvariety"
                        placeholder="Enter Gas Variety"
                        value={gasVarietyName}
                        onChange={(e) => {
                          setgasVarietyName(e.target.value);
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

export default GasVarietyEditScreen;
