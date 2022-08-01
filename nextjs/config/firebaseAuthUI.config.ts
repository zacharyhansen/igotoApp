import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

export const uiConfig = {
  // signInFlow: "popup",
  signInSuccessUrl: "/",
  tosUrl: "/terms-of-service",
  privacyPolicyUrl: "/privacy-policy",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};
