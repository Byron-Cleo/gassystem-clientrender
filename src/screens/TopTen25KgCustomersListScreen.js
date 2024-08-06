import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listTopTen25KGMonthlyCustomers } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TopTen25KgCustomersListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const topTen25KgCustomersList = useSelector(
    (state) => state.topTen25KgCustomersList
  );
  const { loading, error, topTen25KgCustomers } = topTen25KgCustomersList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listTopTen25KGMonthlyCustomers());
  }, [dispatch]);

  return (
    <>
      <Link to="/top-ten-customers-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Top 10 25KG Customers</h1>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              {/* <th className="table-heading">Customer Name</th> */}
              <th className="table-heading">Customer Name</th>
              <th className="table-heading">Customer Phone Number</th>
              <th className="table-heading">Gas Variety</th>
              <th className="table-heading">Gas Weight</th>
              <th className="table-heading">Quantity Bought</th>
              <th className="table-heading">Month/Year</th>
            </tr>
          </thead>
          <tbody>
            {topTen25KgCustomers.map((topTen25KgCustomer) => (
              <tr key={topTen25KgCustomer.id}>
                <td>{topTen25KgCustomer.customerName}</td>
                <td>{topTen25KgCustomer.customerPhoneNumber}</td>
                <td>{topTen25KgCustomer.gasVarietyName}</td>
                <td>{topTen25KgCustomer.gasVarietyWeight}</td>
                <td>{topTen25KgCustomer.totalGasOrdered}</td>
                <td>
                  {topTen25KgCustomer.createdAtMonth}/
                  {topTen25KgCustomer.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default TopTen25KgCustomersListScreen;
