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
      <div className='comments'>
        <div className="header">
          <h2>{store.user.login}</h2>
          <img src={store.user.avatar_url} height='200' />
        </div>
        <ul>
          {store.comments.map(comment => <li key={comment._id}>{comment.text}</li>)}
          <li>
            HI
            <textarea value={store.commentText} onChange={this.onChange} />
            <button onClick={this.onClick}>Add Comment</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default easyComp(Comments)
