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
    // TODO GTB-工程实践: * 建议把数据请求提取到单独的service
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
      // TODO GTB-知识点: * 没有使用语义标签，太多div
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
                // TODO GTB-知识点: - div嵌套过深
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
