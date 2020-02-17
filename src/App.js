import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Stories from './components/Stories.js'
import Direct from './components/Direct'
// import Post from './components/Post'


import Post1 from './images/post1.png'
import Post2 from './images/post2.png'
import Post3 from './images/post3.jpg'
import Post4 from './images/post4.jpg'
import Post5 from './images/post5.jpg'
import Post6 from './images/post6.jpg'
import Post from './components/Post.js'
import Post7 from './images/quiggs.jpg'
import Footer from './components/Footer.js'

// profile pics
import profile1 from './images/kendallprofile.png'
import profile2 from './images/bevs.png'
import profile3 from './images/kylieprofile.png'
import profile4 from './images/jbprofile.png'
import profile5 from './images/meganlogo.png'
import profile6 from './images/anthony.png'




export default class App extends Component {






  render() {
    return (
      <div className="appDiv">
      
        <Header className="Instagram" />
        <Stories />
        <Footer footer="Footer" />
        <Post profilePic={profile1} userName="KendallJenner" img={Post1} caption="G casually laying around. Isn't she gorg xx"/>
        <Post profilePic={profile1} userName="HumptyDumpty" img={Post2} caption="feeling on eggde x saucy minxx #sauce"/>
        <Post profilePic={profile2} userName="Kylie_xo" img={Post3} caption="felt cute, might delete l8tr x x <3"/>
        <Post profilePic={profile3} userName="Justin_b" img={Post4} caption="#liveLaughLove"/>
        <Post profilePic={profile4} userName="Bill_1234" img={Post5} caption="im really not a bad guy tho x #duh"/>
        <Post profilePic={profile5} userName="The Royals" img={Post6}  caption="hope andrew hasnt been eyein me bird up #itsOkSheNotAMinor"/>
        <Post profilePic={profile6} userName="Quiggs*123" img={Post7} caption="sick of this shit. birds hit me up" />
      
       
        
        {/* <Footer  /> */}
        
      </div>
    )
  }
}

