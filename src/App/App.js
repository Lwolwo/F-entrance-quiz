import React, { Component } from 'react';
import MemberList from './components/memberList/MemberList';
import Header from './components/header/Header'
import './App.scss';
// TODO GTB-知识点: - 不需要reset.css样式
import './reset.css';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/*TODO GTB-工程实践: - 分组列表命名为Header有歧义*/}
        <Header />
        <MemberList />
      </div>
    );
  }
}

export default App;
