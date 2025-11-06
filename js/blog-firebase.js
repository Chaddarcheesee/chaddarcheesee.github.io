// js/blog-firebase.js
// Import and expose a simple fetchPosts function.
// Replace firebaseConfig in this file with your project values.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQCKj4Bk2pXTRbEFuFzNlC_3tx2osE1YU",
  authDomain: "chaddarcheese-portfolio.firebaseapp.com",
  projectId: "chaddarcheese-portfolio",
  storageBucket: "chaddarcheese-portfolio.firebasestorage.app",
  messagingSenderId: "183685105045",
  appId: "1:183685105045:web:8830b4cba137fee4aee29c",
  measurementId: "G-LMJN51FTW6"
};

let db;
export function initFirebase() {
  if (!db) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
  return db;
}

export async function fetchPosts() {
  initFirebase();
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
