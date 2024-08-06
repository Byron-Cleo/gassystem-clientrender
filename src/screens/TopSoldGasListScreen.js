import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listTopSoldGas } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TopGasSoldListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const topSoldGasList = useSelector((state) => state.topSoldGasList);
  const { loading, error, topSoldGas } = topSoldGasList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listTopSoldGas());
  }, [dispatch]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Month's Top Sold Gas Cylinders</h1>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-heading">Gas Name</th>
              <th className="table-heading">Gas Weight</th>
              <th className="table-heading">Number Gas Sold</th>
              <th className="table-heading">Month/Year</th>
            </tr>
          </thead>
          <tbody>
            {topSoldGas.map((gas) => (
              <tr key={gas.id}>
                <td>{gas.gasVarietyName}</td>
                <td>{gas.gasVarietyWeight}</td>
                <td>{gas.totalGasSold}</td>
                <td>
                  {gas.createdAtMonth}/{gas.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default TopGasSoldListScreen;
