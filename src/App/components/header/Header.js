import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMemberList: []
    };
  }

  async sortMember() {
    const result = await fetch('http://localhost:8080/sortList', {
      method: 'get',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      return Promise.reject();
    });
    this.setState({
      sortMemberList: result,
    });
  }

  render() {
    return (
      <div className="header">
        <h1>分组列表</h1>
        <div className="button" onClick={() => this.sortMember()}>
          分组学员
        </div>
      </div>
    );
  }
}

export default Header;
