import React, { Component } from 'react'
import Aaron from '../images/aaron.png'

export default class Comments extends Component {
    state = {
        userInput: "",
        comments: [],
        colour: 'red'
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
    heartColour = () => {
        this.setState({
            colour: true
        })
    }
    
        
    render() {

        const allTasks = this.state.comments.map((task, index) => {
            // return <h1>{task}</h1>
            return <li value={index}>
                        {task}
                        <button className="removeButton" onClick={() => this.heartColour(index) }><ion-icon name="heart-outline"></ion-icon></button>
                     </li>
        })

        return (
            <div className="commentsWholeDiv">
                <div className="commentsDiv1">
                <img className="commentsProfilePic" src={Aaron} alt="Aaron"/>
                <input className="input" type="text"  placeholder="Add a comment as..." value={this.state.userInput} onChange={this.onChangeHandler} />
                <button className="postButton" onClick={this.addToDo} >Post</button>
                </div>
                {allTasks}
            </div>
        )
    }
}
