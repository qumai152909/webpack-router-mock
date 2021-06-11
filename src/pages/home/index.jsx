import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Store from './store/store';

import line1Img from './images/line1.jpg';
import line2Img from './images/line2.jpg';
import line3Img from './images/line3.jpg';

const HomeWrap = styled.section`
  padding-bottom: 80px;
  text-align: center;
`;
const ImgItem = styled.li`
  margin: 0 auto;
  height: 200px;
  width: 600px;
  list-style: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 8px solid #ccc;
  background-image: url(${props => props.url});
`;


function Home() {
  const pageStore = useContext(Store); // useContext 订阅mobx数据
  
  // useEffect副作用
  useEffect(() => {
    pageStore.listDataFetch();
  }, []);
  
  return (
    <HomeWrap>
      <h2>{pageStore.pageTitle}</h2>
      <ul>
        <ImgItem url={line1Img} />
        <ImgItem url={line2Img} />
        <ImgItem url={line3Img} />
      </ul>
    </HomeWrap>
  );
}

export default observer(Home);
