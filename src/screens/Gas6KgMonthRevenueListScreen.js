import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listMonthly6kgRevenue } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas6KgMonthlyRevenueListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gas6KgMonthRevenueList = useSelector(
    (state) => state.gas6KgMonthRevenueList
  );
  const { loading, error, month6KgRevenues } = gas6KgMonthRevenueList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listMonthly6kgRevenue());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-monthly-revenue-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>6KG Gas Monthly Revenue</h1>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              {/* <th className="table-heading">Gas In Stock Name & Weight </th> */}
              <th className="table-heading">Gas Name</th>
              <th className="table-heading">Gas Weight</th>
              <th className="table-heading">Gas Remaining</th>
              <th className="table-heading">Gas Price</th>
              <th className="table-heading">Gas Paid</th>
              <th className="table-heading">Gas Delivered</th>
              <th className="table-heading">Month/Year</th>
            </tr>
          </thead>
          <tbody>
            {month6KgRevenues.map((gas6KgMonthlyRevenue) => (
              <tr key={gas6KgMonthlyRevenue.id}>
                <td>{gas6KgMonthlyRevenue.gasVarietyName}</td>
                <td>{gas6KgMonthlyRevenue.gasVarietyWeight}</td>
                <td>{gas6KgMonthlyRevenue.gasRemainingInStock}</td>
                <td>{gas6KgMonthlyRevenue.gasVarietyPrice}</td>
                {/* <td>{gas6KgMonthlyRevenue.isPaid}</td> */}
                {/* <td>{gas6KgMonthlyRevenue.isDelivered}</td> */}
                <td>
                  {gas6KgMonthlyRevenue.isPaid ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {gas6KgMonthlyRevenue.isDelivered ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {gas6KgMonthlyRevenue.createdAtMonth}/
                  {gas6KgMonthlyRevenue.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default Gas6KgMonthlyRevenueListScreen;
