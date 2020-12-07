import React from "react";

import { add } from '../../utils/add';

export default function About() {
  console.log('add: ', add(2, 2));
  
  return (
    <div className="about-wrapper">
      About
    </div>
  );
}
