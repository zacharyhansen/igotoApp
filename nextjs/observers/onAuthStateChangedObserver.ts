import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

const onAuthStateChangedObserver = (
  auth: Auth,
  setCurrentUser: Dispatch<SetStateAction<User | null>>,
  handleUserLoggedOut: () => void
) => {
  onAuthStateChanged(auth, user => {
    console.log('auth: ', 'obersver ran');
    setCurrentUser(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    } else {
      console.log('auth: ', 'user signed out');
      handleUserLoggedOut();
    }
  });
};

export default onAuthStateChangedObserver;
