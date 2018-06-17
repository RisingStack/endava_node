import React, { Component } from 'react';
import { view } from 'react-easy-stack';
import Button from '@material-ui/core/Button';
import store from './store';

class Comments extends Component {
  onChange = ev => (store.commentText = ev.target.value);

  render() {
    return (
      <div>
        <div className="profile">
          <img src={store.user.avatar_url} />
          <h2>{store.user.login}</h2>
        </div>
        <ul className="comments">
          {store.comments.map(comment => (
            <li className="comment" key={comment._id}>
              <span dangerouslySetInnerHTML={{ __html: comment.text }} />
              <span
                className="comment-deleter"
                onClick={() => store.deleteComment(comment._id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <div className="comment-adder">
          <textarea value={store.commentText} onChange={this.onChange} />
          <Button
            onClick={store.addComment}
            variant="raised"
            style={{ marginLeft: 30 }}
          >
            Comment
          </Button>
        </div>
      </div>
    );
  }
}

export default view(Comments);
