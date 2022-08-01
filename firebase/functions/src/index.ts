import { UserRecord } from "firebase-admin/lib/auth/user-record";
import * as functions from "firebase-functions";
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Helloo1 logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const createUserDocument = functions.auth.user().onCreate((user) => {
  // Due to an issue within firebase auth ui, email/password sign up does not invoke
  // with the displayname, instead we must fetch the record first then save
  return admin
    .auth()
    .getUser(user.uid)
    .then((user: UserRecord) => {
      db.collection("users")
        .doc(user.uid)
        .set(JSON.parse(JSON.stringify(user)));
    })
    .catch((error: Error) => {
      console.log("Error fetching user data:", error);
    });
});
