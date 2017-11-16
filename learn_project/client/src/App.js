import React, { Component } from 'react'
import { easyComp } from 'react-easy-state'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './store'
import Users from './Users'
import Comments from './Comments'

class App extends Component {
  constructor () {
    super()
    store.getUsers()
  }
  
  onChange (ev) {
    store.query = ev.target.value
  }

  render() {
    return (
      <Router className="app">
        <div>
          <nav className="app-header">
            <input onChange={this.onChange} value={store.query} placeholder="User name criteria ..." />
            <Link to='/' onClick={store.getUsers}>Filter Users</Link>
          </nav>

          <Route exact path='/' component={Users} />
          <Route path='/comments/:userId' component={Comments} />
        </div>
      </Router>
    )
  }
}

export default easyComp(App)
