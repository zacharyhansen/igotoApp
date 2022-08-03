import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/home/profile',
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
  signInOptions: [
    'apple.com',
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID
  ]
};
