import React, { Component } from 'react';
import './MemberList.scss';

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [
        {
          name: '123',
          id: '1',
        },
        {
          name: '1234',
          id: '2',
        },
      ],
    };
  }

  async fetchData() {
    const result = await fetch('http://localhost:8080/memberList', {
      method: 'get',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      return Promise.reject();
    });
    this.setState({
      memberList: result,
    });
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { memberList } = this.state;
    return (
      <div className="member-list">
        <h1>学员列表</h1>
        <div className="members-wrapper">
          {memberList.map((item) => {
            return (
              <div className="member-card">
                {item.id}. {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MemberList;
