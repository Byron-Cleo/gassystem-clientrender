import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listMonthly3kgRevenue } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const GasMonthRevenueListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasMonthRevenueList = useSelector((state) => state.gasMonthRevenueList);
  const { loading, error, monthRevenues } = gasMonthRevenueList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listMonthly3kgRevenue());
  }, [dispatch]);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Month Revenue Break Down</h1>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-heading">Gas In Stock Name & Weight </th>
              <th className="table-heading">Price</th>
              <th className="table-heading">Initial Stock</th>
              <th className="table-heading">Sold Out</th>
              <th className="table-heading">Remaining in Stock</th>
              <th className="table-heading">Total Amount</th>
              <th className="table-heading">Month/Year</th>
            </tr>
          </thead>
          <tbody>
            {monthRevenues.map((monthRevenue) => (
              <tr key={monthRevenue.id}>
                <td>
                  {`${monthRevenue.gasStock.gasVarietyName} of
                  ${monthRevenue.gasStock.weight}`}
                </td>
                <td>
                  {`${
                    monthRevenue.gasStock.price.toLocaleString(
                      undefined,
                      currencyOptions
                    ) + '/='
                  }`}
                </td>
                <td>{monthRevenue.gasStock.countInStock} </td>
                <td>{monthRevenue.noOfGasSold}</td>
                <td>{monthRevenue.gasStock.remainingInStock}</td>
                <td>
                  {`${
                    monthRevenue.total.toLocaleString(
                      undefined,
                      currencyOptions
                    ) + '/='
                  }`}
                </td>
                {/* <td>{monthRevenue.comment}</td> */}
                <td>
                  {monthRevenue.createdAtMonth}/{monthRevenue.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default GasMonthRevenueListScreen;
