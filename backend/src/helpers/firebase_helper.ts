import firebase from 'firebase/compat/app'

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";

class FirebaseAuthBackend {
  constructor(firebaseConfig: any) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * Registers the user with given details
   */
  editProfileAPI = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * Login user with given details
   */
  loginUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * forget Password user with given details
   */
  forgetPassword = (email: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email, {
          url:
            window.location.protocol + "//" + window.location.host + "/login",
        })
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Social Login user with given details
   */
  socialLoginUser = (data: any, type: any) => {
    let credential: any = {};
    if (type === "google") {
      credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.token);
    } else if (type === "facebook") {
      credential = firebase.auth.FacebookAuthProvider.credential(data.token);
    }
    return new Promise((resolve, reject) => {
      if (!credential) {
        firebase.auth().signInWithCredential(credential)
          .then((user: any) => {
            resolve(this.addNewUserToFirestore(user));
          })
          .catch((error: any) => {
            reject(this._handleError(error));
          });
      } else {
        // reject(this._handleError(error));
      }
    });
  };

  addNewUserToFirestore = (user: any) => {
    const collection = firebase.firestore().collection("users");
    const { profile } = user.additionalUserInfo;
    const details = {
      firstName: profile.given_name ? profile.given_name : profile.first_name,
      lastName: profile.family_name ? profile.family_name : profile.last_name,
      fullName: profile.name,
      email: profile.email,
      picture: profile.picture,
      createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
    };
    collection.doc(firebase.auth().currentUser?.uid).set(details);
    return { user, details };
  };

  setLoggeedInUser = (user: any) => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem("authUser")) return null;
    return JSON.parse(localStorage.getItem("authUser") || "");
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error: any) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}

let _fireBaseBackend: any = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config: any) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };