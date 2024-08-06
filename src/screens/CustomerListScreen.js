import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { listCustomers } from "./../actions/customerActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const CustomerListScreen = () => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const customerList = useSelector((state) => state.customerList);
  const { loading, error, customers } = customerList;

  useEffect(() => {
    dispatch(listCustomers());
  }, [dispatch]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>All Customers</h1>
        </Col>

        <Col className="text-right">
          <LinkContainer to="/add-customer">
            <Button variant="info" className="my-3">
              <i className="fas fa-plus icon-space"></i>
              Add New Customer
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
              <th className="table-heading">View Cust. Details</th>
              <th className="table-heading">CUST. NAME</th>
              <th className="table-heading">Phone Number</th>
              <th className="table-heading">Apartment</th>
              <th className="table-heading">HOUS. NO.</th>
              <th className="table-heading">Alt. Contact Name</th>
              <th className="table-heading">Alt. Contact Phone</th>
              <th className="table-heading">Edit Action</th>
              <th className="table-heading">Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <LinkContainer to={`/customer/${customer.uuid}/details`}>
                    <Button variant="outline-success" className="btn-sm">
                      <i className="fas fa-list icon-space"></i>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                <td>{customer.customerName}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.apartment}</td>
                <td>{customer.houseNo}</td>
                <td>{customer.alternateContactName}</td>
                <td>{customer.alternateContactPhone}</td>
                <td>
                  <LinkContainer to={`/customer/${customer.uuid}/edit`}>
                    <Button variant="outline-secondary" className="btn-sm">
                      <i className="fas fa-edit icon-space"></i>
                      Edit Stock
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button variant="danger" className="btn-sm">
                    <i className="fas fa-trash icon-space"></i>
                    Delete Cust.
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

export default CustomerListScreen;
