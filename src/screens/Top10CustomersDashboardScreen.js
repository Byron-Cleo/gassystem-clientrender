import React from 'react';
import Top10NavigationBar from './../components/Top10NavigationBar';

const Top10CustomersDashboardScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="card spur-card">
            <div className="card-header">
              <div className="spur-card-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="spur-card-title">
                Customers Analytics Overview
              </div>
            </div>
            <div className="card-body">
              <p>
                Please use the Navigation Tabs Below to Fetch and View The
                Different Customer Analytics.
              </p>
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
      <Top10NavigationBar />
    </div>
  );
};

export default Top10CustomersDashboardScreen;
