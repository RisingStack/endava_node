import React, { Component } from 'react'
import { easyComp } from 'react-easy-state'
import store from './store'

class Comments extends Component {
  constructor (props) {
    super(props)
    store.initComments(props.match.params.userId)
  }

  onChange (ev) {
    store.commentText = ev.target.value
  }

  onClick () {
    store.addComment()
  }

  render() {
    if (store.loading) {
      return null
    }

    return (
      <div>
        <div className="profile">
          <img src={store.user.avatar_url} />
          <h2>{store.user.login}</h2>
        </div>
        <ul className='comments'>
          {store.comments.map(comment => (
            <li className='comment' key={comment._id}>
              <span>{comment.text}</span>
              <span className='comment-deleter' onClick={() => store.deleteComment(comment._id)}>X</span>
            </li>
          ))}
        </ul>
        <div className='comment-adder'>
          <textarea value={store.commentText} onChange={this.onChange} />
          <span className='comment-adder-button' onClick={this.onClick}>Add Comment</span>
        </div>
      </div>
    )
  }
}

export default easyComp(Comments)
