import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { adminEditUserCredentials } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { getUserDetails } from './../actions/userActions';
import { USER_UPDATE_CREDNTIALS_RESET } from '../constants/userConstants';

const UserEditScreen = ({ match, history }) => {
  const userUuid = match.params.uuid;

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [active, setActive] = useState(true);
  console.log(active);
  const [message, setMessage] = useState(null);

  const adminEditUser = useSelector((state) => state.adminEditUser);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = adminEditUser;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_CREDNTIALS_RESET });
      history.push('/users-list');
    } else {
      if (!user || user.uuid !== userUuid) {
        dispatch(getUserDetails(userUuid));
      } else {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setActive(user.active);
      }
    }
  }, [dispatch, user, userUuid, history, successUpdate]);

  const updateUserHandler = (e) => {
    e.preventDefault();
    if (name === '') {
      setMessage('Please confirm your inputs again');
    } else {
      const user = {
        userUuid,
        name,
        email,
        role,
        active,
      };
      dispatch(adminEditUserCredentials(user));
      window.location.reload();
    }
  };

  return (
    <>
      <Link to="/users-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

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
              {message && <Message variant="danger">{message}</Message>}
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">
                    Edit System User Details
                  </div>
                </div>
                <div className="card-body ">
                  <form onSubmit={updateUserHandler}>
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

                    <fieldset className="my-fieldset">
                      <legend className="gas-legend">
                        Select The User's Role:
                      </legend>

                      <div class="form-group custom-control custom-radio">
                        <input
                          type="radio"
                          id="admin"
                          name="role"
                          class="custom-control-input"
                          value="admin"
                          checked={role === 'admin'}
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        />
                        <label class="custom-control-label" htmlFor="admin">
                          Admin User
                        </label>
                      </div>

                      <div class="form-group custom-control custom-radio">
                        <input
                          type="radio"
                          id="user"
                          name="role"
                          class="custom-control-input"
                          value="user"
                          checked={role === 'user'}
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        />
                        <label class="custom-control-label" htmlFor="user">
                          User Role
                        </label>
                      </div>
                    </fieldset>

                    <Form.Group
                      controlId="isActive"
                      style={{ marginTop: '2rem' }}
                    >
                      <Form.Check
                        type="checkbox"
                        label="Is Active"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                      ></Form.Check>
                    </Form.Group>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginTop: '2em' }}
                    >
                      Update System User
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

export default UserEditScreen;
