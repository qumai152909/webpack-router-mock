import React, { Component } from 'react';
import { Result } from 'antd';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <Result status="500" title="可能出错了" subTitle="页面可能出错了，请刷新或稍后再试！" />
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
