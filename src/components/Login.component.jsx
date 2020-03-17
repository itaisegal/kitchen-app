import React from 'react';
import Logo from './Logo.component';
import { icons } from '../assets/icons';

import { signInWithGoogle } from '../firebase/firebase.utils';

function Login() {
  return (
    <div className='login'>
      <Logo />
      <button onClick={signInWithGoogle} className='login__button'>
        <span>{icons.Google}</span>Sign in with Google
      </button>
    </div>
  );
}

export default Login;
