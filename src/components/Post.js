import React, { Component } from 'react'
import Aaron from '../images/aaron.png'


export default class Post extends Component {
    state = {
        userInput: "",
        comments: [],
        heart: false,
        like: 0,
        heart2: false,
        
    }

    onChangeHandler = (event) => {
        this.setState({
          userInput: event.target.value
    
        })
      }

      removeToDo = (index) => {
        console.log("delete is working")
        // index - this parameter is the index which start modifying the array (with origin at 0).
        // 1 - The number of elements to be removed from the starting index.
        this.state.comments.splice(index, 1)
        this.setState({
          comments: this.state.comments
    
        })
      }

      addToDo = () => {
        console.log("Add Button is working")
        if (this.state.userInput === "") {
          alert("Please enter a comment!")
        } else {
        this.setState({
          comments: [...this.state.comments, this.state.userInput],
          userInput: ""
        })
    }
}


heartColour = (like) => {
    
    if(like === "like") {
        console.log("I like this");
        this.setState({
            heart: true,
            like: this.state.like +1
        }) 
        
    } else if(like === "unlike") {
        console.log("I am unliking this");
        this.setState({
            heart: false,
            like: this.state.like -1
        })
    }
    
}
    heartColour2 = (like2) => {

        if(like2 == "like2") {
            console.log("I like this");
            this.setState({
                heart2: true
            })
        } else if(like2 == "unlike2") {
            console.log("I am unliking this");
            this.setState({
                heart2: false
            })
        }
        
    }


    render() {

        const allTasks = this.state.comments.map((task, index) => {
            // return <h1>{task}</h1>
            return <li value={index}>
                        {task}
                        {/* {
                            this.state.heart ? <button className="removeButton" onClick={() => this.heartColour("unlike") }><ion-icon name="heart"></ion-icon></button> : 
                        <button className="removeButton" onClick={() => this.heartColour("like") }><ion-icon name="heart-outline"></ion-icon></button>
                        } */}
                        {
                            this.state.heart2 ? <button className="removeButton" onClick={() => this.heartColour2("unlike2") }><ion-icon name="heart"></ion-icon></button> : 
                        <button className="removeButton" onClick={() => this.heartColour2("like2") }><ion-icon name="heart-outline"></ion-icon></button>
                        }
                        
                     </li>
        })

        return (

            <div>
                <div className="y">
                    <div className="x">
                <img className="profile" src={this.props.profilePic}/>
                <h6 className="userName">{this.props.userName}</h6>
                </div>
                <div className="icon" >
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <img className="mainPicture" src={this.props.img} alt="img" />
               <div className="firstFourIcon">
               {
                            this.state.heart ? <button className="removeButton" onClick={() => this.heartColour("unlike")} ><ion-icon name="heart"></ion-icon></button> : 
                        <button className="removeButton" onClick={() => this.heartColour("like") }><ion-icon name="heart-outline"></ion-icon></button>
                        }

                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon id="bookmark" name="bookmark-outline"></ion-icon> 
                </div>




                <h6>{this.state.like} likes</h6>
                <h6>{this.props.userName}</h6>
                <p>{this.props.caption}</p>

                <div className="commentsWholeDiv">
                <div className="commentsDiv1">
                <img className="commentsProfilePic" src={Aaron} alt="Aaron"/>
                <input className="input" type="text"  placeholder="Add a comment as..." value={this.state.userInput} onChange={this.onChangeHandler} />
                <button className="postButton" onClick={this.addToDo} >Post</button>
                </div>
                {allTasks}
            </div>

            </div>
        )
    }
}
