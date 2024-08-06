import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { createGasVariety } from './../actions/gasVarietyActions';
import { GAS_VARIETY_CREATE_RESET } from './../constants/gasVarietyConstants';

const GasVarietyCreateScreen = ({ history }) => {
  //For triggering the action/ also know as action creators
  const dispatch = useDispatch();

  //Defining Component State
  const [gasVarietyName, setgasVarietyName] = useState('');

  const gasVarietyCreate = useSelector((state) => state.gasVarietyCreate);
  const { loading, success, error } = gasVarietyCreate;

  useEffect(() => {
    //if customer created successfully redirect to list page
    if (success) {
      dispatch({ type: GAS_VARIETY_CREATE_RESET });
      history.push('/gas-varieties-list');
    }
  }, [dispatch, success, history]);

  const gasVarietyCreateHandler = (e) => {
    e.preventDefault();
    const gasVariety = { gasVarietyName };
    dispatch(createGasVariety(gasVariety));
  };

  return (
    <>
      <Link to="/gas-varieties-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <>
        <div className="row">
          <div className="container col-xl-6">
            <div className="card spur-card">
              <div className="card-header">
                <div className="spur-card-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="spur-card-title"> Add A New Gas Variety </div>
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
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
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
                    </li> */}
                  </ul>
                </Message>
                <form onSubmit={gasVarietyCreateHandler}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Gas Variety:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="custname"
                      placeholder="Enter Gas Variety"
                      value={gasVarietyName}
                      onChange={(e) => {
                        setgasVarietyName(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add Gas Variety
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default GasVarietyCreateScreen;
