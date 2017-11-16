import React, { Component } from 'react'
import { easyComp } from 'react-easy-state'
import { Link } from 'react-router-dom'
import store from './store'

class Users extends Component {
  render() {
    if (store.loading) {
      return null
    }

    return (
      <ul className="user-list">
        {store.users.map(user =>
          (<li><Link to={`/comments/${user.login}`} key={user.id}>{user.login}</Link></li>)
        )}
      </ul>
    )
  }
}

export default easyComp(Users)
