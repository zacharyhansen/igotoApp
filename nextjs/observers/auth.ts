import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useRouter } from 'next/router';

onAuthStateChanged(auth, user => {
  const router = useRouter();
  if (user) {
    console.log('user found');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('user not found');

    router.push('/login');
  }
});
