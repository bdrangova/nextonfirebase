import * as firebase from 'firebase/app';
import { auth } from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDvTq9yw8y8bHMBu1B_rc8tYsSotgJiY1o',
  authDomain: 'next-on-firebase-46f36.firebaseapp.com',
  databaseURL: 'https://next-on-firebase-46f36.firebaseio.com',
  projectId: 'next-on-firebase-46f36',
  storageBucket: 'next-on-firebase-46f36.appspot.com',
  messagingSenderId: '364863367670',
  appId: '1:364863367670:web:3bd361b9485d731cce3fd7',
  measurementId: 'G-SBFMW9VMWN',
};
// Initialize Firebase
if (!firebase.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}

export { auth };
