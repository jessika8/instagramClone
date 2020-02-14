import React, { Component } from 'react'
import Aaron from '../images/aaron.png'


export default class Post extends Component {
    state = {
        userInput: "",
        comments: [],
        heart: false,
        like: 0,
        
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

incramentLike = () => {
    this.setState({
        like: this.state.like +1
    })
}

    heartColour = (like) => {

        if(like === "like") {
            console.log("I like this");
            this.setState({
                heart: true
            })
        } else if(like === "unlike") {
            console.log("I am unliking this");
            this.setState({
                heart: false
            })
        }
        
    }



    render() {

        const allTasks = this.state.comments.map((task, index) => {
            // return <h1>{task}</h1>
            return <li value={index}>
                        {task}
                        {
                            this.state.heart ? <button className="removeButton" onClick={() => this.heartColour("unlike") }><ion-icon name="heart"></ion-icon></button> : 
                        <button className="removeButton" onClick={() => this.heartColour("like") }><ion-icon name="heart-outline"></ion-icon></button>
                        }
                        
                     </li>
        })

        return (

            <div>
                <div className="y">
                <img className="profile" src={Aaron}/>
                <div className="x">
                <h6 className="userName">a_hebs</h6>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <img className="mainPicture" src={this.props.img} alt="img" />
               <div className="firstFourIcon">
               {
                            this.state.heart ? <button className="removeButton" onClick={() => this.heartColour("unlike") }><ion-icon name="heart"></ion-icon></button> : 
                        <button className="removeButton" onClick={() => this.heartColour("like") }><ion-icon name="heart-outline"></ion-icon></button>
                        }

                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon id="bookmark" name="bookmark-outline"></ion-icon> 
                </div>




                <h6>{this.props.like}</h6>
                <h6>a_hebs</h6>
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
