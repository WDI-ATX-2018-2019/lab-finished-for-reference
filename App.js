import React, { Component } from "react"
import "./App.css"
import Post from "./Post"

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Post
          title='this is a title'
          author='this is an author'
          body='this is a body'
          comments='this is a comment'
        />
      </div>
    )
  }
}
