import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { listGasOf3kgForRefill } from '../actions/analyticsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Gas3KgRefillListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasFor3KgRefillList = useSelector((state) => state.gasFor3KgRefillList);
  const { loading, error, gasFor3KgRefill } = gasFor3KgRefillList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listGasOf3kgForRefill());
  }, [dispatch]);

  return (
    <>
      <Link to="/gas-for-refill-dashboard" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Empty 3KG Gas Cylinders For Refill</h1>
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
            {gasFor3KgRefill.map((gas3KgRefill) => (
              <tr key={gas3KgRefill.id}>
                <td>{gas3KgRefill.emptyGas}</td>
                <td>{gas3KgRefill.emptyGasWeight}</td>
                <td>{gas3KgRefill.returnedEmptyGas}</td>
                <td>{gas3KgRefill.comment}</td>
                <td>
                  {gas3KgRefill.createdAtMonth}/{gas3KgRefill.createdAtYear}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default Gas3KgRefillListScreen;
