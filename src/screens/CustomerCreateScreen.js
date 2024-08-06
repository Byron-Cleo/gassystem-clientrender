import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { createCustomer } from './../actions/customerActions';
import { CUSTOMER_CREATE_RESET } from './../constants/customerConstants';

const CustomerCreateScreen = ({ history }) => {
  //For triggering the action/ also know as action creators
  const dispatch = useDispatch();  

  //Defining Component State
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [apartment, setApartment] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [alternateContactName, setAlternateContactName] = useState('');
  const [alternateContactPhone, setAlternateContactPhone] = useState('');

  const customerCreate = useSelector((state) => state.customerCreate);
  const { loading, success, error } = customerCreate;

  useEffect(() => {
    if (success) {
      dispatch({ type: CUSTOMER_CREATE_RESET });
      history.push('/customers-list');
    }
  }, [dispatch, success, history]);

  const customerCreateHandler = (e) => {
    e.preventDefault();
    const customer = {
      customerName,
      phoneNumber,
      apartment,
      houseNo,
      alternateContactName,
      alternateContactPhone,
    };
    dispatch(createCustomer(customer));
  };

  return (
    <>
      <Link to="/customers-list" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>

      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <>
        <div className="row">
          <div className="container col-xl-6">
            <div className="card spur-card">
              <div className="card-header">
                <div className="spur-card-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="spur-card-title"> Add A New Customer </div>
              </div>
              <div className="card-body ">
                <form onSubmit={customerCreateHandler}>
                  <div className="form-group">
                    <label className="strong-font-size" htmlFor="customername">
                      Customer Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="customername"
                      placeholder="Enter Customer Name"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="strong-font-size" htmlFor="phonenumber">
                      Customer Phone Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phonenumber"
                      placeholder="Enter Customer Phone Number"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="strong-font-size" htmlFor="apartment">
                      Apartment:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apartment" 
                      placeholder="Enter Customer Apartment"
                      value={apartment}
                      onChange={(e) => {
                        setApartment(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="strong-font-size" htmlFor="houseno">
                      House Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="houseno"
                      placeholder="Enter Customer House Number"
                      value={houseNo}
                      onChange={(e) => {
                        setHouseNo(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="strong-font-size" htmlFor="contactname">
                      Alternate Contact Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactname"
                      placeholder="Enter Customer's Alternate Contact Name"
                      value={alternateContactName}
                      onChange={(e) => {
                        setAlternateContactName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="strong-font-size"
                      htmlFor="phonealternate"
                    >
                      Alternate Contact Phone:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phonealternate"
                      placeholder="Enter Customer's Alternate Contact Phone"
                      value={alternateContactPhone}
                      onChange={(e) => {
                        setAlternateContactPhone(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add Customer
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
  
export default CustomerCreateScreen;