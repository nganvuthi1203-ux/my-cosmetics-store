import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// THÊM DÒNG NÀY:
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyDcjPxAzpeZMsSEeS4ZZPmEhGFj6Sqn_cQ",
    authDomain: "my-cosmetics-store.firebaseapp.com",
    projectId: "my-cosmetics-store",
    storageBucket: "my-cosmetics-store.firebasestorage.app",
    messagingSenderId: "179800901551",
    appId: "1:179800901551:web:90eafcdf8d85b8fe33515a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// THÊM DÒNG NÀY:
export const storage = getStorage(app);