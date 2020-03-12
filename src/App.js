import React from 'react';
import { connect } from 'react-redux';

import Menu from './components/Menu.component';

//import Login from './pages/Login.component';

class App extends React.Component {
  render() {
    return (
			<div className='main-content'>
        <Menu />
      </div>
    );
  }
}

export default connect()(App);
