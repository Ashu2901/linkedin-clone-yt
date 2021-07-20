import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA1pS129nqF4qcLK-LQuSKIqf3POYeG9Y",
    authDomain: "linkedin-clone-yt-7a867.firebaseapp.com",
    projectId: "linkedin-clone-yt-7a867",
    storageBucket: "linkedin-clone-yt-7a867.appspot.com",
    messagingSenderId: "639840850068",
    appId: "1:639840850068:web:4576066264019279472481",
    measurementId: "G-VDM6CVY5KH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
