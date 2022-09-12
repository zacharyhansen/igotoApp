import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  connectFirestoreEmulator,
  DocumentData,
  CollectionReference,
  collection
} from 'firebase/firestore';
import { getAuth, connectAuthEmulator, signOut, User } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

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
const storage = getStorage(firebaseApp);

// Connect emulators instead if configured
if (
  process.env.NODE_ENV !== 'production' &&
  process.env.CONNECT_PRODUCTION !== 'true'
) {
  connectAuthEmulator(auth, process.env.AUTH_EMULATOR_URL!);
  connectFirestoreEmulator(
    db,
    process.env.FIREBASE_EMULATOR_HOST!,
    parseInt(process.env.FIRESTORE_EMULATOR_PORT!)
  );
  connectStorageEmulator(
    storage,
    process.env.FIREBASE_EMULATOR_HOST!,
    parseInt(process.env.STORAGE_EMULATOR_PORT!)
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

// type firestore - use collections instead of db whenever possible
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const usersCol = createCollection<User>('users');

/**
 * All firestore collections with appropiate type
 */
const collections = {
  users: createCollection<User>('users')
};

export { firebaseApp, db, collections, auth, storage, firebaseSignOut };
