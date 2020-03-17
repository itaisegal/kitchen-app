import React from 'react';
import photo from '../assets/images/user.jpg';
import { auth } from '../firebase/firebase.utils';

function User() {
  return (
    <div className='userContent'>
      <img src={photo} alt='user' />
      <button className='logOut' onClick={() => auth.signOut()}>
        Sign out
      </button>
    </div>
  );
}

export default User;
