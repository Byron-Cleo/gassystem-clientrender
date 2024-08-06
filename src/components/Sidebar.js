import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ({ match }) => {
  //getting currently logged in user
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="dash-nav dash-nav-dark">
      <header>
        <Link to="#!" className="menu-toggle">
          <i className="fas fa-bars"></i>
        </Link>
        <Link to="/dashboard" className="spur-logo">
          System Tab
        </Link>
      </header>

      <nav className="dash-nav-list">
        {userInfo.user &&
          (userInfo.user.role === 'admin' || userInfo.user.role === 'user') && (
            <Link to="/dashboard" className="dash-nav-item">
              <i className="fas fa-boxes icon-space"></i>Dashboard
            </Link>
          )}   

        {userInfo.user &&
          (userInfo.user.role === 'admin' || userInfo.user.role === 'user') && (
            <Link to="/customers-orders-list" className="dash-nav-item">
              <i className="fas fa-cart-plus icon-space"></i>Customer Orders
            </Link>
          )}

        {userInfo.user &&
          (userInfo.user.role === 'admin' || userInfo.user.role === 'user') && (
            <Link to="/gas-stocks-list" className="dash-nav-item">
              <i className="fas fa-burn icon-space"></i> Gas Stock
            </Link>
          )}

        {userInfo.user && userInfo.user.role === 'admin' && (
          <Link to="/gas-varieties-list" className="dash-nav-item">
            <i className="fas fa-map-signs icon-space"></i> Gas Varieties
          </Link>
        )}  

        {userInfo.user && userInfo.user.role === 'admin' && (
          <Link to="/customers-list" className="dash-nav-item">
            <i className="fas fa-user-friends icon-space"></i>My Customers
          </Link>
        )}

        {userInfo.user && userInfo.user.role === 'admin' && (
          <div className="dash-nav-dropdown">
            <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
              <i className="fas fa-chart-bar icon-space"></i> Cust. Analytics
            </a>
            <div className="dash-nav-dropdown-menu">
              <Link to="/top-ten-customers-dashboard" className="dash-nav-item">
                Top 10 Cust. Dashboard
              </Link>
              {/* <a href="forms.html" className="dash-nav-dropdown-item"></a> */}
            </div>
          </div>
        )}

        {userInfo.user && userInfo.user.role === 'admin' && (
          <div className="dash-nav-dropdown">
            <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
              <i className="fas fa-external-link-alt icon-space"></i> Gas
              Analytics
            </a>
            <div className="dash-nav-dropdown-menu">
              <Link to="/top-sold-gas-analytics" className="dash-nav-item">
                Top Sold Gas
              </Link>
              <Link to="/gas-for-refill-dashboard" className="dash-nav-item">
                Refill Gas
              </Link>
            </div>
          </div>
        )}

        {userInfo.user && userInfo.user.role === 'admin' && (
          <div className="dash-nav-dropdown">
            <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
              <i className="fas fa-chart-line icon-space"></i>Revenue Analytics
            </a>
            <div className="dash-nav-dropdown-menu">
              <Link
                to="/gas-monthly-revenue-dashboard"
                className="dash-nav-item"
              >
                Gas Monthly Revenue
              </Link>
            </div>
          </div>
        )}

        {userInfo.user && userInfo.user.role === 'admin' && (
          <Link to="/users-list" className="dash-nav-item">
            <i className="fas fa-user-friends icon-space"></i>System Users
          </Link>
        )}

        {/* <Link to="/" className="dash-nav-item">
          <i className="fas fa-home"></i>Log In(started)
        </Link>
        <Link to="/signup" className="dash-nav-item">
          <i className="fas fa-home"></i>Sign Up(started)
        </Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;
