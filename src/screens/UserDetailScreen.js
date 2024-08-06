import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from './../actions/userActions';

const UserDetailsScreen = ({ match }) => {
  const userUuid = match.params.uuid;

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  console.log(user);

  useEffect(() => {
    dispatch(getUserDetails(userUuid));
  }, [dispatch, userUuid]);

  return (
    <>
      <Link to="/users-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left icon-space"></i>All Users
      </Link>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Row>
        <div className="container col-xl-6">
          {user && (
            <>
              <ListGroup>
                <ListGroup.Item>
                  <h2>User Details:</h2>
                  <p>
                    <strong className="strong-font-size">Name: </strong>
                    {user.name}
                  </p>
                  <p>
                    <strong className="strong-font-size">Phone Number: </strong>
                    {user.phoneNumber}
                  </p>
                  <p>
                    <strong className="strong-font-size">Email: </strong>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </>
          )}
        </div>
      </Row>
    </>
  );
};

export default UserDetailsScreen;
