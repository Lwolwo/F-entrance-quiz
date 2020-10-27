import React, { Component } from 'react';
import MemberList from './components/memberList/MemberList';
import Header from './components/header/Header'
import './App.scss';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <MemberList />
      </div>
    );
  }
}

export default App;
