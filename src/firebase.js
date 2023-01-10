import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAI7QikQLX9Q7ET1OWOCnCoP0UfyvIID6M',
  authDomain: 'netflix-clone-3cd96.firebaseapp.com',
  projectId: 'netflix-clone-3cd96',
  storageBucket: 'netflix-clone-3cd96.appspot.com',
  messagingSenderId: '309337890908',
  appId: '1:309337890908:web:cb13f2bfeb35fc2f234699',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
