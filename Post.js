import React, { Component } from "react"

export default class Post extends Component {
  render() {
    console.log(name)
    return (
      <div className="Post">
        <div className='Post'>
          <h1>{this.props.title}</h1>
          <p>By {this.props.author}</p>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments: </h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}
