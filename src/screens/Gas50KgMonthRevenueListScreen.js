import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listMonthly50kgRevenue } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas50KgMonthlyRevenueListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gas50KgMonthRevenueList = useSelector(
    (state) => state.gas50KgMonthRevenueList
  );
  const { loading, error, month50KgRevenues } = gas50KgMonthRevenueList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listMonthly50kgRevenue());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-monthly-revenue-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>50KG Gas Monthly Revenue</h1>
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
            {month50KgRevenues.map((gas50KgMonthlyRevenue) => (
              <tr key={gas50KgMonthlyRevenue.id}>
                <td>{gas50KgMonthlyRevenue.gasVarietyName}</td>
                <td>{gas50KgMonthlyRevenue.gasVarietyWeight}</td>
                <td>{gas50KgMonthlyRevenue.gasRemainingInStock}</td>
                <td>{gas50KgMonthlyRevenue.gasVarietyPrice}</td>
                {/* <td>{gas50KgMonthlyRevenue.isPaid}</td>
                <td>{gas50KgMonthlyRevenue.isDelivered}</td> */}
                <td>
                  {gas50KgMonthlyRevenue.isPaid ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {gas50KgMonthlyRevenue.isDelivered ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {gas50KgMonthlyRevenue.createdAtMonth}/
                  {gas50KgMonthlyRevenue.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default Gas50KgMonthlyRevenueListScreen;
