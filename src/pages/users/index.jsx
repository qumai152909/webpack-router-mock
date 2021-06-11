import React, { useEffect } from "react";
import axiosTool from '@/utils/axios';

export default function User() {
  useEffect(() => {
    fetch('/api/v1')
      .then(data => console.log(data))
  }, []);
  
  useEffect(() => {
    axiosTool({
      url: '/api/v2',
      method: 'post',
      title: '获取User页数据',
    }).then(data => console.log(data))
  }, []);
  
  return (
    <div className="user-wrapper">
      User
    </div>
  );
}
