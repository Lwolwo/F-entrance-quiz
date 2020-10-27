import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMemberList: [],
    };
  }

  componentDidMount() {
    const list = sessionStorage.getItem('list');
    this.setState({
      sortMemberList: list ? list : []
    })
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
    sessionStorage.setItem('list', result);
  }

  render() {
    const { sortMemberList } = this.state;
    return (
      <div className="container">
        <div className="header">
          <h1>分组列表</h1>
          <div className="button" onClick={() => this.sortMember()}>
            分组学员
          </div>
        </div>
        <div className="group-table">
          {sortMemberList.length !== 0 &&
            sortMemberList.map((item, index) => {
              return (
                <div className="group">
                  <div className="title">第{index + 1}组</div>
                  <div className="group-item">
                    {
                      item.map((itemChild) => {
                        return <div className="member-card">{itemChild.id}. {itemChild.name}</div>
                      })
                    }
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
