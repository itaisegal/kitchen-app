import React from 'react';
import { connect } from 'react-redux';

import Menu, { options } from './components/Menu.component';
import List from './components/List.component';
import { icons } from './assets/icons';

//import Login from './pages/Login.component';

class App extends React.Component {
  render() {
    const login = false;

    console.log(options);
    return (
      <div className='main-content'>
        {login
          ? `<Menu icons={icons} />
        <div className='lists'>
          <List type='kitchen' icon={icons[0]} title={options[0]}/>
          <List type='recipes' icon={icons[1]} title={options[1]}/>
          <List type='shopping' icon={icons[2]} title={options[2]}/>
        </div>`
          : ''}
      </div>
    );
  }
}

export default connect()(App);
