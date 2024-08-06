import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { USER_CREATE_RESET } from '../constants/userConstants';

const UserAddScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState(null);

  const userCreate = useSelector((state) => state.userCreate);
  const { loading, error, success } = userCreate;

  //very important here, if there is any user info(MEANING THE USER HAS LOGGED INTO THE SYSTEM),
  //the redirect him/her to what is in the redirect variable

  useEffect(() => {
    //if user created successfully redirect to list page
    if (success) {
      dispatch({ type: USER_CREATE_RESET });
      history.push('/users-list');
    }
  }, [dispatch, success, history]);

  const userCreateHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Please Confirm the Passwords Again As They Don't Match");
    } else {
      const user = {
        name,
        email,
        // phoneNumber,
        // role,
        password,
        passwordConfirm,
      };
      dispatch(createUser(user));
    }
  };

  return (
    <>
      <Link to="/users-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <>
        <div className="row">
          <div className="container col-xl-6">
            {message && <Message variant="danger">{message}</Message>}
            <div className="card spur-card">
              <div className="card-header">
                <div className="spur-card-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="spur-card-title"> Add A New System User</div>
              </div>
              <div className="card-body ">
                <form onSubmit={userCreateHandler}>
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

                  {/* <div className="form-group">
                    <label htmlFor="phonenumber">User Phone Number:</label>
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
                  </div> */}

                  {/* <fieldset className="my-fieldset">
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
                  </fieldset> */}

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
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
                    <label htmlFor="passwordConfirm">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordConfirm"
                      placeholder="* * * * * * * *"
                      value={passwordConfirm}
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add New System User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default UserAddScreen;
