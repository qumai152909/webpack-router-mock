import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import Store from './store/store';
import './index.less';

function Home() {
  const pageStore = useContext(Store); // useContext 订阅mobx数据
  
  // useEffect副作用
  useEffect(() => {
    pageStore.listDataFetch();
  }, []);
  
  return (
    <section className="home-wrapper wrapper">
      <h2>{pageStore.pageTitle}</h2>
      <ul>
        <li/>
        <li/>
        <li/>
      </ul>
    </section>
  );
}

export default observer(Home);
