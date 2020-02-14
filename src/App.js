import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Stories from './components/Stories.js'

import Post1 from './images/post1.png'
import Post2 from './images/post2.png'
import Post3 from './images/post3.jpg'
import Post4 from './images/post4.jpg'
import Post5 from './images/post5.jpg'
import Post6 from './images/post6.jpg'
import Post from './components/Post.js'
import Footer from './components/Footer.js'
// import Profile from './images/bevs.png'
export default class App extends Component {

  




  render() {
    return (
      <div>
      
        <Header className="Instagram" />
        <Stories/>
        <Post img={Post1} caption="Some text here"/>
       
        <Post img={Post2} />
        <Post img={Post3} />
        <Post img={Post4} />
        <Post img={Post5} />
        <Post img={Post6}  />
      
       
        
        <Footer  />
        
      </div>
    )
  }
}

