import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listGasOf6kgForRefill } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas6KgRefillListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasFor6KgRefillList = useSelector((state) => state.gasFor6KgRefillList);
  const { loading, error, gasFor6KgRefill } = gasFor6KgRefillList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listGasOf6kgForRefill());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-for-refill-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Empty 6KG Gas Cylinders For Refill</h1>
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
            {gasFor6KgRefill.map((gas6KgRefill) => (
              <tr key={gas6KgRefill.id}>
                <td>{gas6KgRefill.emptyGas}</td>
                <td>{gas6KgRefill.emptyGasWeight}</td>
                <td>{gas6KgRefill.returnedEmptyGas}</td>
                <td>{gas6KgRefill.comment}</td>
                <td>
                  {gas6KgRefill.createdAtMonth}/{gas6KgRefill.createdAtYear}
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

