import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header instagram="Instagram" />
      </div>
    )
  }
}

