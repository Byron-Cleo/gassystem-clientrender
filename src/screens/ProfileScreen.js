import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, ListGroup, Container } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getMe } from './../actions/userActions';

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, profile } = userProfile;
  console.log(profile);

  useEffect(() => {
    // if (!profile) {
    //   dispatch(getMe());
    // } else {
    dispatch(getMe());
    // }
    // }, [profile, dispatch]);
  }, [dispatch]);

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/dashboard" className="btn btn-light my-3">
          <i className="fas fa-arrow-left icon-space"></i>Home Page
        </Link>
        <Link to="/update-me" className="btn btn-light my-3">
          <i className="fas fa-medal icon-space"></i>Update My Profile
        </Link>
        <Link to="/update-my-password" className="btn btn-light my-3">
          <i className="fas fa-lock-open icon-space"></i>Update My Password
        </Link>
      </Container>

      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Row>
        <div className="container col-xl-6">
          {profile && (
            <>
              <ListGroup>
                <ListGroup.Item>
                  <h2>profile Details:</h2>
                  <p>
                    <strong className="strong-font-size">Name: </strong>
                    {profile.name}
                  </p>
                  <p>
                    <strong className="strong-font-size">Phone Number: </strong>
                    {profile.phoneNumber}
                  </p>
                  <p>
                    <strong className="strong-font-size">Email: </strong>
                    <a href={`mailto: ${profile.email}`}>{profile.email}</a>
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

export default ProfileScreen;
