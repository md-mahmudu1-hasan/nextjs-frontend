import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKDcQOm3xiIcpIaq8-iEMuulvQ8yEtAeA",
  authDomain: "auth-product-hub.firebaseapp.com",
  projectId: "auth-product-hub",
  storageBucket: "auth-product-hub.firebasestorage.app",
  messagingSenderId: "274641229024",
  appId: "1:274641229024:web:b6221b499cf49940dd2c85",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
