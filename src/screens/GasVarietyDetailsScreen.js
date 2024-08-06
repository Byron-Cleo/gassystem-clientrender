import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getGasVarietyDetails } from './../actions/gasVarietyActions';

const GasVarietyDetailsScreen = ({ match }) => {
  const gasVarietyID = match.params.uuid;

  const dispatch = useDispatch();

  const gasVarietyDetails = useSelector((state) => state.gasVarietyDetails);
  const { loading, error, gasVariety } = gasVarietyDetails;

  useEffect(() => {
    dispatch(getGasVarietyDetails(gasVarietyID));
  }, [dispatch, gasVarietyID]);

  return (
    <>
      <Link to="/gas-varieties-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left icon-space"></i>Go Back
      </Link>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Row>
        <div className="container col-xl-6">
          {gasVariety && (
            <>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{gasVariety.gasVarietyName} Details</h2>
                  <p>
                    <strong className="strong-font-size">Gas Name: </strong>
                    {gasVariety.gasVarietyName}
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </>
          )}
        </div>
      </Row>
    </>
  );
};

export default GasVarietyDetailsScreen;
