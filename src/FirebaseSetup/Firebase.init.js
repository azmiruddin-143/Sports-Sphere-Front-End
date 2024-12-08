// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgfvTu9K1Fv5ijFv2rHqSM6UV4v8W7r8w",
  authDomain: "sports-equipment-store-2ec4b.firebaseapp.com",
  projectId: "sports-equipment-store-2ec4b",
  storageBucket: "sports-equipment-store-2ec4b.firebasestorage.app",
  messagingSenderId: "842266911171",
  appId: "1:842266911171:web:897c64f30d2ab8e8481d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);