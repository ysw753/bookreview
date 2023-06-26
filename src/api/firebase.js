// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getDatabase, get, set, ref, update, push } from "firebase/database";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}
export function logout() {
  signOut(auth).catch(console.error);
}
export function onUserStateChanged(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

const database = getDatabase(app);

export async function addNewReview(reviewData, imageUrl) {
  const id = uuid();
  return set(ref(database, `reviews/${id}`), {
    ...reviewData,
    id,
    image: imageUrl,
    count: 0,
  });
}
export async function getReviews() {
  return get(ref(database, "reviews")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
export async function updateReviewCount(data, num) {
  const newcount = data.count + num;
  const newObj = { ...data, count: newcount };

  return set(ref(database, `reviews/${data.id}`), newObj);
}
