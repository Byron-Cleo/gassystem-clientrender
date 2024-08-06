import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listTopTen3KGMonthlyCustomers } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TopTen3KgCustomersListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const topTen3KgCustomersList = useSelector(
    (state) => state.topTen3KgCustomersList
  );
  const { loading, error, topTen3KgCustomers } = topTen3KgCustomersList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listTopTen3KGMonthlyCustomers());
  }, [dispatch]);

  return (
    <>
      <Link to="/top-ten-customers-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Top 10 3KG Customers</h1>
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
            {topTen3KgCustomers.map((topTen3KgCustomer) => (
              <tr key={topTen3KgCustomer.id}>
                <td>{topTen3KgCustomer.customerName}</td>
                <td>{topTen3KgCustomer.customerPhoneNumber}</td>
                <td>{topTen3KgCustomer.gasVarietyName}</td>
                <td>{topTen3KgCustomer.gasVarietyWeight}</td>
                <td>{topTen3KgCustomer.totalGasOrdered}</td>
                <td>
                  {topTen3KgCustomer.createdAtMonth}/
                  {topTen3KgCustomer.createdAtYear}
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
