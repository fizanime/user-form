//import logo from './logo.svg';
//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import UserForm from './components/Form';

class App extends Component {
render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App
