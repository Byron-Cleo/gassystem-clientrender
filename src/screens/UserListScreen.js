import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listUsers } from './../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const UserListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>All My Company Employees</h1>
        </Col>

        <Col className="text-right">
          <LinkContainer to="/add-user">
            <Button variant="info" className="my-3">
              <i className="fas fa-plus icon-space"></i>
              Add New System User
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
              <th className="table-heading">User Details</th>
              <th className="table-heading">#</th>
              <th className="table-heading">User Name</th>
              <th className="table-heading">User Email</th>
              <th className="table-heading">Phone Number</th>
              <th className="table-heading">User Role</th>
              <th className="table-heading">User Active</th>
              <th className="table-heading">Edit Action</th>
              <th className="table-heading">Deactivate User</th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <LinkContainer to={`/user/${user.uuid}/details`}>
                      {/* <LinkContainer to={`/gas-variety/${user.uuid}/details`}> */}
                      <Button variant="outline-success" className="btn-sm">
                        <i className="fas fa-list icon-space"></i>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.active ? (
                      <i
                        className="fas fa-check"
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/user/${user.uuid}/edit`}>
                      <Button variant="outline-secondary" className="btn-sm">
                        <i className="fas fa-edit icon-space"></i>
                        Edit User
                      </Button>
                    </LinkContainer>
                  </td>

                  <td>
                    <Button variant="danger" className="btn-sm">
                      <i className="fas fa-trash icon-space"></i>
                      Deactivate User
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default UserListScreen;
