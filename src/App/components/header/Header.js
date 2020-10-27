import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>分组列表</h1>
        <div className="button">分组学员</div>
      </div>
    );
  }
}

export default Header;
