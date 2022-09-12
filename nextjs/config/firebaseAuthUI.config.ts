import { routes } from 'constants/routes';
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: routes.DASHBOARD,
  tosUrl: routes.TERMS,
  privacyPolicyUrl: routes.PRIVACY,
  signInOptions: [
    'apple.com',
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID
  ]
};
