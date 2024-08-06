import React from 'react';
import LoginHeader from './LoginHeader';

const LayoutOne = ({ children }) => {
  return (
    <>
      <LoginHeader />
      {children}
    </>
  );
};
export default LayoutOne;
