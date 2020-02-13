import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Stories from './components/Stories.js'



export default class App extends Component {
  render() {
    return (
      <div>
        <Header className="Instagram" />
        <Stories/>
      </div>
    )
  }
}

