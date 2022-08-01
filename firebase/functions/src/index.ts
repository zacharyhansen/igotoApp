import * as functions from "firebase-functions";
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Helloo1 logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const createUserDocument = functions.auth.user().onCreate((user) => {
  db.collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
