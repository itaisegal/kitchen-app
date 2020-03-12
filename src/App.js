import React from 'react';
import { connect } from 'react-redux';

import Menu from './components/Menu.component';
import List from './components/List.component';

//import Login from './pages/Login.component';

class App extends React.Component {
  render() {
    return (
			<div className='main-content'>
				<Menu />
				<div className='lists'>
					<List type='kitchen'/>
					<List type='recipes'/>
					<List type='shopping'/>
				</div>
      </div>
    );
  }
}

export default connect()(App);
