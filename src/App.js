import React from 'react';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Menu, { options } from './components/Menu.component';
import List from './components/List.component';
import { icons } from './assets/icons';
import Login from './components/Login.component';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const login = this.state.currentUser;
    if (login !== null) {
      return (
        <div className='main-content'>
          <Menu icons={icons} />
          <div className='lists'>
            <List type='kitchen' icon={icons.Kitchen} title={options[0]} />
            <List type='recipes' icon={icons.Recipes} title={options[1]} />
            <List type='shopping' icon={icons.Cart} title={options[2]} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='main-content'>
          <Login />
        </div>
      );
    }
  }
}

export default connect()(App);
