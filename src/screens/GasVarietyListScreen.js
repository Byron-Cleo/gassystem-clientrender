import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listGasVarieties } from './../actions/gasVarietyActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const GasVarietyListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasVarietyList = useSelector((state) => state.gasVarietyList);
  const { loading, error, gasVarieties } = gasVarietyList;

  useEffect(() => {
    dispatch(listGasVarieties());
  }, [dispatch]);

  return (   
    <>
      <Row className="align-items-center">
        <Col>
          <h1>All My Gas Varieties</h1>
        </Col>

        <Col className="text-right">
          <LinkContainer to="/add-gas-variety">
            <Button variant="info" className="my-3">
              <i className="fas fa-plus icon-space"></i>
              Add New Gas Variety
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-heading">View Order Details</th>
              <th className="table-heading">Gas Variety Name</th>
              <th className="table-heading">Edit Action</th>
              <th className="table-heading">Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {gasVarieties.map((gasVariety) => (
              <tr key={gasVariety.id}>
                <td>
                  <LinkContainer to={`/gas-variety/${gasVariety.uuid}/details`}>
                    <Button variant="outline-success" className="btn-sm">
                      <i className="fas fa-list icon-space"></i>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                <td>{gasVariety.gasVarietyName}</td>
                <td>
                  <LinkContainer to={`/gas-variety/${gasVariety.uuid}/edit`}>
                    <Button variant="outline-secondary" className="btn-sm">
                      <i className="fas fa-edit icon-space"></i>
                      Edit Variety
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button variant="danger" className="btn-sm">
                    <i className="fas fa-trash icon-space"></i>
                    Delete Variety
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default GasVarietyListScreen;
