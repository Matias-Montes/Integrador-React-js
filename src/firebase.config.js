import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWrlc2jd2ubX8JyCnbodkKltacboxTnro",
    authDomain: "hipermegaredapp.firebaseapp.com",
    databaseURL: "https://hipermegaredapp-default-rtdb.firebaseio.com",
    projectId: "hipermegaredapp",
    storageBucket: "hipermegaredapp.appspot.com",
    messagingSenderId: "1051748574344",
    appId: "1:1051748574344:web:f0a6f83b041bc7c28c6b3d"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

export { app, firestore, storage };
