import React, { Component } from 'react';
import { view, Link } from 'react-easy-stack';
import store from './store';

export default view(() => (
  <ul className="user-list">
    {store.users.map(user => (
      <li key={user.id}>
        <Link to="/comments" params={{ userId: user.login }}>
          {user.login}
        </Link>
      </li>
    ))}
  </ul>
));
