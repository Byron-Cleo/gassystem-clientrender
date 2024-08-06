import React from 'react';
// import { Link } from 'react-router-dom';
// import Dashsummary from './../components/Dashsummary';

const DashboardScreen = () => {
  return (
    <div className="container">
      {/* <Dashsummary /> */}

      <div className="row">
        <div className="col-xl-12">
          <div className="card spur-card">
            <div className="card-header">
              <div className="spur-card-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="spur-card-title">System Overview</div>
            </div>
            <div className="card-body">
              <h4 style={{ color: 'red' }}>
                PLEASE RELOAD THE PAGE TO REACTIVATE THE JAVASCRIPT FOR UI/DOM
                MANIPULATION
              </h4>
              <p>
                The System is aimed to make recording of sales and tracking of
                Gas Cylinder for The Shop.
              </p>
              <h6>
                You Can Test the different users functionalities using the
                following dummy credentials:
              </h6>
              <ul>
                <div>
                  <h6 style={{ color: 'orangered' }}>Admin</h6>
                  <li>
                    Dummy Admin User:{' '}
                    <span style={{ color: 'orangered' }}>
                      admin@gassystem.com
                    </span>
                  </li>
                  <li>
                    Dummy Admin Password:{' '}
                    <span style={{ color: 'orangered' }}>12345678</span>
                  </li>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <h6 style={{ color: 'orangered' }}>User</h6>
                  <li>
                    Dummy Normal User:{' '}
                    <span style={{ color: 'orangered' }}>
                      Your default Email you Registered with since by default
                      YOU ARE NOT An ADMIN
                    </span>
                  </li>
                  <li>
                    Dummy Normal User's Password:{' '}
                    <span style={{ color: 'orangered' }}>
                      Your default Password you Registered with since by default
                      YOU ARE NOT An ADMIN
                    </span>
                  </li>
                </div>
              </ul>
              <h2>Features</h2>
              <ul>
                <li>
                  Main Admin Dashboard to check quick summary of the Gas Limits
                  and other functionalities
                </li>
                <li>All the Varieties being sold by this vendor</li>
                <li>Track all the Stocks in the Store</li>
                <li>Flow of purchase and in relation to customer</li>
                <li>
                  Analytics of how Top customers, Top sold gas and Revenue
                  Generated as flow of Gas Purchase continues
                </li>
                <li>
                  User Authentication and Authorization where Protected Routes
                  can only be accessed by user role given the access rights.
                </li>
                <li>
                  The Customer Order details are only meant to be updated to be
                  PAID or DELIVERED by the ADMIN/OWNER of the system
                </li>
                <li>
                  The Delete functionality is not enabled ONLY if requested by
                  the System owner
                </li>
              </ul>
              <h4 style={{ color: 'green', textTransform: 'capitalize' }}>
                Please Navigate around the system and feed your data to feel the
                experience of the system for the value it brings to the Business
                Owner
              </h4>
              <div>By Byron Ochara</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
