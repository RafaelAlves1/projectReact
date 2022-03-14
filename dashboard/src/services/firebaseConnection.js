import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

let firebaseConfig = {
  apiKey: "AIzaSyBUk6Jbx94h6dvu56_QC_r-4UhBPoZc8Hw",
  authDomain: "dashboard-548d6.firebaseapp.com",
  projectId: "dashboard-548d6",
  storageBucket: "dashboard-548d6.appspot.com",
  messagingSenderId: "367191339171",
  appId: "1:367191339171:web:f35f7499ff9c23454bcf16",
  measurementId: "G-CPDNVML63T"
};

if(!firebase.apps.length){
  
  firebase.initializeApp(firebaseConfig);
}

export default firebase;