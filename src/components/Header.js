import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ history }) => {
  const dispatch = useDispatch();

  //Once the user has log in to the system and their data stored in a central place in the store
  // we can now get to the reduced added data which was done in the reducer file
  const userLogin = useSelector((state) => state.userLogin);
  //distructuring data from the state's user login
  const { userInfo, logoutsuccess } = userLogin;

  useEffect(() => {
    //if user created successfully redirect to dashboard
    if (logoutsuccess) {
      history.push('/');
    }
  }, [logoutsuccess, history]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>
        <header
          className="dash-toolbar style-heading"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3
            className="text-center"
            style={{
              // textAlign: 'center',
              // fontSize: '1.7rem',
              textTransform: 'uppercase',
              alignSelf: 'center',
              // justifySelf: 'center',
            }}
          >
            Gas Inventory System
          </h3>

          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link to="#!" className="menu-toggle">
              <i className="fas fa-bars"></i>
            </Link>
            <div
              style={{
                display: 'flex',
              }}
            >
              {userInfo.user && (
                <NavDropdown title={userInfo.user.name} id="username">
                  <LinkContainer to="/me">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/update-me">
                    <NavDropdown.Item>Update Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/update-my-password">
                    <NavDropdown.Item>Update Password</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <LinkContainer to="/">
                      <div>Logout</div>
                    </LinkContainer>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {userInfo.user && userInfo.user.role === 'admin' && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/users-list">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/customers-orders-list">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
