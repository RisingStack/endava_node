import React, { Component, Fragment } from 'react';
import { view, Router, params, route } from 'react-easy-stack';
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import store from './store';
import Users from './Users';
import Comments from './Comments';

class App extends Component {
  onChange = ev => (store.query = ev.target.value);

  onKeyPress = ev => {
    if (ev.key === 'Enter') {
      route({ to: '/users', params: { query: store.query } });
    }
  };

  onRoute = async ({ toPage }) => {
    if (toPage === 'users') {
      params.query = params.query || 'endava';
      await store.getUsers();
    } else if (toPage === 'comments') {
      await store.getComments();
    }
  };

  render() {
    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <input
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
              defaultValue={params.query}
              placeholder="Filter users ..."
            />
          </Toolbar>
          {store.isLoading && <LinearProgress color="secondary" />}
        </AppBar>

        <Router defaultPage="users" onRoute={this.onRoute} className="app-body">
          <Users page="users" />
          <Comments page="comments" />
        </Router>
      </Fragment>
    );
  }
}

export default view(App);
