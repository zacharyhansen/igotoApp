import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

const onAuthStateChangedObserver = (
  auth: Auth,
  setCurrentUser: Dispatch<SetStateAction<User | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  handleUserLoggedOut: () => void
) => {
  onAuthStateChanged(auth, user => {
    console.log('onAuthStateChanged');
    setCurrentUser(user);
    setLoading(false);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    } else {
      console.log(
        'auth: ',
        'user signed out via onAuthStateChangedObserver event'
      );
      handleUserLoggedOut();
    }
  });
};

export default onAuthStateChangedObserver;
