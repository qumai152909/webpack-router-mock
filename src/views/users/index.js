import React from "react";

import { add } from '../../utils/add';

export default function User() {
  console.log('add: ', add(2, 4));
  
  return (
    <div className="user-wrapper">
      User
    </div>
  );
}
