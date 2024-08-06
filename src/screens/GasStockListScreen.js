import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listGasStock } from './../actions/gasStockActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const GasStockListScreen = () => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const gasStockList = useSelector((state) => state.gasStockList);
  const { loading, error, gasStocks } = gasStockList;
  console.log(gasStocks);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // console.log(userInfo);

  useEffect(() => {
    dispatch(listGasStock());
  }, [dispatch]);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>All Gas Stocks</h1>
        </Col>

        <Col className="text-right">
          <LinkContainer to="/add-gas-stock">
            <Button variant="info" className="my-3">
              <i className="fas fa-plus icon-space"></i>
              Add New Gas Stock
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      <>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-heading">View Gas Stock Details</th>
              <th className="table-heading">Gas Variety</th>
              <th className="table-heading">Initital Stock Qnty.</th>
              <th className="table-heading">Gas Weight(KG)</th>
              <th className="table-heading">Price</th>
              <th className="table-heading">Latest Ordered Qty.</th>
              <th className="table-heading">Remaining Stock</th>
              <th className="table-heading">Comment</th>
              {userInfo.user && userInfo.user.role === 'admin' && (
                <th className="table-heading">Edit Action</th>
              )}
              {userInfo.user && userInfo.user.role === 'admin' && (
                <th className="table-heading">Delete Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {gasStocks.map((gasStock) => (
              <tr key={gasStock.id}>
                <td>
                  <LinkContainer to={`/gas-stock/${gasStock.uuid}/details`}>
                    <Button variant="outline-success" className="btn-sm">
                      <i className="fas fa-list icon-space"></i>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                <td>{gasStock.gasVariety.gasVarietyName}</td>
                <td>{gasStock.countInStock}</td>
                <td>{gasStock.weight}</td>
                <td>
                  {gasStock.price.toLocaleString(undefined, currencyOptions) +
                    '/='}
                </td>
                <td>{gasStock.latestOrderedQuantity}</td>
                <td>{gasStock.remainingInStock}</td>
                <td>{gasStock.comment}</td>
                {userInfo.user && userInfo.user.role === 'admin' && (
                  <td>
                    <LinkContainer to={`/gas-stock/${gasStock.uuid}/edit`}>
                      <Button variant="outline-secondary" className="btn-sm">
                        <i className="fas fa-edit icon-space"></i>
                        Edit Stock
                      </Button>
                    </LinkContainer>
                  </td>
                )}
                {userInfo.user && userInfo.user.role === 'admin' && (
                  <td>
                    <Button variant="danger" className="btn-sm">
                      <i className="fas fa-trash icon-space"></i>
                      Delete Stock
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default GasStockListScreen;
