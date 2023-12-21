// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL9diEcv-UX-wZSrq9LdxRWYNXdzZGgKw",
  authDomain: "medai-aacef.firebaseapp.com",
  projectId: "medai-aacef",
  storageBucket: "medai-aacef.appspot.com",
  messagingSenderId: "265461324216",
  appId: "1:265461324216:web:d46eaac231c949d671d74d"
};

export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'http://localhost:3000/'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    // dynamicLinkDomain: 'http://localhost:3000/'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;