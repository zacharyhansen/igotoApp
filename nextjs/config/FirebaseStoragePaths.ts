/**
 * Helper to store all firebase storage paths
 */
export default class FirebaseStoragePaths {
  public static profileImage = (uid: string) => `users/${uid}/profileImage`;

  public static backgroundImage = (uid: string) =>
    `users/${uid}/backgroundImage`;
}
