//import logo from './logo.svg';
//import { render } from '@testing-library/react';

import React, { Component } from 'react';
//import './App.css';
import UserForm from './components/Registration'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


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
