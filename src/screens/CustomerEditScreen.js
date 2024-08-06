import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getCustomerDetails, updateCustomer } from '../actions/customerActions';
import { CUSTOMER_UPDATE_RESET } from '../constants/customerConstants';

const CustomerEditScreen = ({ history, match }) => {
  const customerUuid = match.params.uuid;
  //For triggering the action/ also know as action creators
  const dispatch = useDispatch();

  //Defining Component State
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [apartment, setApartment] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [alternateContactName, setAlternateContactName] = useState('');
  const [alternateContactPhone, setAlternateContactPhone] = useState('');

  const customerDetails = useSelector((state) => state.customerDetails);
  const { loading, error, customer } = customerDetails;

  const customerUpdate = useSelector((state) => state.customerUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = customerUpdate;   

  useEffect(() => {  
    if (successUpdate) {
      dispatch({ type: CUSTOMER_UPDATE_RESET });
      history.push('/customers-list');
    } else {
      if (!customer || customer.uuid !== customerUuid) {
        dispatch(getCustomerDetails(customerUuid));
      } else {
        setCustomerName(customer.customerName);
        setPhoneNumber(customer.phoneNumber);
        setApartment(customer.apartment);
        setHouseNo(customer.houseNo);
        setAlternateContactName(customer.alternateContactName);
        setAlternateContactPhone(customer.alternateContactPhone);
      }
    }
  }, [dispatch, customerUuid, customer, successUpdate, history]);

  const submitCustomerEditHandler = (e) => {
    e.preventDefault();
    const updatedCustomer = {
      uuid: customerUuid,
      customerName,
      phoneNumber,
      apartment,
      houseNo,
      alternateContactName,
      alternateContactPhone,
    };
    dispatch(updateCustomer(updatedCustomer));
  };
  return (
    <>
      <Link to="/customers-list" className="btn btn-light my-3">
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
              <div className="card spur-card">
                <div className="card-header">
                  <div className="spur-card-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="spur-card-title">Update Customer </div>
                </div>
                <div className="card-body ">
                  <form onSubmit={submitCustomerEditHandler}>
                    <div className="form-group">
                      <label
                        className="strong-font-size"
                        htmlFor="customername"
                      >
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
                      Update
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

export default CustomerEditScreen;
