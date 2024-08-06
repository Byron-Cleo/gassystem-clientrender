import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getCustomerDetails } from './../actions/customerActions';

const CustomerDetailsScreen = ({ match }) => {
  const customerUuid = match.params.uuid;

  const dispatch = useDispatch();

  const customerDetails = useSelector((state) => state.customerDetails);
  const { loading, error, customer } = customerDetails;

  useEffect(() => {
    dispatch(getCustomerDetails(customerUuid));
  }, [dispatch, customerUuid]);

  return (
    <>
      <Link to="/customers-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left icon-space"></i>Go Back
      </Link>
      <div>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Row>
          <div className="container col-xl-6">
            {customer && (
              <>
                <ListGroup>
                  <ListGroup.Item>
                    <h2>{customer.customerName} Details</h2>
                    <p>
                      <strong className="strong-font-size">
                        Customer Name:{' '}
                      </strong>
                      {customer.customerName}
                    </p>
                    <p>
                      <strong className="strong-font-size">
                        Customer Phone Number:{' '}
                      </strong>
                      {customer.phoneNumber}
                    </p>
                    <p>
                      <strong className="strong-font-size">Apartment: </strong>
                      {customer.apartment}
                    </p>

                    <p>
                      <strong className="strong-font-size">
                        House Number:{' '}
                      </strong>
                      {customer.houseNo}
                    </p>

                    {customer.alternateContactName ? (
                      <p>
                        <strong className="strong-font-size">
                          Cust. Alternate Contact Person:{' '}
                        </strong>
                        {customer.alternateContactName}
                      </p>
                    ) : (
                      <Message variant="success">
                        This Customer Doesn't have Alternate Contact Person.
                      </Message>
                    )}

                    {customer.alternateContactPhone ? (
                      <p>
                        <strong className="strong-font-size">
                          Cust. Alternate Contact Phone:{' '}
                        </strong>
                        {customer.alternateContactPhone}
                      </p>
                    ) : (
                      <Message variant="success">
                        This Customer Doesn't have Contacts for The Alternate
                        Person.
                      </Message>
                    )}
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

export default CustomerDetailsScreen;
