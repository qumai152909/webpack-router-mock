import {makeAutoObservable, runInAction } from "mobx"

export default class CounterStore {
  count = 3;
  state = "pending";
  
  constructor() {
    makeAutoObservable(this);
  }
  
  increment() {
    console.log('increment');
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  
  // To create a computed value, define a property using a JS getter function get
  get doubleCount() {
    return this.count * 2;
  }
  
  async fetchProjects() {
    this.state = "pending";
    try {
      const response = await fetch("/api/value");
      // await 之后，再次修改状态需要动作:
      // 不要到处写 action，而是在整个过程结束时尽可能多地对所有状态进行修改：
      // 将‘“最终的”修改放入一个异步动作中
      runInAction(() => {
        this.state = "done";
        this.value = response.json();
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      })
    }
  }
}
