import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Stories from './components/Stories.js'



import Footer from './components/Footer.js'
// import Profile from './images/bevs.png'
export default class App extends Component {

  




  render() {
    return (
      <div>
        <Header className="Instagram" />
        <Stories/>
        <Footer footer="Footer" />
      </div>
    )
  }
}

