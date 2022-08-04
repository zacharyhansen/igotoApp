import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.CONNECT_PRODUCTION !== 'true'
) {
  connectAuthEmulator(auth, process.env.FIREBASE_AUTH_EMULATOR_URL!);
  connectFirestoreEmulator(
    db,
    process.env.FIREBASE_FIRESTORE_EMULATOR_HOST!,
    parseInt(process.env.FIREBASE_FIRESTORE_EMULATOR_PORT!)
  );
}

const firebaseSignOut = (onSignout?: VoidFunction) => () => {
  signOut(auth)
    .then(() => {
      onSignout && onSignout();
    })
    .catch(error => {
      // An error happened.
      console.error('Error signing out: ', error);
    });
};

export { firebaseApp, db, auth, firebaseSignOut };
