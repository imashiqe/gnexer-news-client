// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlv1kC253B6FJYrVPVDysKXdmJpNajjec",
  authDomain: "gnexer-news.firebaseapp.com",
  projectId: "gnexer-news",
  storageBucket: "gnexer-news.appspot.com",
  messagingSenderId: "215806009497",
  appId: "1:215806009497:web:21306483cbacacf1bb5808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;