import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listTopTen6KGMonthlyCustomers } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TopTen3KgCustomersListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const topTen6KgCustomersList = useSelector(
    (state) => state.topTen6KgCustomersList
  );
  const { loading, error, topTen6KgCustomers } = topTen6KgCustomersList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listTopTen6KGMonthlyCustomers());
  }, [dispatch]);

  return (
    <>
      <Link to="/top-ten-customers-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Top 10 6KG Customers</h1>
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
            {topTen6KgCustomers.map((topTen6KgCustomer) => (
              <tr key={topTen6KgCustomer.id}>
                <td>{topTen6KgCustomer.customerName}</td>
                <td>{topTen6KgCustomer.customerPhoneNumber}</td>
                <td>{topTen6KgCustomer.gasVarietyName}</td>
                <td>{topTen6KgCustomer.gasVarietyWeight}</td>
                <td>{topTen6KgCustomer.totalGasOrdered}</td>
                <td>
                  {topTen6KgCustomer.createdAtMonth}/
                  {topTen6KgCustomer.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default TopTen3KgCustomersListScreen;
