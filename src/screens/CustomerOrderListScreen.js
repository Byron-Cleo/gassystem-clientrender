import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listCustomerOrders } from './../actions/customerOrderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CustomerOrderListScreen = () => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const customerOrderList = useSelector((state) => state.customerOrderList);
  const { loading, error, customerOrders } = customerOrderList;
  console.log(customerOrders);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listCustomerOrders());
  }, [dispatch]);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>All Customer Orders</h1>
        </Col>

        <Col className="text-right">
          <LinkContainer to="/add-customer-order">
            <Button variant="info" className="my-3">
              <i className="fas fa-plus icon-space"></i>
              Add New Customer Order
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        {/* {customerOrders && customerOrders.length > 0 && ( */}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-heading">View Order Details</th>
              <th className="table-heading">ID:</th>
              <th className="table-heading">Gas Stock Ordered:</th>
              <th className="table-heading">Customer:</th>
              <th className="table-heading">Ordered Quantity:</th>
              <th className="table-heading">Remaining In Stock:</th>
              <th className="table-heading">Initial In Stock:</th>
              <th className="table-heading">Returned Gas Variety:</th>
              <th className="table-heading">Returned Empty Gas Weight:</th>
              <th className="table-heading">Total Amnt.(Ksh.):</th>
              {/* <th className="table-heading">Comment:</th> */}
              <th className="table-heading">Is Paid:</th>
              <th className="table-heading">Is Deli.:</th>
              <th className="table-heading">Order Created By:</th>
              <th className="table-heading">Order Date:</th>
              <th className="table-heading">Edit Action</th>
              {userInfo.user && userInfo.user.role === 'admin' && (
                <th className="table-heading">Delete Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {customerOrders === undefined && !loading ? (
              <h3 className="text-center">No Customer Order Added Yet</h3>
            ) : (
              customerOrders.map((customerOrder) => (
                <tr key={customerOrder.id}>
                  <td>
                    <LinkContainer
                      to={`/customer-order/${customerOrder.uuid}/details`}
                    >
                      <Button variant="outline-success" className="btn-sm">
                        <i className="fas fa-list icon-space"></i>
                        Order Details
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>{customerOrder.id}</td>
                  <td>{`${customerOrder.gasStock.gasVarietyName}(${
                    customerOrder.gasStock.price.toLocaleString(
                      undefined,
                      currencyOptions
                    ) + '/='
                  }) of ${customerOrder.gasStock.weight}`}</td>
                  <td>{customerOrder.customer.customerName}</td>
                  <td>{customerOrder.quantity}</td>
                  <td>{customerOrder.gasStock.remainingInStock}</td>
                  <td>{customerOrder.gasStock.countInStock}</td>
                  <td>{customerOrder.emptyGas}</td>
                  <td>{customerOrder.emptyGasWeight}</td>
                  <td>
                    {customerOrder.totalAmount.toLocaleString(
                      undefined,
                      currencyOptions
                    ) + '/='}
                  </td>
                  {/* <td>{customerOrder.comment}</td> */}
                  <td>
                    {customerOrder.isPaid ? (
                      <i
                        className="fas fa-check"
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {customerOrder.isDelivered ? (
                      <i
                        className="fas fa-check"
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>{customerOrder.user.name}</td>
                  <td>{`${customerOrder.createdAtMonth} ${customerOrder.createdAtYear}`}</td>
                  <td>
                    <LinkContainer
                      to={`/customer-order/${customerOrder.uuid}/edit`}
                    >
                      <Button variant="outline-secondary" className="btn-sm">
                        <i className="fas fa-edit icon-space"></i>
                        Edit Order
                      </Button>
                    </LinkContainer>
                  </td>
                  {userInfo.user && userInfo.user.role === 'admin' && (
                    <td>
                      <Button variant="danger" className="btn-sm">
                        <i className="fas fa-trash icon-space"></i>
                        Delete Order
                      </Button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </Table>
        {/* )}
        {customerOrders.length === 0 && !loading && (
          <h3 className="text-center">No Customer Order Added Yet</h3>
        )} */}
      </>
    </>
  );
};

export default CustomerOrderListScreen;
