import React from 'react';
import photo from '../assets/images/user.jpg';

function User() {
  return (
    <div className='userContent'>
			<img src={photo} alt='user' />
      <a href='/' className='logOut'>
        log out
      </a>
    </div>
  );
}

export default User;
