// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCgfvTu9K1Fv5ijFv2rHqSM6UV4v8W7r8w",
//   authDomain: "sports-equipment-store-2ec4b.firebaseapp.com",
//   projectId: "sports-equipment-store-2ec4b",
//   storageBucket: "sports-equipment-store-2ec4b.firebasestorage.app",
//   messagingSenderId: "842266911171",
//   appId: "1:842266911171:web:897c64f30d2ab8e8481d76"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env. VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase setup complete//
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);