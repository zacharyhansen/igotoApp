import { useCallback, ChangeEvent } from 'react';
import { ref, StorageReference, uploadBytes } from 'firebase/storage';
import { storage } from 'config/firebase.config';
import { User } from 'firebase/auth';
import FirebaseStoragePaths from 'config/FirebaseStoragePaths';

const useUserStorage = (user: User) => {
  const profile = ref(storage, FirebaseStoragePaths.profileImage(user.uid));
  const background = ref(
    storage,
    FirebaseStoragePaths.backgroundImage(user.uid)
  );

  return {
    profileUpload: uploadFile(profile),
    backgroundUpload: uploadFile(background)
  };
};

const uploadFile = (ref: StorageReference) => {
  const handleUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : undefined;
    return selectedFile
      ? uploadBytes(ref, selectedFile)
      : Promise.reject('No file selected');
  }, []);

  return handleUpload;
};

export default useUserStorage;
