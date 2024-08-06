import React, { useEffect } from 'react';
// import date from 'date-and-time';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup, Col, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getCustomerOrderDetails } from './../actions/customerOrderActions';
import { updateToDeliveredOrder } from './../actions/customerOrderActions';
import { updateToPaidOrder } from './../actions/customerOrderActions';
import {
  CUSTOMER_ORDER_DELIVER_RESET,
  CUSTOMER_ORDER_PAID_RESET,
} from './../constants/customerOrderConstants';
const CustomerOrderDetailsScreen = ({ match }) => {
  const customerOrderUuid = match.params.uuid;
  const dispatch = useDispatch();

  //Getting the current logged in user
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //Getting the current logged in user

  const customerOrderDetails = useSelector(
    (state) => state.customerOrderDetails
  );
  const { loading, error, customerOrder } = customerOrderDetails;
  console.log(customerOrder);

  // const successPayDate = date.format(customerOrder.updatedAt, 'DD/MM/YYYY');
  // const successDeliveredDate = date.format(
  //   customerOrder.updatedAt,
  //   'DD/MM/YYYY'
  // );

  const customerOrderPay = useSelector((state) => state.customerOrderPay);
  const { loading: loadingPay, success: successPay } = customerOrderPay;

  const customerOrderDeliver = useSelector(
    (state) => state.customerOrderDeliver
  );
  const { loading: loadingDeliver, success: successDeliver } =
    customerOrderDeliver;

  useEffect(() => {
    dispatch(getCustomerOrderDetails(customerOrderUuid));

    if (successDeliver || successPay) {
      dispatch({ type: CUSTOMER_ORDER_DELIVER_RESET });
      dispatch({ type: CUSTOMER_ORDER_PAID_RESET });
      dispatch(getCustomerOrderDetails(customerOrderUuid));
    }
  }, [dispatch, customerOrderUuid, successDeliver, successPay]);

  const updateToPaidHandler = () => {
    // console.log('Pay handler');
    dispatch(updateToPaidOrder(customerOrder));
  };

  const updateToDeliveredHandler = () => {
    // console.log('Delivered handler');
    dispatch(updateToDeliveredOrder(customerOrder));
  };

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      <Link to="/customers-orders-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left icon-space"></i>All Customer Order
      </Link>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Row>
        <div className="container col-xl-6">
          {customerOrder && (
            <>
              <h5>Order Number: {customerOrder.uuid}</h5>
              <ListGroup>
                <ListGroup.Item>
                  <h2>Customer Details:</h2>
                  <p>
                    <strong className="strong-font-size">Name: </strong>
                    {customerOrder.customer.customerName}
                  </p>
                  <p>
                    <strong className="strong-font-size">Phone Number: </strong>
                    {customerOrder.customer.phoneNumber}
                  </p>
                  <p>
                    <strong className="strong-font-size">Email: </strong>
                    <a href={`mailto: ${customerOrder.customer.email}`}>
                      {customerOrder.customer.email}
                    </a>
                  </p>
                  <p>
                    <strong className="strong-font-size">Apartment: </strong>
                    {customerOrder.customer.apartment}
                  </p>
                  <p>
                    <strong className="strong-font-size">House Number: </strong>
                    {customerOrder.customer.houseNo}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Gas Ordered:</h2>

                  <p>
                    <strong className="strong-font-size">Gas Ordered: </strong>
                    <span>{customerOrder.gasStock.gasVarietyName}</span>
                  </p>

                  <p>
                    <strong className="strong-font-size">
                      Ordered Weight:{' '}
                    </strong>
                    <span>{customerOrder.gasStock.weight}</span>
                  </p>

                  <p>
                    <strong className="strong-font-size">
                      Cylinder Price(Ksh):{' '}
                    </strong>
                    {customerOrder.gasStock.price.toLocaleString(
                      undefined,
                      currencyOptions
                    )}
                    <span>/=</span>
                  </p>

                  <p>
                    <strong className="strong-font-size">
                      Number Of Gas Cylinders:{' '}
                    </strong>
                    {customerOrder.quantity}
                  </p>

                  <p>
                    <strong className="strong-font-size">
                      Total Amount(Ksh):{' '}
                    </strong>
                    {customerOrder.totalAmount.toLocaleString(
                      undefined,
                      currencyOptions
                    )}
                    <span>/=</span>
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Empty Cylinder Returned:</h2>

                  <p>
                    <strong className="strong-font-size">
                      Empty Cylinder Variety:{' '}
                    </strong>
                    <span>{customerOrder.emptyGas}</span>
                  </p>

                  <p>
                    <strong className="strong-font-size">
                      Empty Cylinder Weight:{' '}
                    </strong>
                    {customerOrder.emptyGasWeight}
                  </p>
                </ListGroup.Item>
                {userInfo.user && userInfo.user.role === 'admin' && (
                  <ListGroup.Item>
                    <h2>Delivery Status:</h2>
                    <Row>
                      <Col md={8}>
                        <p>
                          {customerOrder.isDelivered ? (
                            <Message variant="success">
                              Delivered on {customerOrder.updatedAt}
                            </Message>
                          ) : (
                            <Message variant="danger">Not Delivered</Message>
                          )}
                        </p>
                      </Col>
                      <Col md={4}>
                        {loadingDeliver && <Loader />}

                        <Button
                          onClick={updateToDeliveredHandler}
                          className="btn-block"
                          type="button"
                          disabled={customerOrder.isDelivered === true}
                        >
                          Mark As Delivered
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                {userInfo.user && userInfo.user.role === 'admin' && (
                  <ListGroup.Item>
                    <h2>Payment Status:</h2>
                    <Row>
                      <Col md={8}>
                        <p>
                          {customerOrder.isPaid ? (
                            <Message variant="success">
                              Paid on {customerOrder.updatedAt}
                            </Message>
                          ) : (
                            <Message variant="danger">Not Paid</Message>
                          )}
                        </p>
                      </Col>
                      <Col md={4}>
                        {loadingPay && <Loader />}
                        <Button
                          onClick={updateToPaidHandler}
                          className="btn-block"
                          type="button"
                          disabled={customerOrder.isPaid === true}
                        >
                          Mark As Paid
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <h2>Comment:</h2>
                  <p>{customerOrder.comment}</p>
                </ListGroup.Item>
              </ListGroup>
            </>
          )}
        </div>
      </Row>
    </>
  );
};

export default CustomerOrderDetailsScreen;
