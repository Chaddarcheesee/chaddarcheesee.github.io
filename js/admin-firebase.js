// js/admin-firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// REPLACE with your Firebase config (same as blog-firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyCQCKj4Bk2pXTRbEFuFzNlC_3tx2osE1YU",
  authDomain: "chaddarcheese-portfolio.firebaseapp.com",
  projectId: "chaddarcheese-portfolio",
  storageBucket: "chaddarcheese-portfolio.firebasestorage.app",
  messagingSenderId: "183685105045",
  appId: "1:183685105045:web:8830b4cba137fee4aee29c",
  measurementId: "G-LMJN51FTW6"
};

let auth, db;
export function initAdminFirebase() {
  if (!auth) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
  return { auth, db };
}

export async function adminLogin(email, password) {
  initAdminFirebase();
  return signInWithEmailAndPassword(auth, email, password);
}
export async function adminLogout() {
  return signOut(auth);
}
export function onAuthChange(cb) {
  initAdminFirebase();
  return onAuthStateChanged(auth, cb);
}

export async function publishPost(post) {
  initAdminFirebase();
  const collectionRef = collection(db, "posts");
  const payload = { ...post, date: new Date().toISOString() };
  const docRef = await addDoc(collectionRef, payload);
  return docRef.id;
}

export async function fetchPostsForAdmin() {
  initAdminFirebase();
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deletePostById(id) {
  initAdminFirebase();
  await deleteDoc(doc(db, "posts", id));
}
