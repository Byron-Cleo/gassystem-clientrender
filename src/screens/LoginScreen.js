import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //After the user has logged into the system, they need to be redirected to the system homepage
  //i.e the dashboard screen

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/dashboard';

  //Once the user has log in to the system and their data stored in a central place in the store
  // we can now get to the reduced added data which was done in the reducer file
  const userLogin = useSelector((state) => state.userLogin);
  //distructuring data from the state's user login
  const { loading, error, userInfo } = userLogin;

  //very important here, if there is any user info(MEANING THE USER HAS LOGGED INTO THE SYSTEM),
  //the redirect him/her to what is in the redirect variable

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const loginHandler = (e) => {
    e.preventDefault();
    
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <>
      <div className="row">
        <div className="container col-xl-6">
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          <div className="card spur-card">
            <div className="card-header" style={{ justifyContent: 'center' }}>
              <div className="spur-card-icon"> 🤗 </div>
              <div className="spur-card-title">LOGIN INTO THE SYSTEM</div>
            </div>
             
            <div className="card-body ">
              {/* <div>
                <p>
                  Please Use These Test Credentials to Login into the System
                </p>
                <span style={{ color: 'blue' }}>
                  Email: testuser@gasssytem.com
                </span>
                <br></br>
                <span style={{ color: 'grey' }}>Password: 12345678</span>
              </div> */}
               
              <form onSubmit={loginHandler}>
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

                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
              </form>
            </div>
          </div>
          <div>
            <span>New User?</span>
            <Link to="/signup" className="btn btn-light my-3">
              <i className="fas fa-user-plus"></i> Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
