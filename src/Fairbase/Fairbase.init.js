// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app;

//  apiKey: "AIzaSyDF1kjZc4LYomh2hzh_41McgQ-j1t4Hv_U",
//   authDomain: "tradeflow-app.firebaseapp.com",
//   projectId: "tradeflow-app",
//   storageBucket: "tradeflow-app.firebasestorage.app",
//   messagingSenderId: "637143200815",
//   appId: "1:637143200815:web:ff0c0a5855abe9465002da",
