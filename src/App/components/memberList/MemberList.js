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
