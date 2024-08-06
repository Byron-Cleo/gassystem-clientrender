// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { listTopTenCustomers } from '../actions/customerOrderActions';
// import { listGasForRefill } from '../actions/customerOrderActions';
// import { listGasStock } from './../actions/gasStockActions';

// const Dashsummary = () => {
//   const dispatch = useDispatch();

//   //Top Sold Gas
//   const topTenCustomersList = useSelector((state) => state.topTenCustomersList);
//   const { topTenCustomers } = topTenCustomersList;

//   const totalGasOrdered = topTenCustomers.map((x) => {
//     return +x.totalGasOrdered;
//   });
//   const first = totalGasOrdered[0];
//   const firstObj = topTenCustomers.find((x) => +x.totalGasOrdered === first);
//   // console.log(firstObj);

//   //Empty Gas
//   const gasForRefillList = useSelector((state) => state.gasForRefillList);
//   const { gasForRefill } = gasForRefillList;
//   // console.log(gasForRefill);
//   const gasRefillFks = gasForRefill.map((x) => {
//     return +x.gasStockFK;
//   });
//   // console.log(gasRefillFks);
//   const higestRefillFk = gasRefillFks[0];

//   //Gas Stock
//   const gasStockList = useSelector((state) => state.gasStockList);
//   const { gasStocks } = gasStockList;
//   // console.log(gasStocks);
//   const stockEmptyGas = gasStocks.find((x) => x.id === higestRefillFk);
//   // console.log(stockEmptyGas);

//   useEffect(() => {
//     dispatch(listTopTenCustomers());
//     dispatch(listGasForRefill());
//     dispatch(listGasStock());
//   }, [dispatch]);

//   return (
//     <div className="row dash-row">
//       <div className="col-xl-4">
//         {firstObj && (
//           <div className="stats stats-success">
//             <h3 className="stats-title">Current Top Cust.</h3>
//             <div className="stats-content">
//               <div className="stats-icon">
//                 <i className="fas fa-user icon-space"></i>
//               </div>
//               <div className="stats-data">
//                 <div className="stats-number">{firstObj.gasVarietyName}</div>
//                 <div className="stats-change">
//                   <span className="stats-percentage">
//                     {firstObj.customer.customerName}
//                   </span>
//                   <span className="stats-timeframe">
//                     ({firstObj.totalGasOrdered} Bought)
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="col-xl-4">
//         {firstObj && (
//           <div className="stats stats-primary">
//             <h3 className="stats-title">Most Sold Gas</h3>
//             <div className="stats-content">
//               <div className="stats-icon">
//                 <i className="fas fa-arrow-alt-circle-up icon-space"></i>
//               </div>
//               <div className="stats-data">
//                 <div className="stats-number">
//                   {firstObj.gasStock.gasVarietyName}
//                 </div>
//                 <div className="stats-change">
//                   <span className="stats-percentage">
//                     {firstObj.gasStock.weight}
//                   </span>
//                   <span className="stats-timeframe">
//                     ({firstObj.gasStock.remainingInStock} Remaining Now)
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="col-xl-4">
//         {stockEmptyGas && (
//           <div className="stats stats-danger">
//             <h3 className="stats-title">Empty Cylinder</h3>
//             <div className="stats-content">
//               <div className="stats-icon">
//                 <i className="fas fa-burn icon-space"></i>
//               </div>
//               <div className="stats-data">
//                 <div className="stats-number">
//                   {stockEmptyGas.gasVarietyName}
//                 </div>
//                 <div className="stats-change">
//                   <span className="stats-percentage">
//                     {`${+stockEmptyGas.countInStock}` -
//                       `${+stockEmptyGas.remainingInStock}`}{' '}
//                     Empty
//                   </span>
//                   <span className="stats-timeframe">
//                     (Out of Qty.{stockEmptyGas.countInStock})
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashsummary;
