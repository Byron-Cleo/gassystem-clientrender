import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { getMe, updateMe } from './../actions/userActions';
// import { USER_PROFILE_UPDATE_SUCCESS } from '../constants/userConstants';

const ProfileUpdateScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  //   const [message, setMessage] = useState(null);

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, profile } = userProfile;

  const profileUpdate = useSelector((state) => state.profileUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = profileUpdate;

  useEffect(() => {
    if (successUpdate) {
      // dispatch({type: USER_PROFILE_UPDATE_SUCCESS});
      // history.push('/me');
      // dispatch(getMe());
    }
    if (!profile) {
      dispatch(getMe());
    } else {
      setName(profile.name);
      setEmail(profile.email);
      setPhoneNumber(profile.phoneNumber);
    }
  }, [dispatch, profile, history, successUpdate]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phoneNumber,
    };
    dispatch(updateMe(user));
    history.push('/me');
    // window.location.reload();
  };

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/me" className="btn btn-light my-3">
          <i className="fas fa-arrow-left"></i> Back To Profile
        </Link>
        <Link to="/update-me" className="btn btn-light my-3">
          <i className="fas fa-medal icon-space"></i>Update My Profile
        </Link>
        <Link to="/update-my-password" className="btn btn-light my-3">
          <i className="fas fa-lock-open icon-space"></i>Update My Password
        </Link>
      </Container>

      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="row">
            <div className="container col-xl-6">
              {/* {message && <Message variant="danger">{message}</Message>} */}
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">
                    🏅 🏅 🏅 Updating My Profile
                  </div>
                </div>
                <div className="card-body ">
                  <form onSubmit={updateProfileHandler}>
                    <div className="form-group">
                      <label htmlFor="name">User's Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Users Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Users Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phonenumber">My Phone Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phonenumber"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginTop: '2em' }}
                    >
                      Update My Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileUpdateScreen;
