import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getGasStockDetails } from './../actions/gasStockActions';

const GasStockDetailsScreen = ({ match }) => {
  const gasStockUuid = match.params.uuid;

  const dispatch = useDispatch();

  const gasStockDetails = useSelector((state) => state.gasStockDetails);
  const { loading, error, gasStock } = gasStockDetails;

  useEffect(() => {
    dispatch(getGasStockDetails(gasStockUuid));
  }, [dispatch, gasStockUuid]);

  return (
    <>
      <Link to="/gas-stocks-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left icon-space"></i>Go Back
      </Link>

      <div>
        {loading && <Loader />}
        {error && <Message>{error}</Message>}

        <Row>
          <div className="container col-xl-6">
            {gasStock && (
              <>
                <ListGroup>
                  <ListGroup.Item>
                    <h2>{gasStock.gasVariety.gasVarietyName} Stock Details</h2>
                    <p>
                      <strong className="strong-font-size">Gas Variety:</strong>
                      {gasStock.gasVariety.gasVarietyName}
                    </p>
                    <p>
                      <strong className="strong-font-size">Weight: </strong>
                      {gasStock.weight} <span>KG</span>
                    </p>
                    <p>
                      <strong className="strong-font-size">
                        Price/Cylinder:{' '}
                      </strong>
                      {gasStock.price}
                      <span>/=</span>
                    </p>
                    <p>
                      <strong className="strong-font-size">
                        Initital Stock Qty:{' '}
                      </strong>
                      {gasStock.countInStock}
                    </p>

                    <p>
                      <strong className="strong-font-size">
                        Remaining Stock Qty:{' '}
                      </strong>
                      <span style={{ width: '5rem' }}>
                        {gasStock.remainingInStock <= 5 ? (
                          <Message variant="danger">
                            {gasStock.remainingInStock}
                          </Message>
                        ) : (
                          <Message variant="success">
                            {gasStock.remainingInStock}
                          </Message>
                        )}
                      </span>
                    </p>

                    <p>
                      <strong className="strong-font-size">Comment: </strong>
                      {gasStock.comment}
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </>
            )}
          </div>
        </Row>
      </div>
    </>
  );
};

export default GasStockDetailsScreen;
