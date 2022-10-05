
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI8c8l21nO-jMuANikarMaz2CHw1Wx_Ls",
  authDomain: "ecommercereact-ee335.firebaseapp.com",
  projectId: "ecommercereact-ee335",
  storageBucket: "ecommercereact-ee335.appspot.com",
  messagingSenderId: "1060077221054",
  appId: "1:1060077221054:web:b562789a0d54356b885aef"
};

// Initialize Firebase
export const app=  initializeApp(firebaseConfig);