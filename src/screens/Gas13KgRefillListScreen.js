import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listGasOf13kgForRefill } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas6KgRefillListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasFor13KgRefillList = useSelector(
    (state) => state.gasFor13KgRefillList
  );
  const { loading, error, gasFor13KgRefill } = gasFor13KgRefillList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listGasOf13kgForRefill());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-for-refill-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Empty 13KG Gas Cylinders For Refill</h1>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              {/* <th className="table-heading">Gas In Stock Name & Weight </th> */}
              <th className="table-heading">Return Empty Gas Name</th>
              <th className="table-heading">Return Empty Gas Weight</th>
              <th className="table-heading">Number Empty Gas</th>
              <th className="table-heading">Comment</th>
              <th className="table-heading">Month/Year</th>
            </tr>
          </thead>
          <tbody>
            {gasFor13KgRefill.map((gas13KgRefill) => (
              <tr key={gas13KgRefill.id}>
                <td>{gas13KgRefill.emptyGas}</td>
                <td>{gas13KgRefill.emptyGasWeight}</td>
                <td>{gas13KgRefill.returnedEmptyGas}</td>
                <td>{gas13KgRefill.comment}</td>
                <td>
                  {gas13KgRefill.createdAtMonth}/{gas13KgRefill.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default Gas6KgRefillListScreen;
