import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/authActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { USER_REGISTER_RESET } from '../constants/authConstants';

const UserAddScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;

  //very important here, if there is any user info(MEANING THE USER HAS LOGGED INTO THE SYSTEM),
  //the redirect him/her to what is in the redirect variable

  useEffect(() => {
    //if user created successfully redirect to dashboard
    if (success) {
      dispatch({ type: USER_REGISTER_RESET });
      history.push('/dashboard');
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
        password,
        passwordConfirm,
      };
      dispatch(register(user));
    }
  };

  return (
    <>
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
                <div className="spur-card-title"> Create Account </div>
              </div>
              <div className="card-body ">
                <form onSubmit={userCreateHandler}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your Full Name"
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
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
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
                    Create Account
                  </button>
                </form>
              </div>
            </div>
            <div>
              <span>Already System User?</span>
              <Link to="/" className="btn btn-light my-3">
                <i className="fas fa-key"></i> Login
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default UserAddScreen;
