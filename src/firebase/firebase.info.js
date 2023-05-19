// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlPNfWjp4Kx5YM6JhDlKtLOljwnkNnDVc",
  authDomain: "income-hero.firebaseapp.com",
  databaseURL: "https://income-hero.firebaseio.com",
  projectId: "income-hero",
  storageBucket: "income-hero.appspot.com",
  messagingSenderId: "186375285039",
  appId: "1:186375285039:web:fead73f9582769d46059da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
