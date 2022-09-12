import { collections, db } from 'config/firebase.config';
import { useEffect, useState } from 'react';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

const useUserDoc = (uid: string) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUserDoc = async () => {
      const docSnap = await getDoc(doc(collections.users, uid));
      setUser(docSnap.data());
    };

    getUserDoc();
  }, []);

  return user;
};

export default useUserDoc;
