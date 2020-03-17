import React from 'react';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';

function User({ currentUser }) {
  console.log(currentUser);
  //const photoURL = currentUser.photoURL;
  return (
    <div className='userContent'>
      {/* <img src={photoURL} alt='user' /> */}
      <button className='logOut' onClick={() => auth.signOut()}>
        Sign out
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(User);
