import React, { Component } from 'react'

export default class Comment extends Component {
    constructor () {
        super()
        this.state = {
            comments : this.props.comments
        }
    }

    render() {
        const commentList = this.state.comments.map((item, index)=> {
            return (
                <li className="comment-list" key={index}>
                    <p>{item}</p>
                </li>
            )
        })
        return (
            <ul className="Comment comment-list ">
                {commentList}
            </ul>
        )
    }
}