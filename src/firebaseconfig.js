import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,

    authDomain: process.env.REACT_APP_AUTH_DOMAIN,

    projectId: process.env.REACT_APP_PROJECT_ID,

    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID,

    appId: process.env.REACT_APP_ID,

    measurementId: process.env.REACT_APP_MEASUREMENT_ID

  };

  // Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app

firebase.analytics();