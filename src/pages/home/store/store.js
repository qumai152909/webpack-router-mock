import { createContext } from 'react';
import { observable, action } from 'mobx';
import { message } from 'antd';
import * as api from './storeApi';

class HomeStore {
  @observable pageTitle = 'Home主页';
  
  @observable listData = null;
  
  @observable loading = false;
  
  // 获取列表数据
  async listDataFetch() {
    this.loading = true;
    const res = await api.getHomeList();
    
    if (res.status === 200 && res.data.success) {
      this.listData = res.data.data || [];
    } else {
      this.listData = [];
    }
    this.loading = false;
  }
  
  // 保存列表数据
  @action.bound
  async saveListFetch() {
    const res = await api.saveHomeList({ list: this.listData });
    if (res.status === 200 && res.data.success) {
      message.success('保存成功');
    }
  }
}

export default createContext(new HomeStore());
