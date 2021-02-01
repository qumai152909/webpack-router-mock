import React from "react";
import { Button } from 'antd';
import { add } from '../../utils/add';

console.log('add: ', add(2, 2));

export default function About() {
  return (
    <div className="about-wrapper">
      <Button type="primary" size="large">About</Button>
    </div>
  );
}
