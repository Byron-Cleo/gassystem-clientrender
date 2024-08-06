import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { updateMyPassword } from './../actions/authActions';

const UserUpdatePasswordScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  const myPasswordUpdate = useSelector((state) => state.myPasswordUpdate);
  const { loading, success, error } = myPasswordUpdate;

  useEffect(() => {
    if (success) {
      setMessage('Your Password was Successfully Updated');
    }
  }, [success]);

  const updatePasswordHandler = (e) => {
    e.preventDefault();
    const newPassword = {
      passwordCurrent,
      password,
      passwordConfirm,
    };
    dispatch(updateMyPassword(newPassword));
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

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="row">
            <div className="container col-xl-6">
              {message && <Message variant="success">{message}</Message>}
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">
                    🏅 🏅 🏅 Updating My Password
                  </div>
                </div>
                <div className="card-body ">
                  <form onSubmit={updatePasswordHandler}>
                    <div className="form-group">
                      <label htmlFor="currentPassword">
                        Your Current Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        placeholder="* * * * * * * *"
                        value={passwordCurrent}
                        onChange={(e) => {
                          setPasswordCurrent(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">New Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="* * * * * * * *"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        Confirm New Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="* * * * * * * *"
                        value={passwordConfirm}
                        onChange={(e) => {
                          setPasswordConfirm(e.target.value);
                        }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Update Password
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

export default UserUpdatePasswordScreen;
