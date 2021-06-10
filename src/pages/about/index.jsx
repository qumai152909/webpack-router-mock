import React from "react";
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { useStores } from '@/stores';

const Counter = () => {
  const { counterStore } = useStores();
  
  return (
    <>
      <div>{counterStore.count}</div>
      <Button onClick={() => counterStore.increment()}>++</Button>
      <Button onClick={() => counterStore.decrement()}>--</Button>
      <p>倍数： {counterStore.doubleCount}</p>
    </>
  )
};

export default observer(Counter);
