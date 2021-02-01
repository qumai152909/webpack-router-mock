import React from 'react';
import { Link } from "react-router-dom";
import logoImg from '@/assets/images/logo.png';
import './index.less';

export default function NavBar() {
  return (
    <section className="nav-com">
      <img src={ logoImg } alt="logo"/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
