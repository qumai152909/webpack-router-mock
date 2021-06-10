import React from "react";
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { useStores } from '@/stores';

const Theme = () => {
  const { themeStore } = useStores();
  
  return (
    <>
      <div>{themeStore.theme}</div>
      <Button onClick={() => themeStore.setTheme('light')}>
        set theme: light
      </Button>
      <Button onClick={() => themeStore.setTheme('dark')}>
        set theme: dark
      </Button>
    </>
  )
};

export default observer(Theme);
