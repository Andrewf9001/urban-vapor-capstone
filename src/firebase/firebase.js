import "babel-polyfill";
import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
