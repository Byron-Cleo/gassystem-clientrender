import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listGasOf25kgForRefill } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas25KgRefillListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasFor25KgRefillList = useSelector(
    (state) => state.gasFor25KgRefillList
  );
  const { loading, error, gasFor25KgRefill } = gasFor25KgRefillList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listGasOf25kgForRefill());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-for-refill-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Empty 25KG Gas Cylinders For Refill</h1>
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
            {gasFor25KgRefill.map((gas25KgRefill) => (
              <tr key={gas25KgRefill.id}>
                <td>{gas25KgRefill.emptyGas}</td>
                <td>{gas25KgRefill.emptyGasWeight}</td>
                <td>{gas25KgRefill.returnedEmptyGas}</td>
                <td>{gas25KgRefill.comment}</td>
                <td>
                  {gas25KgRefill.createdAtMonth}/{gas25KgRefill.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default Gas25KgRefillListScreen;
