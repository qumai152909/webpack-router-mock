import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'; // 引入styled-components
import logoImg from '@/assets/images/logo.png';

// 比如我们需要一个 div
// 正确的做法就是如同刚开始那样,把样式组件放到组件最外面去
// 这里我们可以把 NavContainer 当做普通 div 去使用
const NavContainer = styled.section`
  padding: 0 100px;
  color: #fff;
  background-color: rgba(0,0,0,.7);

  nav {
    display: inline-block;
    vertical-align: bottom;
  }

  img {
    position: relative;
    top: -2px;
    height: 40px;
    width: 40px;
    margin-right: 40px;
  }
  
  ul {
    margin: 0;
  }
  
  li {
    display: inline-block;
    padding: 0 30px;
    line-height: 48px;
    font-size: 16px;
  }
  
  a {
    display: inline-block;
    height: 100%;
    color: #fff;
    
    &:hover {
      color: #B5FFD1;
    }
  }
`;

export default function NavBar() {
  return (
    <NavContainer>
      <img src={ logoImg } alt="logo"/>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
}
