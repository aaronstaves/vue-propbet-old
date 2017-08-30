import Firebase from 'firebase';


const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyBF_hbdCiNx3nPYhsreFHG1odn1ej4dn9g",
  authDomain: "allburritos.firebaseapp.com",
  databaseURL: "https://allburritos.firebaseio.com",
  projectId: "allburritos",
  storageBucket:"allburritos.appspot.com",
  messagingSenderId:"1067611718666"
});

export const fb = firebaseApp;
export const db = firebaseApp.database();
