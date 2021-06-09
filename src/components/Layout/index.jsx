import React from 'react';
import NavBar from '@/components/NavBar';

const Layout = (props) => (
  <div className="container">
    <NavBar />
    {props.children}
  </div>
);

export default Layout;
